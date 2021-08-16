import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context/UserContext";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);

  const router = useRouter();
  const [state] = useContext(UserContext);

  useEffect(() => {
    if (state && state.token) getCurrentUser();
  }, [state && state.token]);

  const getCurrentUser = async () => {
    try {
      // make sure to send token in headers
      // else you will see flickering page with non-stop api requests
      // because home page is trying to redirect to login
      // login will redirect back to home because user is logged in
      let { data } = await axios.get(`/current-user`, {});
      console.log("DATA getCurrent_user", data);
      if (data.ok) setOk(true);
    } catch (err) {
      router.push("/login");
    }
  };

  process.browser &&
    (!state || !state.token) &&
    setTimeout(() => {
      getCurrentUser();
    }, 1000);

  return !ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-primary p-5"
    />
  ) : (
    <>{children}</>
  );
};

export default UserRoute;
