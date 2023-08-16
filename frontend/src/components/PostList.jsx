import Post from "./Post";
import { Link, useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();
  return (
    <>
      {posts.length > 0 && (
        <ul className="py-5 grid gap-3 grid-cols-3 justify-center">
          {posts.map((elem) => (
            <Link to={`/${elem.id}`} key={elem.id}>
              <Post author={elem.author} body={elem.body} />
            </Link>
          ))}
        </ul>
      )}
      {posts?.length === 0 && (
        <p className="text-center text-white text-2xl mt-5">
          There are no posts yet!
        </p>
      )}
    </>
  );
};

export default PostList;
