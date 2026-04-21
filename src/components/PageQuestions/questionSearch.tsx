import { useState } from "react"

export default function QuestionSearch({set_question_filter}: {set_question_filter: React.Dispatch<React.SetStateAction<string>>})
{
    const [questionCode, setQuestionCode] = useState("")
    return(
    <>
        <div style={{
            width: "100%",
            height: "40vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"

        }}>
        <h1 style={{ color: "#333333", margin: 0 }}>Procurar Questão</h1>
            
        <input placeholder={"Digite o Código da Questão"}
        style={{
            width: "60%",
            padding: "12px 16px",
            fontSize: "1rem",
            border: "2px solid #C0C8F0",
            borderRadius: "10px",
            outline: "none",
            color: "#1a1a3e",
            backgroundColor: "#FFFFFF",
            boxSizing: "border-box",
            textAlign: "center",
        }}
        onChange={(e) => {
            const value = e.target.value;
            setQuestionCode(value);
            set_question_filter(value);
            }}
        
        />

            
        </div>
    </>
    )
}