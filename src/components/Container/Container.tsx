import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <main className="max-w-7x1 mx-auto px-4 py-6">{children}</main>;
};

export default Container;
