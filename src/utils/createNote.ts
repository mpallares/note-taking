import { NoteData, RawNote } from '../types';
import { v4 as uuidV4 } from 'uuid';

export const onCreateNote = (
  { tags, ...data }: NoteData,
  setNotes: (prevNotes: (prev: RawNote[]) => RawNote[]) => void
) => {
  setNotes((prevNotes: RawNote[]) => {
    const newNote = {
      ...data,
      id: uuidV4(),
      tagIds: tags.map((tag) => tag.id),
    };
    return [...prevNotes, newNote];
  });
};
