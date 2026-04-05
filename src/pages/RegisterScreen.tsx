import { useNavigate } from "react-router-dom";
import App_Button from "../components/App_Button";

export default function RegisterScreen() {
        const navigate = useNavigate(); 

        const handleRegister = () => {
            
        };
        
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
                    <input className="Text_Field" placeholder="Insira o seu nome" />
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "5%", alignSelf: "center"}}>
                    <input className="Text_Field" placeholder="Insira o seu email" />
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "5%", alignSelf: "center"}}>
                    <input className="Text_Field" placeholder="Insira a sua senha" />
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "5%", alignSelf: "center"}}>
                    <input className="Text_Field" placeholder="Confirme a sua senha" />
                </div>

                {/* Buttons */}
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "8%", marginBottom: "8%"}}>
                    <div style={{width: "80%"}}>
                        <App_Button
                            bgcolor="4A90D9"
                            bghovercolor="2F78C5"
                            bordercolor="2563A8"
                            borderhovercolor="1A4F8F"
                            message="Registrar"
                            onClick={handleRegister}
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