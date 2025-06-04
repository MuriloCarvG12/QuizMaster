import { useState } from "react"
import App_Button from "./App_Button"

export default function Page_Exam_SelectAditionals({set_current_step, set_current_step_option, set_current_option_start}:any)
{
  const [current_option, set_current_option] = useState(0)
  const [show_score_during_exam, set_show_score_during_exam] = useState(0)
  const [current_time, set_current_time] = useState(0) // TODO MAKE THIS A FUNCTION PARAMETER!
  switch(current_option)
  {
    case 0:
      return (
            <div style={{width: "100%" , height: "100%", display: "flex", flexDirection:"column"}}>
              <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_current_option(1)}} message={"Tempo"}/>
              <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_show_score_during_exam(1); console.log("pontuacao exibida durante a prova")}} message={"Exibir pontuacao durante a prova"}/>
              <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_current_step(set_current_option_start)}} message={"Iniciar"}/>
              <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_current_step(set_current_step_option)}} message={"Voltar"}/>
            </div>
            ) 
    case 1:
      return(
        <div style={{width: "100%" , height: "100%", display: "flex", flexDirection:"column"}}>
          <h1 style={{color: "black"}}>Digite quantos minutos voce deseja!</h1>
          <input value={current_time} onChange={e => { set_current_time(e.target.value); console.log("test -> " + e.target.value);}}/>
          <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_current_option(0)}} message={"Voltar"}/>
        </div>
      )
      
  }
}

