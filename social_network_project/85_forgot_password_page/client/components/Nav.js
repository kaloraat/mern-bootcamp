import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";

const Nav = () => {
  const [current, setCurrent] = useState("");

  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  // console.log("CURRENT => ", current);
  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState({ user: {}, token: "" });
    router.push("/login");
  };
  // console.log(state.token);

  return (
    <nav
      className="nav d-flex justify-content-end"
      style={{ backgroundColor: "blue" }}
    >
      <Link href="/">
        <a className={`nav-link text-light logo mr-auto`}>MERNCAMP</a>
      </Link>

      {state && state.token ? (
        <>
          <Link href="/user/dashboard">
            <a
              className={`nav-link text-light ${
                current === "/user/dashboard" && "active"
              }`}
            >
              Dashboard
            </a>
          </Link>
          <a onClick={logout} className={`nav-link text-light`}>
            Logout
          </a>
        </>
      ) : (
        <>
          <Link href="/login">
            <a
              className={`nav-link text-light ${
                current === "/login" && "active"
              }`}
            >
              Login
            </a>
          </Link>
          <Link href="/register">
            <a
              className={`nav-link text-light ${
                current === "/register" && "active"
              }`}
            >
              Register
            </a>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
