import App_Button from "../components/App_Button"
import Header from "../components/Header_navigation"
import { useState } from "react";


export default function QuizScreen() {
    const [current_quizpage_status, set_current_quizpage_status] = useState(0)
    const [New_Quiz_Status, Set_New_Quiz_Status] = useState(0)
    const [new_quiz_topics, set_new_quiz_topics] = useState([])
    const [new_quiz_questions, set_new_quiz_questions] = useState([])

    function control_quiz_page(current_quizpage_status:number)
    {
        switch(current_quizpage_status)
        {
            case 0:
                return(<>
                   

                        <div style={{width:"100%", height:"6%",display:"flex", justifyContent:"center", marginBottom:"10%"}}>
                            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Criar Novo Quiz"} onClick={() => set_current_quizpage_status(1)}/>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>


                            <div id="USER QUIZES HEAD" 
                            style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                            }>
                                <h1>Meus Quizes</h1>
                            </div>


                            <div id="USER QUIZES" 
                            style={{display:"flex", flexDirection: "row", gap: "5%", width:"80%", height: "50%", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"}
                            }>

                            </div>


                        </div>                   
                  
                    </>
                )

            case 1:
                switch(New_Quiz_Status)
                {   
                    case 0:
                      return (
                      <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>


                            <div id="USER QUIZES HEAD" 
                            style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                            }>
                                <h1>Tópicos do Quiz</h1>
                            </div>


                            <div id="USER QUIZES" style={{display:"flex", flexDirection: "row", gap: "5%", width:"80%", height: "50%", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"}}>
                                <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar Tópicos"} onClick={() => Set_New_Quiz_Status(1)}/>
                                <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_quizpage_status(0)}/>
                            </div>


                        </div>
                        )
                    
                    case 1:
                      return (
                      <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>


                            <div id="USER QUIZES HEAD" 
                            style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                            }>
                                <h1>Perguntas do Quiz</h1>
                            </div>


                            <div id="USER QUIZES" style={{display:"flex", flexDirection: "row", gap: "5%", width:"80%", height: "50%", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"}}>
                                <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Publicar Quiz"} onClick={() => Set_New_Quiz_Status(1)}/>
                                <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => Set_New_Quiz_Status(0)}/>
                            </div>


                        </div>
                        )

                    default:
                        return (
                        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>


                            <div id="USER QUIZES HEAD" 
                            style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                            }>
                                <h1>Escolha os tópicos do Quiz</h1>
                            </div>


                            <div id="USER QUIZES" style={{display:"flex", flexDirection: "row", gap: "5%", width:"80%", height: "50%", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"}}>
                                <h1>Isso nao deveria ter acontecido</h1>
                            </div>


                        </div>
                        )
                }
              
        }
    }
    return (
        <div id="container">
            <Header Username={""}/>
            {control_quiz_page(current_quizpage_status)}

        </div>

    )
}