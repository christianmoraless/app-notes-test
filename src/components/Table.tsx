import { FC, useEffect, useState } from "react";
import { Note } from "../interfaces";

interface Props {
  note: Note[];
  setEditData: (state: Note) => void;
  deleteNote: (state: number) => void;
  sortById: () => void;
  sortByTitle: () => void;
  sortByContent: () => void;
}
export const Table: FC<Props> = ({
  note,
  setEditData,
  deleteNote,
  sortById,
  sortByTitle,
  sortByContent,
}) => {
  return (
    <div className="table-responsive">
      <table className="table-auto overflow-x-auto w-full my-5" id="table">
        <thead className="bg-[#7291A8] text-[#fff]">
          <tr>
            <th
              className="text-left font-semibold py-2 px-3 cursor-pointer"
              onClick={() => sortById()}>
              Id
            </th>
            <th
              className="text-left font-semibold py-2 px-3 cursor-pointer"
              onClick={() => sortByTitle()}>
              Title
            </th>
            <th
              className="text-left font-semibold py-2 px-3 cursor-pointer"
              onClick={() => sortByContent()}>
              Content
            </th>
            <th className="text-left font-semibold py-2 px-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {note.length === 0
            ? "No data"
            : note.map((item, key) => (
                <tr key={key} className="hover:bg-[#fafafa]">
                  <td className="py-2 px-3">{item.id}</td>
                  <td className="py-2 px-3">{item.title}</td>
                  <td className="py-2 px-3">{item.body}</td>
                  <td className="py-2 px-3 options">
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
    </div>
  );
};
