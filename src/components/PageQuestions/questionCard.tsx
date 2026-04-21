import { useState } from "react"
import questionInterface from "../../interfaces/question_exam"


interface questionCardInterface
{
    question: questionInterface;
    setQuestionPageStatus: React.Dispatch<React.SetStateAction<number>>;
    setSelectedQuestion: React.Dispatch<React.SetStateAction<questionInterface | undefined>>
}

export default function QuestionCard({question, setQuestionPageStatus, setSelectedQuestion}: questionCardInterface)
{
    const [questionCode, setQuestionCode] = useState("Digite o Código da Questão")
    return(
    <>
        <div className="question_card">

            <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center"}} onClick={() => {setQuestionPageStatus(2); setSelectedQuestion(question); }}>
                <div style={{display:"flex", flexDirection: "column", height: "160px", marginBottom: "60px"}}>
                    <h2 style={{ color: "#333333", margin: 0 , marginBottom: "20px"}}>Questão: {question.QuestionId}</h2>
                    <h3 style={{
                        whiteSpace: "wrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                        color: "#555555"
                    }}>
                        {question.QuestionPrompt}
                    </h3>
                </div>
                
                <h4 style ={{color: "#777777"}}>Código Questão: {question.Id}</h4>
            </div>

        </div>
    </>
    )
}