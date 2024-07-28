import { authService } from "@/appWrite/auth";


export default function LogOut() {


  const logout = async () => {
    try {
      await authService.logOut();
      console.log("logout");
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>

      <h1>LogOut</h1>
      <button onClick={logout}>LogOut</button>
    </div>
  );
}
