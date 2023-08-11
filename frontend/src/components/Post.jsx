const Post = (props) => {
  const { author, body } = props;
  return (
    <li className="bg-purple-200 text-center rounded-sm p-5 shadow-lg animate-startIn">
      <p>{author}</p>
      <p>{body}</p>
    </li>
  );
};

export default Post;
