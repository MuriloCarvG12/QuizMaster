import { memo, useEffect, useState } from "react";
import RenderQuestions from "./questionDisplay";

interface question {
    Id: number;
    QuestionId: string;
    QuestionText: string;
    QuestionPrompt: string;
    QuestionAltA: string;
    QuestionAltB: string;
    QuestionAltC: string;
    QuestionAltD: string;
    QuestionAltE: string;
    CorrectAlternative: string;
    SubjectId: number;
    TopicId: number;
    SubTopicId: number;
}

interface question_answers 
{
  ExamQuestionNumber : Number;
  AlternativeAssigned :String
}

interface ExamAlternativeSelectButtonInterface
{
    message: String,  
    set_question_answers: React.Dispatch<React.SetStateAction<question_answers[]>>, 
    current_question_index: number
}

function ExamAlternativeSelectButton({message,  set_question_answers, current_question_index}: ExamAlternativeSelectButtonInterface) { 
  return (
    <div className="ExamAlternativeSelectButton">
           <button style={{width:"100%", height:"100%", opacity: 0}} onClick={() => (set_question_answers(prev => [...prev, { ExamQuestionNumber: current_question_index, AlternativeAssigned: message }]))}></button>
            <h2>{message}</h2>
    </div>
 
  )
};

export default ExamAlternativeSelectButton;

