import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  avaliableTags: Tag[];
};

export function NewNote({ onSubmit, onAddTag, avaliableTags }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">Create a New note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} avaliableTags={avaliableTags} />
    </>
  );
}
