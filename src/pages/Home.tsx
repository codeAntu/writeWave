import { Link } from "react-router-dom";
import Button from "@/components/Button";
import Protected from "@/components/Protected";
import { useStore } from "@/store/store";
import LogIn from "./LogIn";
import Nav from "@/components/Nav";
import Service from "@/appWrite/config";
import { getHeapCodeStatistics } from "v8";
import { ls } from "@/lib/ls";
import { Post } from "@/lib/types";
import { ExternalLink, Heart, MessageSquare, Plus } from "lucide-react";
import { useEffect } from "react";
import LogOut from "./logOut";
import { authService } from "@/appWrite/auth";

export default function Home() {
  const user = useStore((state) => state.userData);
  const logOut = useStore((state) => state.logout);
  const posts = useStore((state) => state.posts);
  const setPosts = useStore((state) => state.setPosts);



  const getPosts = async () => {
    try {
      const posts = await Service.getPosts();
      setPosts(posts.documents as Post[]);
      console.log("posts get ", posts);
    } catch (error) {
      console.log("error", error);
    }
  };

  const file = async () => {
    try {
      const file = await Service.getFilePreview("");
      console.log("file", file);
    } catch (error) {
      console.log("error", error);
    }
  }

  // const currUser = async  () => {
  //   try {
  //     const user = await authService.getCurrentUser();
  //     console.log("user", user);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  
  // }

  useEffect(() => {
    getPosts();
  }, []);



  return (
    <Protected authentication={true}>
      <div className="screen">
        <div className="header">
          <div>WriteWave</div>
          <div className="headerImgContainer">
            <img src="./vite.svg" alt="" />
          </div>
          <LogOut />
        </div>
        <div className="maxWith">
          <AddPostButton />
          <div className="posts py-5">
            {posts.map((post) => {
              return <PostUi post={post} key={post.$id} />;
            })}
          </div>
          <div className="posts py-5">
            {posts.map((post) => {
              return <PostUi post={post} key={post.$id} />;
            })}
          </div>
          <div className="posts py-5">
            {posts.map((post) => {
              return <PostUi post={post} key={post.$id} />;
            })}
          </div>
          <div className="posts py-5">
            {posts.map((post) => {
              return <PostUi post={post} key={post.$id} />;
            })}
          </div>
        </div>
      </div>
    </Protected>
  );
}

function PostUi({ post }: { post: Post }) {
  return (
    <div className="postContainer">
      <div className="postAuthor">
        <img src="./vite.svg" alt="" className="postAuthorImg" />
        <div className="flex flex-col gap-0">
          <div className="postAuthorName">Code Antu</div>
          <div className="postDate">
            {/* 4 Jan 2024  */}
            {new Date(post.$createdAt)
              .toLocaleDateString()
              .split("/")
              .join("-")}{" "}
            . {new Date(post.$createdAt).toLocaleTimeString()}
          </div>
        </div>
      </div>
      <div className="post">
        <div className="postTitle">{post.title}</div>
        <div className="postContent">{post.content}</div>
      </div>
      <div className="lcsContainer">
        <div className="lcs">
          <Heart size={22} className="text-black/60" />
          10
        </div>
        <div className="lcs">
          <MessageSquare size={22} className="text-black/60" />
          20
        </div>
        <div className="lcs">
          <ExternalLink size={22} className="text-black/60" />
          30
        </div>
      </div>
    </div>
  );
}

function AddPostButton() {
  return (
    <div className="bg-accent fixed bottom-5 right-5 rounded-full ">
      <Link to="/addPost">
        <div className=" p-3 aspect-square">
          <Plus size={40} className="text-white" />
        </div>
      </Link>
    </div>
  );
}

// <Protected authentication={true}></Protected>;
