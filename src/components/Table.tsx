import { FC, useEffect, useState } from "react";
import { Note } from "../interfaces";

interface Props {
  note: Note[];
}
export const Table: FC<Props> = ({ note }) => {
  useEffect(() => {}, []);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Content</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {note.length === 0
          ? "No hay data"
          : note.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};
