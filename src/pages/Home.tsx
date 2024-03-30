import { Link } from "react-router-dom";
import Button from "@/components/Button";
import Protected from "@/components/Protected";
import { useStore } from "@/store/store";

export default function Home() {
  const user = useStore((state) => state.userData);

  console.log("user", user);

  return (
    <Protected authentication={true}>
      <div className="h-[100dvh] flex justify-center items-center gap-5">
        <Link to="/login">
          <Button>Go to Log In</Button>
        </Link>
        <Link to="/createAccount">
          <Button>Go to Create Account</Button>
        </Link>
      </div>
    </Protected>
  );
}
