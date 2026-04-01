import { useState } from "react";
import ExamAlternativeSelectButton from "./questionAlternativeSelectButton";
import { Link } from "react-router-dom";
import App_Button from "./App_Button";

interface questions {
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

interface questions_answers 
{
  ExamQuestionNumber : Number;
  AlternativeAssigned :String
}

interface ShowExamResultsProps {
  questions: questions[];
  questions_answers: questions_answers[];
  examLength: number;
  set_current_page_status: React.Dispatch<React.SetStateAction<number>>;
}

function CountCorrectAnswers(questions: questions[], questions_answers : questions_answers[])
{
    let correct_answers = 0;
    if(questions_answers.length == 0)
        {
            return 0;
        }
    questions_answers.forEach((Answer) => {
        const Question_checked = questions[Answer.ExamQuestionNumber];

        if(Question_checked.CorrectAlternative  == Answer.AlternativeAssigned)
            {
                correct_answers += 1;
            }
    })
    return correct_answers;
}



export default function ShowExamResults({ questions, questions_answers, examLength, set_current_page_status }: ShowExamResultsProps) { 
  let correct_answers = CountCorrectAnswers(questions, questions_answers)
  return (
    <>
    <div style={{width:"100%", height:"auto", display: "flex", flexDirection: "column", gap: "20%", color: "black"}}>
        <div style={{width:"100%", height:"auto", display: "flex", flexDirection: "column", gap: "20px", color: "black" , textAlign: "center",marginTop: "10%" }}>
            <h1> Resultados da Prova!</h1>
            {correct_answers} / {examLength} Respostas Corretas

        </div>
        <div style={{width:"100%", height:"auto", display: "flex", flexDirection: "column", gap: "10%", justifyContent: "center", alignItems: "center"}}>
            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Outro simulado"} onClick={() => set_current_page_status(0)}/>
            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Correção"} onClick={() => set_current_page_status(6)}/>
            <div className={"App_Button_Modified"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to="http://localhost:5173/Home" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' , fontSize: "medium", width: "100%", height: "100%"}}>
                    <h1>Home</h1>
                </Link>
            </div>
            
        </div>

    </div>
 
    </>
  );
}