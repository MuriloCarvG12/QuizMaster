import { useState } from "react"

export default function QuestionCard()
{
    const [questionCode, setQuestionCode] = useState("Digite o Código da Questão")
    return(
    <>
        <div style={{
            padding: "20px",
            width: "380px",
            height: "380px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "orange"
            
        }}>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center"}}>
                <h1 style={{ color: "#333333", margin: 0 }}>Local</h1>
                <h1 style={{ color: "#333333", margin: 0 }}>Titulo Pergunta</h1>
            </div>
            
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                fontSize: "large"
            }}>
                <p style={{ color: "#333333", margin: 0 }}>Assunto:</p>
                <p style={{ color: "#333333", margin: 0 }}>Tópico:</p>
                <p style={{ color: "#333333", margin: 0 }}>Subtópico:</p>
            </div>
            
        </div>
    </>
    )
}