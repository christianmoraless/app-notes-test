import { FC, useEffect, useState } from "react";
import { Note } from "../interfaces";

interface Props {
  note: Note[];
  setEditData: (state: Note) => void;
  deleteNote: (state: number) => void;
}
export const Table: FC<Props> = ({ note, setEditData, deleteNote }) => {
  return (
    <table className="table-auto mt-8 w-full">
      <thead className="bg-[#7291A8] text-[#fff]">
        <tr>
          <th className="text-left font-semibold py-2 px-3">Id</th>
          <th className="text-left font-semibold py-2 px-3">Title</th>
          <th className="text-left font-semibold py-2 px-3">Content</th>
          <th className="text-left font-semibold py-2 px-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {note.length === 0
          ? "No hay data"
          : note.map((item, key) => (
              <tr key={key} className="hover:bg-[#fafafa]">
                <td className="py-2 px-3">{item.id}</td>
                <td className="py-2 px-3">{item.title}</td>
                <td className="py-2 px-3">{item.body}</td>
                <td className="py-2 px-3">
                  <button
                    className="bg-[#1E293B] px-5 py-1.5 text-[#fff] text-sm rounded-md text-sm"
                    onClick={() => setEditData(item)}>
                    Update
                  </button>
                  <button
                    className="bg-[#1E293B] ms-5 px-5 py-1.5 text-[#fff] text-sm rounded-md text-sm"
                    onClick={() => deleteNote(item.id!)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};
