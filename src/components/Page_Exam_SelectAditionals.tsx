import { useState } from "react"
import App_Button from "./App_Button"
import '.././index.css'

export default function Page_Exam_SelectAditionals({set_current_step, set_current_step_option, set_current_option_start, set_timer, set_show_score_during_exam,show_score_during_exam_value}:any)
{
  const [current_option, set_current_option] = useState(0)

  const [current_time, set_current_time] = useState(0) // TODO MAKE THIS A FUNCTION PARAMETER!
  
  switch(current_option)
  {
    case 0:
      return (
            <div style={{width: "100%" , height: "100%", display: "flex", flexDirection:"column"}}>
              <App_Button bgcolor={"#fce0d9"} bordercolor={"#f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_current_option(1)}} message={"Tempo"}/>
              <App_Button bgcolor={show_score_during_exam_value ? "D4EDDA" : "fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_show_score_during_exam(!show_score_during_exam_value); console.log("pontuacao exibida durante a prova " + show_score_during_exam_value)}} message={"Exibir pontuacao durante a prova"}/>
              <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_current_step(set_current_option_start)}} message={"Iniciar"}/>
              <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_current_step(set_current_step_option)}} message={"Voltar"}/>
            </div>
            ) 
    case 1:
      return(
        <div style={{width: "100%" , height: "100%", display: "flex", flexDirection:"column", alignContent:"center"}}>
          <div style={{width: "100%" , height: "50%", display: "flex", flexDirection:"column", justifyContent:"space-evenly"}}>
              <h1 style={{color:"#333333", textAlign:"center"}}>Digite quantos minutos voce deseja!</h1>
              <input className="Text_Field" style={{height:"10%", alignSelf:"center"}}value={current_time} onChange={e => { set_current_time(e.target.value); console.log("test -> " + e.target.value);}}/>
          </div>
          <div style={{width: "100%" , height: "33%", display: "flex", flexDirection:"column"}}>
              <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_current_option(0); set_timer(1)}} message={"Continuar"}/>
              <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => {set_current_option(0); set_timer(0)}} message={"Cancelar"}/>
          </div>
         
        </div>
      )
      
  }
}

