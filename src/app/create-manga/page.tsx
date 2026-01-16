"use client";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { useHistoryCreate } from "../hooks/use-history-create";
import { StoryMessage } from "../components/story-message";
import { StoryLoader } from "../components/story-loader";
import { StoryInput } from "../components/storyInput";
interface CreateMangaProps {
  genre: string;
}
import Link from "next/link";
export default function CreateManga({ genre }: CreateMangaProps) {
  const { messages, input, isLoading, handleSubmit, handleInputChange , error } =
    useHistoryCreate(genre);

  return (
    <div className="font-sans  h-screen  p-4   mx-auto lg:overflow-hidden">
      <section className="flex flex-col md:flex-row items-start lg:justify-around pb-4 lg:pb-0">
        <div className="flex flex-col items-start md:flex-row lg:items-center pb-3 lg:pb-0 gap-4 lg:gap-12 ">
          <Link className="text-xl bg-accent px-4 py-2 rounded-sm hover:text-purple-500" href="/">Inicio</Link>
          <p className="text-2xl font-bold ">
            Generando un manga de <span className="text-purple-500">{genre}</span>
          </p>
        </div>
        <p className="w-[300px] text-xs font-bold">Copia la prompt de la imagen y ve a GEMINI para crear la imagen de tu manga</p>
        <a className="text-xl  bg-accent px-4 py-2 rounded-sm mt-4 lg:mt-0 hover:text-purple-500" href="https://gemini.google.com/app?hl=es" target="_blanck">
         Ir a GEMINI
        </a>
      </section>
      <div className="flex flex-col h-screen">
        <Conversation>
          <ConversationContent className="max-w-xl mx-auto">
            {error && <p className="text-red-500 text-2xl">Error al generar historia</p>}
            {messages.map((message) => (
              <StoryMessage key={message.id} message={message} />
            ))}

            {isLoading && <StoryLoader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
        <div className="max-w-4xl w-full mb-10 lg:mb-3  mx-auto pb-4">
          {!error &&
          <StoryInput
            input={input}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
          }
        </div>
        {input}
      </div>
    </div>
  );
}
