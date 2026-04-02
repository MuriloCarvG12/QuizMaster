import { useState } from "react"
import questionInterface from "../../interfaces/question_exam"


interface questionCardInterface
{
    question: questionInterface
}

export default function QuestionCard({question}: questionCardInterface)
{
    const [questionCode, setQuestionCode] = useState("Digite o Código da Questão")
    return(
    <>
        <div style={{
            padding: "20px",
            width: "280px",
            height: "280px",
            maxWidth: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "orange"
            
        }}>
            <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center"}}>
                <div style={{display:"flex", flexDirection: "column", height: "160px", marginBottom: "60px"}}>
                    <h1 style={{ color: "#333333", margin: 0 , marginBottom: "20px"}}>Questão: {question.QuestionId}</h1>
                    <h3 style={{
                        whiteSpace: "wrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%"
                    }}>
                        {question.QuestionPrompt}
                    </h3>
                </div>
                
                <h4>Código Questão: {question.Id}</h4>
            </div>      
        </div>
    </>
    )
}