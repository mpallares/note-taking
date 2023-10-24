import { Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NewNote } from './components/NewNote';
import { NoteData, RawNote, Tag } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useMemo } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { NoteList } from './components/NoteList';

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => {
          return note.tagIds.includes(tag.id);
        }),
      };
    });
  }, [notes, tags]);

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag: Tag) => tag.id) },
      ];
    });
  };

  const addTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={<NoteList />} />
        <Route
          path='/new'
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route path='/:id'>
          <Route index element={<h1>show</h1>} />
          <Route path='edit' element={<h1>edit</h1>} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
  );
}

export default App;
