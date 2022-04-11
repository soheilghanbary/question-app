import { FC } from "react";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="container p-5 mx-auto">
      <Navbar />
      <div className="my-4">{children}</div>
    </div>
  );
};

export default Layout;
