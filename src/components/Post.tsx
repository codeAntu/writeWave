import { useState } from "react";
import Input from "./Input";
import { useStore } from "@/store/store";
import { useNavigate } from "react-router-dom";
import service from "@/appWrite/config";
import Button from "./Button";

export default function Post({
  name,
  post,
}: {
  name?: string;
  post?: {
    title: string;
    description: string;
    image: string;
    slag: string;
    $id: string;
  };
}) {
  const [title, setTitle] = useState((post && post.title) || "");
  const [content, setContent] = useState((post && post.description) || "");
  const [featuredImg, setFeaturedImg] = useState((post && post.image) || "");
  const [slag, setSlag] = useState((post && post.slag) || "");
  const userData = useStore((state) => state.userData);
  const navigate = useNavigate();

  const createPost = async (data: {
    title: string;
    content: string;
    image: string;
    slag: string;
    $id: string;
  }) => {
    // if (post) {
    //   if (featuredImg && featuredImg !== post.image) {
    //     const file = await service.uploadFile(featuredImg);
    //     if (file) {
    //       service.deleteFile(post.image);
    //     }
    //   }
    //   const res = await service.updatePost(post.$id, {
    //     title : data.title,
    //     content : data.content,
    //     featuredImg :,
    //     status,
    //   });
    //   if (res) {
    //     navigate(`/post/${res.$id}`);
    //   }
    // } else {
    //   const file = await service.uploadFile(featuredImg);
    //   if (file) {
    //     const res = await service.createPost({
    //       title,
    //       content,
    //       featuredImg: file,
    //       status,
    //       slag,
    //       userId: (userData as { $id: string }).$id,
    //     });
    //     if (res) {
    //       navigate(`/post/${res.$id}`);
    //     }
    //   }
    // }

    console.log(title);
    
  };

  const slugify = (text: string) => {
    return text
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");
  };

  return (
    <div className="h-[100dvh] bg-black text-white p-5 flex flex-col justify-between ">
      <div className="text-4xl font-bold p-5">Post</div>
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Input
          type="file"
          placeholder="Image"
          value={featuredImg}
          onChange={(e) => setFeaturedImg(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Slag"
          value={slag}
          onChange={(e) => setSlag(e.target.value)}
        />
      </div>

      <div className="">
        <Button
          onClick={() => {
            createPost({
              title,
              content ,
              image: featuredImg,
              slag: slugify(slag),
              $id: (post && post.$id) || "",
            });
          }}
        >
          {" "}
          Post
        </Button>
      </div>
    </div>
  );
}
