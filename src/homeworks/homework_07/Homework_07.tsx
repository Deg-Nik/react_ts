import { useState } from "react";
import Feedback from 'components/Feedback/Feedback';
 

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
    <div className='homework_07_wrapper'>
      <Feedback like={like} dislike={dislike} onLike={onLike} onDislike={onDislike} resetResults={resetResults}/>
    </div>
  )
}

export default Homework_07;
