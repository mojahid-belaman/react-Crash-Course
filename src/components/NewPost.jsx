import React from "react";

const NewPost = (props) => {
  const bodyChangeHandler = (e) => {
    props.onBodyChange(e.target.value);
  };
  const authorChangeHandler = (e) => {
    props.onAuthorChange(e.target.value);
  };
  return (
    <form className="bg-purple-200 p-5 w-96 mx-auto rounded-sm">
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
    </form>
  );
};

export default NewPost;
