import { useContext } from "react";
import { UserContext } from "../context";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-1 text-center">Home page</h1>
          {JSON.stringify(state)}
          <img src="/images/default.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
