import { useEffect, useState } from "react";

import type { HistoryMessage } from "@/lib/types";

export function useHistoryCreate(genre: string) {
  const [messages, setMessages] = useState<HistoryMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    startStory();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const startStory = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-story", {
        method: "POST",
        body: JSON.stringify({
          isStart: true,
          genre,
        }),
      });
      if (!response.ok) {
        setError(true);
        throw new Error("Failed to genertae story");
      }
      const data = await response.json();
      const messageId = crypto.randomUUID();

      const newMessage: HistoryMessage = {
        id: messageId,
        role: "assistant",
        content: data.narrative,
        promptImage: data.imagePrompt,
      };
      setMessages([newMessage]);
       setMessages((prevMessages) =>
        prevMessages.map((message) => {
          if (message.id === messageId) {
            return { ...message,  imageLoading: false };
          }
          return message;
        }))
    } catch (error) {
      console.error("Error generete story: ", error);
    } finally {
      setIsLoading(false);
    }
  };

 

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (_: any, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: HistoryMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
    };

    setIsLoading(true);
    setInput("");
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch("/api/generate-story", {
        method: "POST",
        body: JSON.stringify({
          usserMessage: input,
          conversationHistory: messages,
          isStart: false,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to genertae story");
      }
      const data = await response.json();
      const messageId = crypto.randomUUID();

      const assitantMessage: HistoryMessage = {
        id: messageId,
        role: "assistant",
        content: data.narrative,
        promptImage: data.imagePrompt,
      };

      setMessages((prevMessages) => [...prevMessages, assitantMessage]);
    } catch (error) {
      console.error("Error generting story: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };
  return {
    messages,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    error
  };
}
