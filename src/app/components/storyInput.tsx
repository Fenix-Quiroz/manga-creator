import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
  PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { UI_MESSAGES } from "@/lib/consts";

interface StoryInputProps {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (
    _PromptInputMessage: PromptInputMessage,
    e: React.FormEvent<HTMLFormElement>
  ) => void;
  isLoading: boolean;
}

export function StoryInput(storyProps: StoryInputProps) {
  const { input, onInputChange, onSubmit, isLoading } = storyProps;
  const inputTrimmed = input.trim();
  const inputSubmitIsDisabled = isLoading || inputTrimmed === "";
  return (
    <PromptInput onSubmit={onSubmit} className="relative pr-8 mb-9">
      <PromptInputTextarea
        value={input}
        onChange={onInputChange}
        placeholder={UI_MESSAGES.PLACEHOLDERS.INPUT}
        disabled={isLoading}
      />
      <PromptInputSubmit
        disabled={inputSubmitIsDisabled}
        className="absolute bottom-2 right-2"
      />
    </PromptInput>
  );
}
