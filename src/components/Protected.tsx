import { authService } from "@/appWrite/auth";
import { useStore } from "@/store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected({
  children,
  authentication = true,
}: {
  children: React.ReactNode;
  authentication: boolean;
}) {
  const navigate = useNavigate();
  const status = useStore((state) => state.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // if (authentication && status !== authentication) {
    //   navigate("/login");
    // } else if (!authentication && status !== authentication) {
    //   navigate("/");
    // }
    setLoader(false);
  }, [authService, navigate, status, setLoader]);

  return loader ? (
    <div className="">Loading...</div>
  ) : (
    <div className="w-full h-full">{children}</div>
  );
}
