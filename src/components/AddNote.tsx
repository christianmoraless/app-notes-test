import { ChangeEvent, FC, useState } from "react";
import { Note } from "../interfaces";

const form = {
  title: "",
  body: "",
};
interface Props {
  addNote: (note: Note) => void;
}

export const AddNote: FC<Props> = ({ addNote }) => {
  const [formData, setFormData] = useState<Note>(form);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNote(formData);
  };

  return (
    <div>
      <div>
        <h3>Add note</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Id</label>
            <input readOnly={true} type="number" name="id" />
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              id=""
              placeholder=""
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Body</label>
            <input
              type="text"
              id=""
              placeholder=""
              name="body"
              value={formData.body}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};
