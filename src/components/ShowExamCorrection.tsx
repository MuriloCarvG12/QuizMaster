import { useState } from "react";
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
  exam_length: number;
  set_current_page_status: React.Dispatch<React.SetStateAction<number>>;

}



export default function ShowExamResults({ questions, questions_answers, exam_length , set_current_page_status}: ShowExamResultsProps) { 
    const [current_question, set_current_question] = useState(0);
  return (
    <>
    <div style={{width:"100%", height:"auto", display: "flex", flexDirection: "column", gap: "20%", color: "black"}}>
        <div style={{width:"100%", height:"auto", display: "flex", flexDirection: "column", gap: "20px", color: "black" , textAlign: "center",marginTop: "10%" }}>
            <div style={{width:"100%", height: "20%"}}>
                Pergunta {current_question + 1} / {exam_length} 
            </div>
            
            <div style={{width:"100%", height: "20%"}}>
                {questions[current_question].QuestionPrompt}
            </div>
            
            <div style={{width:"100%", height: "20%"}}>
                {questions[current_question].QuestionText}
            </div>

            <div style={{width:"100%", height: "20%", backgroundColor: "#FFF3F3", border: "1px solid #FFAAAA", borderRadius: "8px", padding: "10px"}}>
                <strong>Sua resposta:</strong> {questions_answers[current_question] != null && (questions_answers[current_question].AlternativeAssigned)}
            </div>

            <div style={{width:"100%", height: "20%", backgroundColor: "#F3FFF3", border: "1px solid #AAFFAA", borderRadius: "8px", padding: "10px"}}>
                <strong>Resposta correta:</strong> {questions[current_question] != null && (questions[current_question].CorrectAlternative)}
            </div>
            
        </div>
        <div style={{width:"100%", height:"auto", display: "flex", flexDirection: "column", gap: "10%", justifyContent: "center", alignItems: "center"}}>
        
            <App_Button bgcolor={"FFFFFF"} bordercolor={"C0C8F0"} borderhovercolor={"6677DD"} bghovercolor={"EEF2FF"} message={"Selecionar"} onClick={() => {(current_question < exam_length - 1) && set_current_question(current_question + 1)}}/>
                                                  
            <App_Button bgcolor={"FFFFFF"} bordercolor={"E0E0E0"} borderhovercolor={"999999"} bghovercolor={"F5F5F5"} message={"Voltar"} onClick={() => current_question == 0 ? set_current_page_status(5) : set_current_question(current_question - 1)}/>
        
        </div>
    </div>
 
    </>
)
}