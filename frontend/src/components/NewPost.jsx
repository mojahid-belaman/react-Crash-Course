import React, { useState } from "react";

const NewPost = ({ onCancel, onAddPost }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };
  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    
    if (enteredAuthor.length > 0 && enteredBody.length > 0) {
      const data = {author: enteredAuthor, body: enteredBody}
      onAddPost(prev => [data, ...prev])
      onCancel();
    }

  }
  return (
    <form className="bg-purple-200 p-5 w-96 mx-auto rounded-sm" onSubmit={submitHandler}>
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
          onChange={bodyChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="name" className="block mb-2 font-bold">
          Your Name
        </label>
        <input
          className="w-full border border-purple-700 outline-purple-700 px-2 py-1"
          type="text"
          id="name"
          placeholder="Enter The Full Name"
          required
          onChange={authorChangeHandler}
        />
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="py-2 px-4 text-white rounded-md bg-purple-900 hover:bg-purple-950">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewPost;
