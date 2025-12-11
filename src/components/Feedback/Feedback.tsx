import {FeedbackWrapper, FeedbackControl, ButtonwithcountContainer, Count, } from "./styles";
import Button from "components/Button/Button";
import { type FeedbackProps } from "./types";


function Feedback({like, dislike, onLike, onDislike, resetResults}: FeedbackProps) {
  

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonwithcountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonwithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
