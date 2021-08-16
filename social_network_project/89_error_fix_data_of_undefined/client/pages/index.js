import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";

const Home = () => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Home page</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
