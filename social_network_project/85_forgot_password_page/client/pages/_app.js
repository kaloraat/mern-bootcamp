// you don't need ././ path while importing from node_modules
import { UserProvider } from "../context/UserContext";
import Nav from "../components/Nav";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "../public/css/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Nav />
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
