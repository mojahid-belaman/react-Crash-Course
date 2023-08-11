import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useEffect, useState } from "react";

const PostList = ({ modalIsVisible, toggeleModal }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fectPosts = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsLoading(false);
    };
    fectPosts();
  }, []);
  const addNewPost = async (post) => {
    await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" },
    });
    setPosts((prev) => [post, ...prev]);
  };
  return (
    <>
      {modalIsVisible && (
        <Modal onToggleModal={toggeleModal}>
          <NewPost onCancel={toggeleModal} onAddPost={addNewPost} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className="py-5 grid gap-3 grid-cols-3 justify-center">
          {posts.map((elem, idx) => (
            <Post key={idx} author={elem.author} body={elem.body} />
          ))}
        </ul>
      )}
      {!isLoading && posts?.length === 0 && (
        <p className="text-center text-white text-2xl mt-5">
          There are no posts yet!
        </p>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", color: "white", marginTop: '2rem' }}>
          <p>LOADING...</p>
        </div>
      )}
    </>
  );
};

export default PostList;
