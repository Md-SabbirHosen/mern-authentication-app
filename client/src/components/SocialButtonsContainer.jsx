import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";

const SocialButtonsContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      <Button variant="outline">
        <FaGoogle className=" h-4 w-4">Google</FaGoogle>
      </Button>
      <Button variant="outline">
        <FaFacebook className=" h-4 w-4">Facebook</FaFacebook>
      </Button>
      <Button variant="outline">
        <FaGithub className=" h-4 w-4">Github</FaGithub>
      </Button>
    </div>
  );
};

export default SocialButtonsContainer;
