import IconAddPost from "../icons/IconAddPost";
import IconPost from "../icons/IconPost";

const MainHeader = ({ toggele }) => {
  const clickHandle = () => {
    toggele();
  };
  return (
    <header className="max-w-4xl mx-auto py-5 text-white text-center flex justify-between items-center border-b-2 border-purple-100">
      <div>
        <h1 className="text-2xl inline-flex items-center gap-x-2">
          <IconPost />
          React Poster
        </h1>
      </div>
      <div>
        <button
          className="py-2 px-4 rounded-md shadow-lg inline-flex items-center gap-x-1 bg-purple-900 hover:bg-purple-950"
          onClick={clickHandle}
        >
          <IconAddPost />
          New Post
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
