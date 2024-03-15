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

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export default function LogIn() {
  const controls = useAnimation();
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
    controls.start({ x: isClicked ? 0 : 100 });
  };

  return (
    <div className="w-full h-[100dvh] flex justify-center items-center bg-black text-white">
      <Card
        className={cn(
          "w-[380px] rounded-2xl border-white/20 border-2 shadow-2xl shadow-white/15 "
        )}
      >
        <CardHeader className="opacity-85">
          <CardTitle>LogIn</CardTitle>
          <CardDescription>Create a Account </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="opacity-75 pl-1.5"> Email</div>
          <Input type="email" placeholder="email" className="rounded-xl" />
          <div></div>

          <div className="opacity-75 pl-1.5">Password</div>
          <Input
            type="Password"
            placeholder="Password"
            className="rounded-xl"
          />
          <div className="flex justify-between text-white/40 text-[13px] px-2 pt-1">
            <a href="">Forget Password</a>
            <a href="">Create an Account</a>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Log In</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
