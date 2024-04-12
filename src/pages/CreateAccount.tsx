import { authService } from "@/appWrite/auth";
import Button from "@/components/Button";
import Input from "@/components/Input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState, useSyncExternalStore } from "react";
import { useStore } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { log } from "console";
import { ChevronsLeftRightIcon } from "lucide-react";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const login = useStore((state) => state.login);
  const navigate = useNavigate();
  const user = useStore((state) => state.userData);

  const createAccount = async (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    if (!email || !name || !password) {
      setError("Invalid Input");
      return;
    } else {
      try {
        const session = await authService.createAccount(data);
        if (session) {
          const user = await authService.getCurrentUser();
          if (user) {
            login(user);
            navigate("/");
          }
        }
      } catch (error: any) {
        setError(error.message);
      }
    }
  };


  console.log("user", user);
  

  return (
    <div className="w-full h-[100dvh] flex justify-center items-center bg-black text-white">
      <Card
        className={cn(
          "w-[380px] rounded-2xl border-white/20 border-2 shadow-2xl shadow-white/15 m-2"
        )}
      >
        <CardHeader className="opacity-85">
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>Create an Account </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="opacity-75 pl-1.5"> Email</div>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div></div>
          <div className="opacity-75 pl-1.5">User name</div>
          <Input
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div></div>
          <div className="opacity-75 pl-1.5">Password</div>
          <Input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div></div>
        </CardContent>
        <div className=" pb-4 ">
          <p className="text-xs text-red-600 text-center">{error}</p>
        </div>
        <CardFooter className="gap-4 flex-col">
          <Button
            onClick={() => {
              // createAccount({ email, password, name });
            }}
          >
            Create Account
          </Button>
          <Button
            className="bg-transparent border-2 border-white/20 p-3.5 text-white/70  "
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
