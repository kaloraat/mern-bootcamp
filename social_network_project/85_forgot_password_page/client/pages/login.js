import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);
  // console.log("STATE => ", state);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        // save in local storage
        window.localStorage.setItem("auth", JSON.stringify(data));
        // save in context
        setState({
          user: data.user,
          token: data.token,
        });
        router.push("/user/dashboard");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (state && state.token) return <></>;

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image">
        <div className="col text-center">
          <h1 className="text-light">Login</h1>
        </div>
      </div>

      {/* form */}
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            handleSubmit={handleSubmit}
            page="login"
          />
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          <Link href="/forgot-password">
            <a className="text-danger">Forgot password</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
