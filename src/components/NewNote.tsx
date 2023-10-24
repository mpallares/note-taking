import { NoteData, RawNote, Tag } from '../types';
import { NoteForm } from './NoteForm';

interface NewNoteProps {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

export const NewNote = ({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) => {
  return (
    <>
      <h1 className='mb-4'>NewNote</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};
