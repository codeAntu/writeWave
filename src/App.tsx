import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { log } from "console";
import conf from "./conf/conf";
import { useStore } from "./store/store";
import { authService } from "./appWrite/auth";
import { Divide } from "lucide-react";

function App() {
  const status = useStore((state) => state.status);
  const userData = useStore((state) => state.userData);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((user) => {
  //       if (user) {
  //         login(true, user);
  //       } else {
  //         logout();
  //       }
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  console.log(status);
  console.log(userData);

  if (isLoading) {
    return (
      <div className="h-[100dvh] bg-black text-white flex justify-center items-center">
        isLoading
      </div>
    );
  }

  return (
    <div className="h-[100dvh] bg-black text-white flex justify-center items-center">
      <h1>User </h1>
      <Button variant={"outline"}>Hello</Button>
    </div>
  );
}

export default App;
