import { Link } from "react-router-dom";
import IconAddPost from "../icons/IconAddPost";
import IconPost from "../icons/IconPost";

const MainHeader = () => {
  return (
    <header className="max-w-4xl mx-auto py-5 text-white text-center flex justify-between items-center border-b-2 border-purple-100">
      <div>
        <h1 className="text-2xl inline-flex items-center gap-x-2">
          <IconPost />
          React Poster
        </h1>
      </div>
      <div>
        <Link
          to="/newPost"
          className="py-2 px-4 rounded-md shadow-lg inline-flex items-center gap-x-1 bg-purple-900 hover:bg-purple-950"
        >
          <IconAddPost />
          New Post
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
