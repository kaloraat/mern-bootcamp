const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-5">
            <div className="card-header">
              <div>image / name / date</div>
            </div>
            <div className="card-body">content...</div>
            <div className="card-footer">like / unlike 3 likes 2 comments</div>
          </div>
        ))}
    </>
  );
};

export default PostList;
