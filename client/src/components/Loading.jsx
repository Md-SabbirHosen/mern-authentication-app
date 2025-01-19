import ReactDOM from "react-dom";
import { ScaleLoader } from "react-spinners";

const Loading = ({ isLoading }) => {
  return (
    isLoading &&
    ReactDOM.createPortal(
      <div className="fixed inset-0 bg-[#292E49] flex items-center justify-center z-[100]">
        <ScaleLoader color="#8E54E9" size={100} />
      </div>,
      document.getElementById("modal-root")
    )
  );
};

export default Loading;
