import { useEffect, useState } from "react";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { RiTimer2Line } from "react-icons/ri";
import QuizModel from "./components/QuizModel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VscDebugStart } from "react-icons/vsc";

function App() {
  const [timer, setTimer] = useState(60);
  const [isStarted, setIsStarted] = useState(false);

  const [timeup, setTimeup] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setTimeup(true);
    }
    if (isStarted) {
      setTimeout(() => {
        if (timer > 0) {
          setTimer((p) => p - 1);
        } else {
          return;
        }
      }, 1500);
    }
  }, [timer, isStarted]);

  const restartHandler = (): void => {
    window.location.reload();
  };

  const buttonClass = `${timer <= 10 ? "text-red-500" : "text-green-400"}`;
  // console.log(buttonClass);

  return (
    <>
      <Card className="m-10 mx-16 flex gap-4 justify-between  p-4 rounded-md bg-fixed ">
        <h1
          className="text-xl font-mono bg-green-500 rounded-md 
      text-primary-foreground pt-2 px-3 text-center ml-2"
        >
          QUIZ
        </h1>
        <div className="flex justify-around w-48 gap-2 ">
          <Button variant={"outline"} className={buttonClass}>
            {" "}
            <RiTimer2Line className="mr-2 h-4 w-4" />
            {timer}
          </Button>
          <ModeToggle />
        </div>
      </Card>

      {!timeup && (
        <div>
          <QuizModel isStarted={isStarted} setIsStarted={setIsStarted} />
        </div>
      )}

      {timeup && (
        <Card className=" mx-14">
          <CardHeader>
            <CardTitle className=" text-destructive">Time's Up!</CardTitle>
            <CardDescription className=" text-xl">
              Unfortunately, you ran out of time. Please RESTART the game.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              In the fast-paced world of our quiz challenge, every second
              counts! The Time's Up modal is a friendly reminder that the clock
              is ticking, and your responses should be swift. When the timer
              reaches zero, this modal gracefully appears, signaling the end of
              the current question.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={restartHandler} variant={"secondary"}>
              Restart <VscDebugStart className="ml-2 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}

export default App;
