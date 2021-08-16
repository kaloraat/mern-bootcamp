import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import "../App.css";
import styled from "styled-components";
import { List } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchUserData = () => {
    axios
      .get(`http://localhost:8000/api/users`)
      .then(({ data }) => setUsers(data.users))
      .catch((err) => console.log(err));

    // fetch(`http://localhost:8000/api/users`, {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setUsers(data.users))
    //   .catch((err) => console.log(err));
  };

  const fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(({ data }) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    // fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setPosts(data))
    //   .catch((err) => console.log(err));
  };

  const testFunction = () => {
    alert("This is just a test...");
  };

  if (loading) {
    return (
      <LoadingOutlined
        className="display-1 text-danger d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      />
    );
  }

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(users, null, 4)}</pre> */}

      {users &&
        users.map((user) => (
          <div className="alert alert-primary" key={user.age}>
            {user.name} age is {user.age} years old
          </div>
        ))}

      <Button handleClick={fetchUserData} title="Fetch user data" />
      <Button handleClick={testFunction} title="Testing ..." />

      <List
        bordered
        dataSource={posts}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />

      {/* {posts &&
        posts.map((post) => (
          <PostList
            // className="posts"
            // style={{
            //   backgroundColor: "indigo",
            //   color: "#fff",
            //   border: "1px solid #999",
            //   padding: "20px",
            // }}
            key={post.id}
          >
            {post.title}
          </PostList>
        ))} */}
    </div>
  );
};

export default App;

const PostList = styled.div`
  background-color: indigo;
  color: #fff;
  border: 1px solid #999;
  padding: 20px;
`;

// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("STATE => ", email, password);
//   };

//   return (
//     <div className="container">
//       <h1 className="display-4 text-center">Learning react</h1>
//       <br />

//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Email address</label>
//               <input
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 type="email"
//                 className="form-control"
//               />
//               <div className="form-text">
//                 We'll never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 type="password"
//                 className="form-control"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
