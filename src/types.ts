export interface NoteData {
  title: string;
  markdown: string;
  tags: Tag[];
}

export interface SimplifiedNote {
  tags: Tag[];
  title: string;
  id: string;
}

export type RawNote = {
  id: string;
} & RawNoteData;

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
