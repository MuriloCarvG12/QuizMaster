import "../index.css"
import App_Button from "../components/App_Button"
import logo from '../images/QuizMasterLogo.png';
import { useNavigate } from "react-router-dom";
import loginInterface from "../interfaces/login";
import { useState } from "react";
import UserObject from "../interfaces/userobject";

export default function LoginScreen() {
    const navigate = useNavigate(); // ✅ top level
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [feedback, setFeedback] = useState<{message: string, success: boolean} | null>(null);

    async function HandleLogin() { // ✅ top level, no params needed
        if (Email === "" || Password === "") {
            setFeedback({ message: "Email ou Senha vazios!", success: false });
            return;
        }

        const url = "http://localhost:3000/User/GetUserByEmail";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Email }),
            });

            const object = await response.json() as UserObject; // ✅ only once

            if (!response.ok) {
                setFeedback({ message: "Email ou Senha incorretos!", success: false });
                return;
            }

            if (object.Password !== Password) {
                setFeedback({ message: "Email ou Senha incorretos!", success: false });
                return;
            }

            setFeedback({ message: "Login efetuado com sucesso!", success: true });
            navigate("/Home")

        } catch (error) {
            setFeedback({ message: "Erro de conexão com o servidor.", success: false });
        }
    }

    return (
        <>
            <div id="container">
                <div className="Header" style={{marginBottom: "5%"}}>
                    <h1>Quiz Master !</h1>
                </div>

                <div style={{width: "100%", height: "100%", display: 'flex', flexDirection: 'row', gap: "3%", justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: "50%", marginLeft: "5%", gap: "3%"}}>
                        <div className="login_image">
                            <img src={logo} style={{width: "100%", height: "100%"}} />
                        </div>
                      
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
                        <div className="login_card_head">
                            <h1 style={{textAlign: 'center'}}>Realizar Login!</h1>
                        </div>

                        <div className="login_card_body">
                            <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10%", marginBottom: "5%"}}>
                                <input 
                                    className="Text_Field" 
                                    placeholder="Insira o seu email"
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                            <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "5%"}}>
                                <input 
                                    className="Text_Field" 
                                    placeholder="Insira a sua senha"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>

                            <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "8%", marginTop: "5%", marginBottom: "10%"}}>
                                {feedback && (
                                    <div style={{
                                        width: "80%",
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

                                <div style={{width: "80%"}}>
                                    <App_Button
                                        bgcolor="4A90D9"
                                        bghovercolor="2F78C5"
                                        bordercolor="2563A8"
                                        borderhovercolor="1A4F8F"
                                        message="Entrar"
                                        onClick={HandleLogin}
                                    />
                                </div>
                                <div style={{width: "50%"}}>
                                    <App_Button
                                        bgcolor="E8EEF5"
                                        bghovercolor="D0DCF0"
                                        bordercolor="A0B4CC"
                                        borderhovercolor="7A96B8"
                                        message="Registrar"
                                        onClick={() => navigate("/Register")} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}