
import { useState } from "react";
import Button from "@/components/button/Button";
import Greet from "@/components/greet/Greet" ; 
import List from "@/components/list/List";


export default function Home() {
  const [arr, setArr ] = useState(["first iteam sefult" , "aaa22" , "yujj333"]);
   const addhandler = () =>{
      // arr.push("New Items");
      setArr([...arr, "New Items" ]);
   };

  return (
        <>
           
           <Greet/>
           <List arr={arr}/>
           {/* <List arr={arr} /> */}
           <Button click={addhandler}> Add </Button>
           <Button> done  </Button>
           <Button> gogog </Button>
           
      </> )
}
