export type MangaGenres = "Action" | "Adventure" | "Comedy" | "Drama" | "Fantasy" | "Historical" | "Horror" | "Romance";
export type Role = "user" | "assistant";
export interface HistoryMessage {
  id: string;
  role: Role;
  content: string;
  promptImage?: string;
}

export interface ConversationMessage {
  role: Role;
  content: string;
}
export interface GenerateStoryRequest {
  usserMessage: string;
  genre: MangaGenres;
  conversationHistory: ConversationMessage[];
  isStart: boolean;
}


export interface GenerateStoryResponse {
  narrative: string;
  imagePrompt: string;
}
