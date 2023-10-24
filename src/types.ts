export interface NoteData {
  title: string;
  markdown: string;
  tags: Tag[];
}

export interface RawNote {
  id: string;
}

export interface RawNoteData {
  title: string;
  markdown: string;
  tagIds: string[];
}

export type Note = {
  id: string;
} & NoteData;

export interface Tag {
  id: string;
  label: string;
}
