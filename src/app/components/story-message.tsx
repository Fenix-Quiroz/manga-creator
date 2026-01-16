import { Message, MessageContent } from "@/components/ai-elements/message";
import { type HistoryMessage } from "@/lib/types";
import { Response } from "@/components/ai-elements/response";
import { ToastContainer, toast } from "react-toastify";
export function StoryMessage({ message }: { message: HistoryMessage }) {
  const { role, content, promptImage } = message;
  const imagePomptFinal = `
  Generate a manga style image in 16:9 aspect ratio: ${promptImage}.  
  Use black and white ink aesthetics, high contrast shading, dynamic line work, and panel-like composition.  
  The image should be in landscape format (16:9 ratio).
  `;
  const notify = () => toast("Copiado al portapapeles");
  const copyPromptImage = (promptImage: string) => {
    navigator.clipboard.writeText(promptImage);
    notify();
  };

  return (
    <Message from={role}>
      <MessageContent>
        <Response>{content}</Response>
        {role === "assistant" && (
          <p className="text-sm text-gray-400">
            <span className="text-gray-500">
              Prompt para generar la imagen:{" "}
            </span>
            <span
              className="cursor-pointer"
              onClick={() => copyPromptImage(imagePomptFinal)}
            >
              {imagePomptFinal}
            </span>
            <br />
            <span className="text-gray-500">
              Click en la prompt para copiarla
            </span>
          </p>
        )}
        <ToastContainer />
      </MessageContent>
    </Message>
  );
}
