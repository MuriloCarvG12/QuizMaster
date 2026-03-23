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
    current_question_index: number,
    question_answers: question_answers[],
    alternativeValue : String
}


function updateAnswers(  question_answers: question_answers[],
    current_question_index: number,
    set_question_answers: React.Dispatch<React.SetStateAction<question_answers[]>>,
    alternativeValue: String ) 
    {
  if (!question_answers.some(answer => answer.ExamQuestionNumber === current_question_index)) {
    set_question_answers(prev => [
      ...prev,
      { ExamQuestionNumber: current_question_index, AlternativeAssigned: alternativeValue }
    ]);
  } else {
    set_question_answers(prev =>
      prev.map(answer =>
        answer.ExamQuestionNumber === current_question_index
          ? { ...answer, AlternativeAssigned: alternativeValue }
          : answer
      )
    );
  }
}

function checkIfAlternativeIsSelected(question_answers: question_answers[], alternativeValue: String, current_question_index: Number)
{
  return (question_answers.some(answer => {answer.ExamQuestionNumber === current_question_index && answer.AlternativeAssigned === alternativeValue} ))
}

function ExamAlternativeSelectButton({message,  set_question_answers, current_question_index, alternativeValue, question_answers}: ExamAlternativeSelectButtonInterface) { 
  return (
    <div className="ExamAlternativeSelectButton">
           <button className="questionbutton" 
           style={{backgroundColor: checkIfAlternativeIsSelected(question_answers, alternativeValue, current_question_index) ? "lightblue" : "blue"}}
           onClick={() => {updateAnswers(question_answers, current_question_index, set_question_answers, alternativeValue)}}></button>
            <h2>{message}</h2>
    </div>
 
  )
};

export default ExamAlternativeSelectButton;

