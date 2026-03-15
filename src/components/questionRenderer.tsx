import { useState } from "react";
import App_Button from "./App_Button";

interface question {
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

export default function RenderExamQuestions({ question }: { question: question[] }) {
{
  const [current_question, set_current_question] = useState(0);

  return(
    <>
      <div style={{width: "90%", height: "80%", display: "flex", flexDirection: "row", gap: "10px" }}>

          <div className={"arrow-chevron-left"}>
            <button
              style={{ width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
              onClick={() => { if (current_question > 0) set_current_question(current_question - 1); }}
            />
          </div>
          <div style={{width: "80%", height: "90%", alignContent: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
            <div style={{textAlign: "center", color:"#222222"}}>
              <h2>  Pergunta {current_question  + 1}/{question.length} </h2>
            </div>

            <div style={{width: "100%", height: "90%", backgroundColor: "orange", alignSelf: "center"}}>

            </div>
          </div>
         
        
          <div className={"arrow-chevron-right"}>
            <button
              style={{ width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
              onClick={() => { if (current_question < question.length - 1) set_current_question(current_question + 1); }}
            />
          </div>
      </div>
    </>
  )
}}

  // <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
  //                                       <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => set_current_page_status(2)}/>
  //                                   </div>
  //                                   <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
  //                                       <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_component_status(1)}/>
  //                                   </div>