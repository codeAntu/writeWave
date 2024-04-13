import Post from "@/components/Post";
import Protected from "@/components/Protected";
import { useState } from "react";
import Service from "@/appWrite/config";
import { User } from "@/lib/types";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useStore } from "@/store/store";

export default function AddPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const user = useStore((state) => state.userData);


  const createPost = async (
    user: User,
    {
      title,
      content,
      status,
    }: {
      title: string;
      content: string;
      status: string;
    }
  ) => {
    try {
      const post = await Service.createPost({
        title: title,
        slag: Math.random().toString(36).substring(7),
        content: content,
        status: status,
        userId: user.$id,
      });
      console.log("post cre", post);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Protected authentication={true}>
      <div className="w-full h-[100dvh] flex flex-col justify-between p-5">
        <div className="flex flex-col gap-14">
          <div className="header">ADD POSt</div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="title">
                Title
              </label>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="title">
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="input"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="content" className="title">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="input h-64"
              />
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Button
            onClick={() =>
              createPost(user, {
                title,
                content,
                status,
              })
              
            }
          >
            <span>ADD POST</span>
          </Button>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          impedit adipisci laboriosam, nulla at vitae reiciendis. Aliquid modi
          veritatis doloremque.
        </div>
      </div>
    </Protected>
  );
}
