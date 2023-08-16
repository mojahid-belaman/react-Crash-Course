import React from "react";
import Modal from "../components/Modal";
import NewPost from "./NewPost";
import { useLoaderData } from "react-router-dom";

const EditPost = () => {
  const post = useLoaderData();
  return (
    <Modal>
      <NewPost post={post} />
    </Modal>
  );
};

export default EditPost;

export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const data = await response.json();
  return data.post;
}
