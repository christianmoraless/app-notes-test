import { ChangeEvent, FC, useEffect, useState } from "react";
import { Note } from "../interfaces";

const form = {
  title: "",
  body: "",
};
interface Props {
  addNote: (note: Note) => void;
  editData: any;
  updateNote: any;
}

export const AddNote: FC<Props> = ({ addNote, editData, updateNote }) => {
  const [formData, setFormData] = useState<Note>(form);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.title && formData.body) {
      if (editData) {
        updateNote(formData);
      } else {
        formData.id = Date.now();
        addNote(formData);
        setFormData({
          title: "",
          body: "",
          id: null!,
        });
      }
    }
    addNote(formData);
  };

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({
        title: "",
        body: "",
        id: 0,
      });
    }
  }, [editData]);

  return (
    <div>
      <div className="">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Add note
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-gray-300 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Content
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-gray-300 sm:max-w-md">
                  <input
                    type="text"
                    name="body"
                    value={formData.body}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="px-5 py-1.5 bg-[#1E293B] mt-2 rounded-md text-[#fff] text-sm">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
