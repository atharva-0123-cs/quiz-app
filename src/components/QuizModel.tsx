import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { VscDebugStart } from "react-icons/vsc";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import data from "@/model/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogAction,
  // AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Badge } from "./ui/badge";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

interface ParentProps {
  // Define the function signature for the callback function
  isStarted: boolean;
  setIsStarted: (isStarted: boolean) => void;
}

const QuizModel: React.FC<ParentProps> = ({ isStarted, setIsStarted }) => {
  let [index, setIndex] = useState(0);
  const [que, setQue] = useState(data[index]);

  // const [isStarted,setIsStarted] = useState(false);

  const [showPrevoiusBagde, setShowPrevoiusBagde] = useState(false);
  const [showNextBagde, setShowNextBagde] = useState(false);

  const [totalScore, setTotalScore] = useState<number>(0);

  const startHandler = () => {
    setIsStarted(true);
    console.log(index);
  };

  const [lock, setLock] = useState(false);

  const checkAnswer = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ): void => {
    // logic to handle the selected answer here

    if (que.ans === index) {
      if (!lock) {
        e.currentTarget.classList.add("border-solid");
        e.currentTarget.classList.add("border-2");
        e.currentTarget.classList.add("border-primary");
        e.currentTarget.classList.add("rounded-lg");

        setTotalScore((prev) => prev + 1);
        setLock(true);
      }
    } else {
      if (!lock) {
        e.currentTarget.classList.add("border-solid");
        e.currentTarget.classList.add("border-2");
        e.currentTarget.classList.add("border-destructive");
        e.currentTarget.classList.add("rounded-lg");

        setLock(true);
      }
    }
    console.log(`Selected answer: ${String.fromCharCode(65 + index)}`);
  };
  const correct = "border-solid border-2 border-primary rounded-lg";
  // const wrong = "border-solid border-2 border-destructive rounded-lg"
  const blurBagde = "blur-sm";
  // console.log(totalScore);

  const liRefs = useRef<Array<HTMLLIElement | null>>([]);
  // console.log(liRefs)

  const nextHandler = () => {
    if (!lock) {
      setShowNextBagde(true);
      setTimeout(() => {
        setShowNextBagde(false);
      }, 1000);
    }

    if (lock) {
      setIndex(++index);
      setQue(data[index]);

      if (!que.isSolved) {
        setLock(false);
        console.log("n", index);

        liRefs.current.map((option) => {
          option?.classList.remove("border-solid");
          option?.classList.remove("border-2");
          option?.classList.remove("border-destructive");
          option?.classList.remove("border-primary");
          option?.classList.remove("rounded-lg");
          // option?.classList.remove("rounded-lg")
        });

        que.isSolved = true;
      }
    }
  };
  const previousHandler = () => {
    if (index <= 0) {
      setShowPrevoiusBagde(true);
      setTimeout(() => {
        setShowPrevoiusBagde(false);
      }, 1000);
    }

    if (lock && index > 0) {
      setIndex(--index);
      setQue(data[index]);
      // setLock(false);
      console.log("p", index);

      liRefs.current.map((option) => {
        if (index === que.ans) {
          option?.classList.add("border-solid");
          option?.classList.add("border-2");
          option?.classList.add("rounded-lg");
          option?.classList.add("border-primary");
        }

        option?.classList.remove("border-solid");
        option?.classList.remove("border-2");
        option?.classList.remove("border-destructive");
        option?.classList.remove("rounded-lg");
      });
    }
  };

  const restartHandler = (): void => {
    window.location.reload();
  };

  return (
    <div className="mx-10">
      {isStarted && (
        <Card>
          <CardHeader>
            <CardTitle className=" text-primary">
              Qusetion 0{index + 1}
            </CardTitle>
            <CardDescription className=" text-xl">
              {que.question}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col-reverse gap-8  justify-stretch sm:flex-row sm:gap-10 sm:justify-stretch">
              <div className="basis-1/2 ">
                <ul className="flex flex-col gap-2 cursor-pointer">
                  {que.options.map((option, index) => (
                    <li
                      ref={(el) => (liRefs.current[index] = el)}
                      className=" "
                      key={index} // Ensure each Card has a unique key
                      onClick={(e) => checkAnswer(e, index)}
                    >
                      <Card
                        className={`h-16 hover:bg-primary pt-1 pl-8 text-lg sm:h-10 
                        ${lock && que.ans === index ? correct : ""} `}
                      >
                        {String.fromCharCode(65 + index)}. {option}
                      </Card>
                    </li>
                  ))}
                </ul>

                {/* 
                <ul>                    
                <Card onClick={(e) => checkAnswer(e,0)} className="h-16 hover:bg-primary pt-1 pl-8 text-lg sm:h-10">
                  A. {que.options[0]}
                </Card>
                <Card onClick={(e) => checkAnswer(e,1)} className="h-16 hover:bg-primary pt-1 pl-8 text-lg sm:h-10">
                  B. {que.options[1]}
                </Card>
                <Card onClick={(e) => checkAnswer(e,2)} className="h-16 hover:bg-primary pt-1 pl-8 text-lg sm:h-10">
                  C. {que.options[2]}
                </Card>
                <Card onClick={(e) => checkAnswer(e,3)} className="h-16 hover:bg-primary pt-1 pl-8 text-lg sm:h-10">
                  D. {que.options[3]}
                </Card>
                </ul> */}
              </div>

              <div className="basis-1/2">
                <Badge
                  className={`flex justify-center px-10 items-center
                     text-md  mx-auto w-64 h-40 rounded-md
                     sm:w-80 ${!lock ? blurBagde : ""}`}
                >
                  <p>{que.explanation}</p>
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className=" flex justify-between gap-8">
              {!(index === data.length - 1) && (
                <div className=" flex justify-between gap-8">
                  <Button
                    variant={"outline"}
                    className=" h-10"
                    onClick={previousHandler}
                  >
                    {" "}
                    <FaArrowLeft className="mr-2 w-4" />
                    prevoius
                  </Button>

                  <Button
                    variant={"outline"}
                    className=" h-10"
                    onClick={nextHandler}
                  >
                    next <FaArrowRight className="ml-2 w-4" />
                  </Button>
                </div>
              )}

              <AlertDialog>
                <AlertDialogTrigger>
                  {index === data.length - 1 && (
                    <Button variant={"default"} className=" h-10">
                      Submit{" "}
                      <IoCheckmarkDoneCircleOutline className="ml-2 w-5 h-5" />
                    </Button>
                  )}
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className=" text-primary">
                    TOTAL SCORE : {totalScore}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                    Congratulations on completing the quiz! Your answers have been submitted
                    successfully. Whether you aced it or discovered new areas for improvement,
                    each question was a step in your learning journey.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                    <AlertDialogAction onClick={restartHandler}>
                      Restart <VscDebugStart className="ml-2 w-4" />
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardFooter>
        </Card>
      )}

      <div className="mt-4">
        {showPrevoiusBagde && (
          <Badge className="p-1 rounded " variant={"outline"}>
            There is no any previous question.
          </Badge>
        )}
        {showNextBagde && (
          <Badge className="p-1 rounded" variant={"outline"}>
            plz, select one option.
          </Badge>
        )}
      </div>

      {!isStarted && (
        <Card>
          <CardHeader>
            <CardTitle className=" text-primary">
              Interactive Programming Quiz Challenge
            </CardTitle>
            <CardDescription className=" text-xl">
              Test Your Coding Knowledge Across Languages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to the Interactive Programming Quiz Challenge! This quiz
              is designed to assess your understanding of fundamental concepts
              in programming languages such as JavaScript, ReactJS, C++, and
              Python. Each question presents a scenario or code snippet, and
              you'll need to choose the correct option. Dive into the world of
              coding and see how well you grasp key concepts. Good luck, and let
              the coding challenge begin!
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={startHandler}>
              Start <VscDebugStart className="ml-2 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default QuizModel;
