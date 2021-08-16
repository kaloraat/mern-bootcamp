import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
// Ryan
const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-5">
            <div className="card-header">
              <Avatar size={40}>{post.postedBy.name[0]}</Avatar>{" "}
              <span className="pt-2 ml-3" style={{ marginLeft: "1rem" }}>
                {post.postedBy.name}
              </span>
              <span className="pt-2 ml-3" style={{ marginLeft: "1rem" }}>
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
            <div className="card-body">{renderHTML(post.content)}</div>
            <div className="card-footer">
              <img
                src={post.image && post.image.url}
                alt={post.postedBy.name}
              />
              <div className="pt-3">like / unlike 3 likes 2 comments</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;
