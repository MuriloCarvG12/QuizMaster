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


function updateAnswers(
    current_question_index: number,
    set_question_answers: React.Dispatch<React.SetStateAction<question_answers[]>>,
    alternativeValue: string
) {
    set_question_answers(prev => [
        ...prev.filter(a => a.ExamQuestionNumber !== current_question_index),
        { ExamQuestionNumber: current_question_index, AlternativeAssigned: alternativeValue }
    ]);
}

function ExamAlternativeSelectButton({message, set_question_answers, current_question_index, alternativeValue, question_answers}: ExamAlternativeSelectButtonInterface) { 
 
  const isSelected = question_answers.some(
    answer => answer.ExamQuestionNumber === current_question_index 
           && answer.AlternativeAssigned === alternativeValue
  );

  return (
    <div className="ExamAlternativeSelectButton"  style={{backgroundColor: isSelected ? "#EEF2FF" : "#ffffff"}}>
      <button 
        className="questionbutton" 
        onClick={() => updateAnswers(current_question_index, set_question_answers, alternativeValue.toString())}
      />
      <h2 style={{fontSize: "1.05 rem",fontWeight: "400",color: "#1a1a3e",}}>{message}</h2>
    </div>
  )
}

export default ExamAlternativeSelectButton;

