import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const EditPost = () => {
  const [post, setPost] = useState({});

  const router = useRouter();
  //   console.log("rotuer", router);
  const _id = router.query._id;

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <pre>{JSON.stringify(post, null, 4)}</pre>
    </>
  );
};

export default EditPost;
