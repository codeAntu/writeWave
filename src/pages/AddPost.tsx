import Post from "@/components/Post";
import Protected from "@/components/Protected";

export default function AddPost() {
  return (
    <div className="w-full h-[100dvh] ">
      <Protected authentication={true}>
        <Post />
      </Protected>
    </div>
  );
}
