import { ChangeEvent, useState } from "react";

const form = {
  id: "",
  title: "",
  body: "",
};

export const AddNote = () => {
  const [formData, setFormData] = useState(form);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("notes", JSON.stringify(formData));
  };

  return (
    <div>
      <div>
        <h3>Add note</h3>
        <form onSubmit={handleSubmit}>
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
