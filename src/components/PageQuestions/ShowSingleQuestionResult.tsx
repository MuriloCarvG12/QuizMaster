import { useState } from "react";
import App_Button from "../App_Button";


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




interface ShowExamResultsProps {
  question: question;
  questions_answer: string;
  exam_length: number;
  setPageStatus: React.Dispatch<React.SetStateAction<number>>;

}



export default function ShowQuestionCorrection({ question, questions_answer, setPageStatus }: ShowExamResultsProps) { 
  return (
    <div style={{width:"100%", height:"auto", display: "flex", flexDirection: "column", gap: "20px", color: "black", padding: "20px", boxSizing: "border-box", textAlign: "center"}}>
         
        <div style={{width:"100%"}}>
            {question.QuestionPrompt}
        </div>
        
        <div style={{width:"100%"}}>
            {question.QuestionText}
        </div>

        <div style={{width:"80%", backgroundColor: "#FFF3F3", border: "1px solid #FFAAAA", borderRadius: "8px", padding: "10px", margin: "0 auto"}}>
            <strong>Sua resposta:</strong> {questions_answer != null && questions_answer}
        </div>

        <div style={{width:"80%", backgroundColor: "#F3FFF3", border: "1px solid #AAFFAA", borderRadius: "8px", padding: "10px", margin: "0 auto"}}>
            <strong>Resposta correta:</strong> {question != null && question.CorrectAlternative}
        </div>

        <div style={{width:"30%",height: "40%", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto", position: "relative", zIndex: 10}}>
            <App_Button bgcolor={"FFFFFF"} bordercolor={"E0E0E0"} borderhovercolor={"999999"} bghovercolor={"F5F5F5"} message={"Voltar para a pergunta"} onClick={() => setPageStatus(2)}/>
            <App_Button bgcolor={"FFFFFF"} bordercolor={"E0E0E0"} borderhovercolor={"999999"} bghovercolor={"F5F5F5"} message={"Sair da Pergunta"} onClick={() => setPageStatus(1)}/>
        </div>

    </div>
  );
}