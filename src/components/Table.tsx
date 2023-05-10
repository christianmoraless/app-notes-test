import { FC } from "react";
import { Note } from "../interfaces";

interface Props {
  data: Note[];
}
export const Table: FC<Props> = ({ data }) => {
  console.log();
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
