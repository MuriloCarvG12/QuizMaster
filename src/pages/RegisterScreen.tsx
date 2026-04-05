import { useNavigate } from "react-router-dom";
import App_Button from "../components/App_Button";
import { useState } from "react";
import registerInterface from "../interfaces/register";

export default function RegisterScreen() {
    const navigate = useNavigate(); 

    const [feedback, setFeedback] = useState<{message: string, success: boolean} | null>(null);

    const [Name, setName]= useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordCheck, setPasswordCheck] = useState("");

    async function handleRegister({ Name, Email, Password, PasswordCheck } :registerInterface)
    {
        if (Name == "") {
            { setFeedback({ message: "Por favor, insira o seu nome.", success: false }); return; }
       
        }
        if (Email == "") {
            { setFeedback({ message: "Por favor, insira o seu email.", success: false }); return; }
        }
        if (Password == "") {
            { setFeedback({ message: "Por favor, insira a sua senha.", success: false }); return; }
        }
        if (PasswordCheck != Password) {
            { setFeedback({ message: "As senhas não coincidem.", success: false }); return; }
        }


        try {
        const response = await fetch("http://localhost:3000/User/CreateUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Name, Email, Password }),
        });

        if (response.ok) {
            setFeedback({ message: "Conta criada com sucesso! Redirecionando...", success: true });
            setTimeout(() => navigate("/"), 2000);
        } else {
            const data = await response.json();
            setFeedback({ message: data.message || "Erro ao criar conta.", success: false });
        }
    } catch (error) {
        setFeedback({ message: "Erro de conexão com o servidor.", success: false });
    }

    }
        
    return (
        <>
        <div style={{
            display: "flex", 
            flexDirection: "column", 
            width: "100%", 
            backgroundColor: "white", 
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
            border: "2px solid #E8E8FF",
            overflow: "hidden"  // keeps header corners rounded
        }}>
            {/* Blue header */}
            <div style={{
                width: "100%",
                backgroundColor: "#4A90D9",
                padding: "16px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "5%"
            }}>
                <h2 style={{color: "white", margin: 0, fontWeight: "bold", fontSize: "1.3rem"}}>
                    Criar Conta!
                </h2>
            </div>
            <div style={{width: "60%", height: "auto", display: "flex", flexDirection:"column", justifyContent: "center", alignSelf: "center"}}>
                {/* Fields */}
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%", alignSelf: "center"}}>
                    <input 
                        className="Text_Field" 
                        placeholder="Insira o seu nome" 
                        onChange={(e) => {
                            const value = e.target.value;
                            setName(value);
                            }}
                        />
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "5%", alignSelf: "center"}}>
                    <input 
                        className="Text_Field" 
                        placeholder="Insira o seu email" 
                        onChange={(e) => {
                            const value = e.target.value;
                            setEmail(value);
                            }}
                        />
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "5%", alignSelf: "center"}}>
                    <input 
                        className="Text_Field" 
                        placeholder="Insira a sua senha" 
                        onChange={(e) => {
                            const value = e.target.value;
                            setPassword(value);
                            }}
                        />     
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "5%", alignSelf: "center"}}>
                    <input 
                        className="Text_Field" 
                        placeholder="Confirme a sua senha" 
                        onChange={(e) => {
                            const value = e.target.value;
                            setPasswordCheck(value);
                            }}
                        />
                </div>

                {/* Buttons */}
                {feedback && (
                    <div style={{
                        width: "80%",
                        alignSelf: "center",
                        marginBottom: "4%",
                        padding: "10px 16px",
                        borderRadius: "8px",
                        textAlign: "center",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        backgroundColor: feedback.success ? "#D4EDDA" : "#F8D7DA",
                        color: feedback.success ? "#155724" : "#721C24",
                        border: `1px solid ${feedback.success ? "#C3E6CB" : "#F5C6CB"}`
                    }}>
                        {feedback.message}
                    </div>
                )}
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "8%", marginBottom: "8%"}}>
                    <div style={{width: "80%"}}>
                        <App_Button
                            bgcolor="4A90D9"
                            bghovercolor="2F78C5"
                            bordercolor="2563A8"
                            borderhovercolor="1A4F8F"
                            message="Registrar"
                            onClick={() => handleRegister({ Name, Email, Password, PasswordCheck })}
                        />
                    </div>
                    <div style={{width: "50%"}}>
                        <App_Button
                            bgcolor="E8EEF5"
                            bghovercolor="D0DCF0"
                            bordercolor="A0B4CC"
                            borderhovercolor="7A96B8"
                            message="Voltar"
                            onClick={() => navigate("/")}
                        />
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}