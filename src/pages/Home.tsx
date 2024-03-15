import { Link } from "react-router-dom";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="h-[100dvh] flex justify-center items-center gap-5">
      <Link to="/login">
        <Button>Go to Log In</Button>
      </Link>
      <Link to="/createAccount">
        <Button>Go to Create Account</Button>
      </Link>
    </div>
  );
}
