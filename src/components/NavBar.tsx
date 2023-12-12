import { useEffect, useState } from "react"
import { Button } from "./ui/button";
import { RiTimer2Line } from "react-icons/ri";
import { ModeToggle } from "./mode-toggle";

const [timer,setTimer] = useState(10);
  

useEffect(() => {
  setTimeout(() => {
  if(timer > 0){
    setTimer((p) => p  - 1);}
  else {
    return;
  }
},1500)

},[timer])

export function NavBar() {

    return (

    <div className="m-10 mx-16 flex gap-4 justify-between bg-secondary p-4 rounded-md ">
      <h1 className="text-xl font-mono bg-green-500 rounded 
      text-primary-foreground pt-2 px-3 text-center ml-2">QUIZ APP </h1>
      <div className="flex justify-around w-48 gap-2">
      <Button> <RiTimer2Line className="mr-2 h-4 w-4" />{timer}</Button>
      <ModeToggle/>
      </div>
    </div>
    );

};

