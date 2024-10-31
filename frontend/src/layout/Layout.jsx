import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, Box } from "@mui/material";

const Layout = ({ children, ...rest }) => {
  return (
    <div className="h-full w-full z-0">
      <NavBar {...rest} />

      <div className="h-full w-full mb-5">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
