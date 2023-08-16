import { Form, redirect, useNavigate, useNavigation } from "react-router-dom";
import Modal from "../components/Modal";

const NewPost = ({ post }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const clickHandler = () => {
    navigate("..");
  };

  const isSubmit = navigation.state === "submitting";

  return (
    <Modal>
      <Form
        method="post"
        action="/newPost"
        className="bg-purple-200 p-5 w-96 mx-auto rounded-sm"
      >
        <div>
          <label htmlFor="body" className="block mb-2 font-bold">
            Text
          </label>
          <textarea
            className="w-full mb-3 border border-purple-700 outline-purple-700 px-2 py-1"
            name="body"
            placeholder="Enter Description about The Author"
            required
            rows={3}
            disabled={post ? true : false}
            defaultValue={post && post.body}
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 font-bold">
            Your Name
          </label>
          <input
            className="w-full border border-purple-700 outline-purple-700 px-2 py-1"
            type="text"
            name="name"
            placeholder="Enter The Full Name"
            required
            disabled={post ? true : false}
            defaultValue={post && post.author}
          />
        </div>
        <div className="flex justify-end gap-4 pt-4">
          <button type="button" onClick={clickHandler}>
            Cancel
          </button>
          {!post && (
            <button
              className={`py-2 px-4 text-white rounded-md bg-purple-900 hover:bg-purple-950 ${
                isSubmit && "bg-gray-400 text-black hover:bg-gray-400"
              }`}
              disabled={isSubmit}
            >
              {isSubmit ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action({ request }) {
  const data = await request.formData();
  const post = { author: data.get("name"), body: data.get("body") };
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: { "Content-Type": "application/json" },
  });
  return redirect("..");
}
