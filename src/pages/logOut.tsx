import { authService } from "@/appWrite/auth";
import { useState } from "react";
import { useStore } from "@/store/store";

export default function LogOut() {
  const logout = useStore((state) => state.logout);
  
  const logOut = async () => {
    try {
      const res = await authService.logOut();
      if(res) {
        console.log("res", res);
        logout();
      }
      console.log("logout");
    } catch (error) {
      console.log("error", error);
    }
  };

  

  return (
    <div>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}
