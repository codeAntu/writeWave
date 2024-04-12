import Button from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BellIcon, CheckIcon } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import Input from "@/components/Input";
import { authService } from "@/appWrite/auth";
import { useStore } from "@/store/store";
import { Navigate, useNavigate } from "react-router-dom";

export default function LogIn() {
  const controls = useAnimation();
  const [errors, setErrors] = useState("");
  const login = useStore((state) => state.login);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async (data: { email: string; password: string }) => {
    setErrors("");
    try {
      const session = await authService.logIn(data);
      if (session) {
        console.log("session" ,session);
        
        const user = await authService.getCurrentUser();
        if (user) {
          console.log("user" ,user);
          login(user);
          navigate("/");
        }
      }
    } catch (error: any) {
      setErrors(error.message);
    }
  };

  

  return (
    <div className="w-full h-[100dvh] flex justify-center items-center bg-black text-white">
      <Card
        className={cn(
          "max-w-[380px] w-[90%] rounded-2xl border-white/20 border-2 shadow-2xl shadow-white/15 "
        )}
      >
        <CardHeader className="opacity-85">
          <CardTitle>LogIn</CardTitle>
          <CardDescription>Create a Account </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="opacity-75 pl-1.5"> Email</div>
          <Input
            type="email"
            placeholder="email"
            className="rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div></div>

          <div className="opacity-75 pl-1.5">Password</div>
          <Input
            type="Password"
            placeholder="Password"
            className="rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between text-white/40 text-[13px] px-2 pt-1">
            <a href="">Forget Password</a>
            <a href="">Create an Account</a>
          </div>
        </CardContent>
        <div className="p-2">
          {errors && (
            <p className="text-red-500 text-center text-xs">{errors}</p>
          )}
        </div>
        <CardFooter className="gap-4 flex-col">
          <Button
            onClick={() => {
              // logIn({ email, password });
            }}
          >
            Log In
          </Button>
          <Button
            className="bg-transparent border-2 border-white/20 p-3.5 text-white/70  "
            onClick={() => {
              navigate("/createAccount");
            }}
          >
            Create An Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
