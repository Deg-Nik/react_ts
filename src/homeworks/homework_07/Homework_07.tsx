import { useState } from "react";
import Feedback from 'components/Feedback/Feedback';
 

function Homework_07() {

  const [like, setLikes] = useState(0);
  const [dislike, setDislikes] = useState(0);

  const onLike = () => {
    setLikes((countPlus) => {
      return countPlus + 1;
    });
  };
  const onDislike = () => {
    setDislikes((countMinus) => {
      return countMinus + 1;
    });
  };
  const resetResults = () => {
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
