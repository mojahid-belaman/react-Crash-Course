import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

const PostList = ({ modalIsVisible, toggeleModal }) => {
  const [posts, setPosts] = useState([]);
  return (
    <>
      {modalIsVisible && (
        <Modal onToggleModal={toggeleModal}>
          <NewPost onCancel={toggeleModal} onAddPost={setPosts} />
        </Modal>
      )}
      {/* <Post author="Mojahid Belaman" body="React Js Crash Course." /> */}
      {posts.length > 0 ? (
        <ul className="py-5 grid gap-3 grid-cols-3 justify-center">
          {posts.map((elem, idx) => (
            <Post key={idx} author={elem.author} body={elem.body} />
          ))}
        </ul>
      ) : (
        <p className="text-center text-white text-2xl mt-5">There are no posts yet!</p>
      )}
    </>
  );
};

export default PostList;
