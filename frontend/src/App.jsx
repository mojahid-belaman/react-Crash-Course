import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const toggeleModal = () => {
    setModalIsVisible((prev) => !prev);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600">
      <MainHeader toggele={toggeleModal} />
      <main className="max-w-4xl mx-auto">
        <PostList modalIsVisible={modalIsVisible} toggeleModal={toggeleModal}  />
      </main>
    </div>
  );
}

export default App;
