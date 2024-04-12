import { Link } from "react-router-dom";
import Button from "@/components/Button";
import Protected from "@/components/Protected";
import { useStore } from "@/store/store";
import LogIn from "./LogIn";

export default function Home() {
  const user = useStore((state) => state.userData);

  console.log("user", user);

  return (
    <div className="screen">
      <div className="maxWith ">
        <div className="heading">WriteWave</div>
        <div className="sub-heading">
          Write your thoughts and share with the world
        </div>
      </div>
    </div>
  );
}

// <Protected authentication={true}>

// </Protected>
