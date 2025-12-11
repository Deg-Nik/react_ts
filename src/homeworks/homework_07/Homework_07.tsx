import { useState } from "react";
import Feedback from 'components/Feedback/Feedback';
import { Homework_07_wrapper } from "./styles"
 

function Homework_07() {

  const [like, setLikes] = useState<number>(0);
  const [dislike, setDislikes] = useState<number>(0);

  const onLike = () => {
    setLikes((countPlus: number): number => {
      return countPlus + 1;
    });
  };
  const onDislike = () => {
    setDislikes((countMinus: number): number => {
      return countMinus + 1;
    });
  };
  const resetResults = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <Homework_07_wrapper>
      <Feedback like={like} dislike={dislike} onLike={onLike} onDislike={onDislike} resetResults={resetResults}/>
    </Homework_07_wrapper>
  )
}

export default Homework_07;
