import { useState } from "react";
import App_Button from "./App_Button";

interface exam_custom_length_interface
{
    Select_Length (number) : void;
    set_current_page_status: (value: React.SetStateAction<number>) => void;
}

export default function ExamCustomLength({Select_Length, set_current_page_status}: exam_custom_length_interface)
{
    const [examLength, setexamLength] = useState(0);
    const [showAlert, setShowAlert] = useState(false);

return (
    <>
    
    <>
      {showAlert && (
        <div style={{ backgroundColor: "#EEF2FF", border: "2px solid #6677DD", borderRadius: "10px",
          padding: "12px 20px", color: "#1a1a3e", fontWeight: "500", textAlign: "center", width: "60%",
          alignSelf: "center" }}>
           Preencha o número de questões!
        </div>
      )}
    </>

  <div style={{
    width: "100%",
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"

  }}>
    <h1 style={{ color: "#333333", margin: 0 }}>Numero Questões</h1>
    
    <input
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
        textAlign: "center"
      }}
      value={examLength}
      onChange={(e) => setexamLength(e.target.value)}
    />

    <div style={{ width: "60%", height: "10%" }}>
      <App_Button
        bgcolor={"FFFFFF"}
        bordercolor={"C0C8F0"}
        borderhovercolor={"6677DD"}
        bghovercolor={"EEF2FF"}
        onClick={() => {
            if(examLength > 0)
                {
                    Select_Length(examLength);
                    set_current_page_status(1);
                }
            else
                {
                    setShowAlert(true);  
                    setTimeout(() => setShowAlert(false), 3000);  
                }
          
        }}
        message={"Confirmar"}
      />

      <App_Button
        bgcolor={"FFFFFF"}
        bordercolor={"E0E0E0"}
        borderhovercolor={"999999"}
        bghovercolor={"F5F5F5"}
        onClick={() => {
            set_current_page_status(0)   
        }}
        message={"Voltar"}
      />
    </div>
  </div>
  </>
);

}