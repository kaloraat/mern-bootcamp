import { useContext } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <UserRoute>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-1 text-center">Dashboard page</h1>
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default Home;
