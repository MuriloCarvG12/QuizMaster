import { useState } from "react";
import ExamAlternativeSelectButton from "./questionAlternativeSelectButton";

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

interface imageInfo
{
  QuestionId: number;
  ImageUrl: String
}


export default function RenderQuestions({ question, set_question_answers, current_question_index, question_answers, questionImages }: { question: question, set_question_answers: React.Dispatch<React.SetStateAction<question_answers[]>>, current_question_index: number, question_answers: question_answers[], questionImages:imageInfo[]}) { 

  const questionImage = questionImages.find(img => img.QuestionId === question.Id)?.ImageUrl ?? "";

  return (
    <>
    <div style={{width:"100%", height:"auto", textAlign: "center", display: "flex", flexDirection: "column", gap: "40%", color: "black" }}>
        <h3 style={{marginBottom: "15px"}}>{question.QuestionText}</h3>
         {questionImage !== "" && <img src={questionImage.toString()} alt="Question illustration" style={{ maxWidth: "100%", height: "auto", margin: "0 auto" }}/>}

        <p>{question.QuestionPrompt}</p>
        <div style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px"}}>
          <ExamAlternativeSelectButton message={question.QuestionAltA}  set_question_answers={set_question_answers} current_question_index={current_question_index} question_answers={question_answers} alternativeValue={'A'}/>
          <ExamAlternativeSelectButton message={question.QuestionAltB}  set_question_answers={set_question_answers} current_question_index={current_question_index} question_answers={question_answers} alternativeValue={'B'}/>
          <ExamAlternativeSelectButton message={question.QuestionAltC}  set_question_answers={set_question_answers} current_question_index={current_question_index} question_answers={question_answers} alternativeValue={'C'}/>
          <ExamAlternativeSelectButton message={question.QuestionAltD}  set_question_answers={set_question_answers} current_question_index={current_question_index} question_answers={question_answers} alternativeValue={'D'}/>
          {question.QuestionAltE !== "" && <ExamAlternativeSelectButton message={question.QuestionAltE}  set_question_answers={set_question_answers} current_question_index={current_question_index} question_answers={question_answers} alternativeValue={'E'}/>}

          
      
        </div>
    </div>
 
    </>
  );
}