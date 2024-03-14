import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { log } from "console";
import conf from "./conf/conf";

function App() {
  const [count, setCount] = useState(0);

  console.log(conf.appWriteURL);
  console.log(conf.appWriteProjectID);
  console.log(conf.appWriteDatabaseID);
  console.log(conf.appWriteCollectionID);
  console.log(conf.appWriteBucketID);
  

  return (
    <div className="b">
      <div className="bg-red-800 text-5xl ">hello</div>
      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}

export default App;
