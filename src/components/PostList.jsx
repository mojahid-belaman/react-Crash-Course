import React, { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  const toggleModal = () => {
    setModalIsVisible((prev) => !prev);
  };
  return (
    <>
      {modalIsVisible && (
        <Modal onToggleModal={toggleModal}>
          <NewPost
            onBodyChange={setEnteredBody}
            onAuthorChange={setEnteredAuthor}
          />
        </Modal>
      )}
      <ul className="max-w-4xl mx-auto py-5 grid gap-3 grid-cols-3 justify-center">
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Mojahid Belaman" body="React Js Crash Course." />
      </ul>
    </>
  );
};

export default PostList;
