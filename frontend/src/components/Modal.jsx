import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('..')
  }
  return (
    <>
      <div
        className="h-screen w-full fixed top-0 left-0 z-10 bg-black/50"
        onClick={clickHandler}
      />
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
        {children}
      </div>
    </>
  );
};

export default Modal;
