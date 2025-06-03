import { useNavigate } from "react-router-dom";
import App_Button from "./App_Button";

export function CommunityButton() {
                    const navigate = useNavigate();

                    return (
                        <App_Button
                            bgcolor={"FFDACC"}
                            bordercolor={"e3c0b3"}
                            borderhovercolor={"d1b1a5"}
                            bghovercolor={"e3c2b6"}
                            message={"Perguntas da Comunidade"}
                            onClick={() => navigate('/CommunityScreen')}
                        />
                    );
}  
            
                