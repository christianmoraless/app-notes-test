import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}
export const Container: FC<Props> = ({ children }) => {
  return <div className="p-10 mx-auto">{children}</div>;
};
