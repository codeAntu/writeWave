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

export default function CreateAccount() {
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
          <Input type="email" placeholder="email" />
          <div></div>
          <div className="opacity-75 pl-1.5">User name</div>
          <Input type="text" placeholder="User Name" />
          <div></div>
          <div className="opacity-75 pl-1.5">Password</div>
          <Input type="Password" placeholder="Password" />
          <div></div>
        </CardContent>
        <CardFooter className="gap-4 flex-col">
          <Button>Create Account</Button>
          <Button className="bg-transparent border-2 border-white/20 p-3.5 text-white/70  ">
            Log In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
