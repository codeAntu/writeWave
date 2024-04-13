import { Link } from "react-router-dom";
import Button from "@/components/Button";
import Protected from "@/components/Protected";
import { useStore } from "@/store/store";
import LogIn from "./LogIn";
import Nav from "@/components/Nav";
import Service from "@/appWrite/config";
import { getHeapCodeStatistics } from "v8";

export default function Home() {
  const user = useStore((state) => state.userData);

  console.log("user", user);
  // console.log("Service", Service);

  const getPosts = async () => {
    try {
      const posts = await Service.getPosts();
      console.log("posts get ", posts);
    } catch (error) {
      console.log("error", error);
    }
  };
  

  const createPost = async (user: any) => {
    try {
      const post = await Service.createPost({
        title: "Text 02",
        slag: Math.random().toString(36).substring(7),
        content: "content Hello World",
        status: "status 1",
        userId: user.$id,
      });
      console.log("post cre", post);
    } catch (error) {
      console.log("error", error);
    }
  };

  // console.log("create", createPost);
  // console.log("Get", getPosts);

  return (
    <Protected authentication={true}>
      <div className="screen">
        <Nav />
        <Button onClick={getPosts}>Get Posts</Button>
        <Button onClick={() => createPost(user)}>Create Post</Button>
        <div className="maxWith ">
          <div className="heading">WriteWave</div>
          <div className="sub-heading">
            Write your thoughts and share with the world
          </div>
        </div>
        <div className="maxWith ">
          <div className="heading">WriteWave</div>
          <div className="sub-heading">
            Write your thoughts and share with the world
          </div>
          B
        </div>{" "}
        <div className="maxWith ">
          <div className="heading">WriteWave</div>
          <div className="sub-heading">
            Write your thoughts and share with the world
          </div>
        </div>{" "}
        <div className="maxWith ">
          <div className="heading">WriteWave</div>
          <div className="sub-heading">
            Write your thoughts and share with the world
          </div>
        </div>{" "}
        <div className="maxWith ">
          <div className="heading">WriteWave</div>
          <div className="sub-heading">
            Write your thoughts and share with the world
          </div>
        </div>{" "}
        <div className="maxWith ">
          <div className="heading">WriteWave</div>
          <div className="sub-heading">
            Write your thoughts and share with the world
          </div>
        </div>{" "}
        <div className="maxWith ">
          <div className="heading">WriteWave</div>
          <div className="sub-heading">
            Write your thoughts and share with the world
          </div>
        </div>
      </div>
    </Protected>
  );
}

// <Protected authentication={true}></Protected>;
