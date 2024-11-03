import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";

const SocialButtonsContainer = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Button variant="outline">
        <FaGithub className="mr-2 h-4 w-4">Github</FaGithub>
      </Button>
      <Button variant="outline">
        <FaGoogle className="mr-2 h-4 w-4">Google</FaGoogle>
      </Button>
    </div>
  );
};

export default SocialButtonsContainer;
