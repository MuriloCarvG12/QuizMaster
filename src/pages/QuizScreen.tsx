import App_Button from "../components/App_Button"
import Header from "../components/Header_navigation"
import { useState } from "react";


export default function QuizScreen() {
    const [current_quizpage_status, set_current_quizpage_status] = useState(0)
    const [New_Quiz_Status, Set_New_Quiz_Status] = useState(0)
    const [new_quiz_topics, set_new_quiz_topics] = useState([])
    const [new_quiz_questions, set_new_quiz_questions] = useState([""])
    const topics = ["Matemática", "História", "Biologia"];

    const [Question_Text, Set_Question_Text] = useState("");
    const [Question_Alternative_A, Set_Question_Alternative_A] = useState("Insira a alternativa C");
    const [Question_Alternative_B, Set_Question_Alternative_B] = useState("Insira a alternativa B");
    const [Question_Alternative_C, Set_Question_Alternative_C] = useState("Insira a alternativa C");
    const [Question_Alternative_D, Set_Question_Alternative_D] = useState("Insira a alternativa D");
    
   
    function clear_quiz_question()
    {
            /***id="Question_Text" id="Question_Alternative_A" */
            Set_Question_Text("");
            Set_Question_Alternative_A("");
            Set_Question_Alternative_B("");
            Set_Question_Alternative_C("");
            Set_Question_Alternative_D("");
    }

    function add_new_question()
    {
        set_new_quiz_questions(prev => [...prev, Question_Text]);
        
        console.log("question added")
    }

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


                            <div id="USER QUIZES" 
                                style=
                                {{
                                    display:"flex", flexDirection: "column", gap: "5%", width:"80%", height: "900px", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"
                                    
                                }}>

                                
                                        <div className="question_screen_selection_grid" style={{marginTop: "40px", height:"20%"}}>
                                            {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                            {topics.map(topic => (
                                            
                                                <label key={topic} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                <input
                                                    type="checkbox"
                                                    value={topic}
                                                    className="question_screen_selection_checkbox"
                                                    //checked={'a'}
                                                    onChange={() => {}}/>
                                                    <h3 style={{textAlign:"center"}}>{topic}</h3>
                                                </label>  
                                                                 
                                        ))}
                                        
                                        
                                        </div> 

                                <div style={{ width:"100%", height:"8%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10%", marginBottom: "10%"}}>
                                    <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar Tópicos"} onClick={() => Set_New_Quiz_Status(1)}/>
                                </div>

                                <div style={{ width:"100%", height:"8%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_quizpage_status(0)}/>
                                </div>

                            </div>


                        </div>
                        )
                    
                    case 1:
                      return (
                      <div style={{display:"flex", flexDirection:"column", width:"100%", height:"70%", minHeight:"60%", justifyItems:"center", alignItems: "center"}}>


                            <div id="USER QUIZES HEAD" 
                            style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                            }>
                                <h1>Insira a sua pergunta</h1>
                            </div>


                            <div id="USER QUIZES" 
                                style=
                                {{display:"flex", flexDirection: "column" ,width:"80%", height: "100%", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2",}}>
                                    

                                    <div id="USER INPUT" style={{display:"flex", flexDirection: "column", alignItems: "center", justifyItems:"center" ,width:"100%", height: "100%",gap: "2%"}}>

                                            <div style={{height: "10%"}}>
                                                <div className="question_screen_selection_grid" style={{marginTop: "40px", height:"100%"}}>
                                                {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                                {new_quiz_questions.map(topic => (
                                            
                                                <label key={topic} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                <input
                                                    type="checkbox"
                                                    value={topic}
                                                    className="question_screen_selection_checkbox"
                                                    //checked={'a'}
                                                    onChange={() => {}}/>
                                                    <h3 style={{textAlign:"center"}}>{topic}</h3>
                                                </label>  
                                                                 
                                                ))}
                                                </div>
                                            </div>
                                            <div style={{width:"80%", height:"10%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Enunciado</h3>
                                                <input id="Question_Text" className="Text_Field" placeholder="Insira o enunciado da pergunta" value={Question_Text} onChange={(e) => Set_Question_Text(e.target.value)}></input> 

                                            </div>

                                            <div style={{width:"80%", height:"10%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Alternativa A</h3>
                                                <input id="Question_Alternative_A" className="Text_Field" placeholder="Insira a alternativa A" value={Question_Alternative_A} onChange={(e) => Set_Question_Alternative_A(e.target.value)}></input>

                                            </div>

                                            <div style={{width:"80%", height:"10%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Alternativa B</h3>
                                                <input id="Question_Alternative_B" className="Text_Field" placeholder="Insira a alternativa B" value={Question_Alternative_B} onChange={(e) => Set_Question_Alternative_B(e.target.value)}></input>

                                            </div>

                                            <div style={{width:"80%", height:"10%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Alternativa C</h3>
                                                <input id="Question_Alternative_C" className="Text_Field" placeholder="Insira a alternativa C" value={Question_Alternative_C} onChange={(e) => Set_Question_Alternative_C(e.target.value)}></input> 

                                            </div>

                                            <div style={{width:"80%", height:"10%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Alternativa D</h3>
                                                <input id="Question_Alternative_D" className="Text_Field" placeholder="Insira a alternativa D" value={Question_Alternative_D}  onChange={(e) => Set_Question_Alternative_D(e.target.value)} style={{marginBottom: "10px"}}></input> 
                                             
                                            </div>
                                            
                                            <div style={{ width:"80%", height:"5%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2%", marginBottom: "1%"}}>
                                                 <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Adicionar Pergunta"} onClick={() => add_new_question()}/>
                                            </div>

                                            <div style={{ width:"80%", height:"5%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2%", marginBottom: "1%"}}>
                                                <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Limpar Pergunta"} onClick={() =>  clear_quiz_question()}/>
                                            </div>
                                            
                                            
                                    </div>

                                    <div style={{ width:"100%", height:"5%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1%", marginBottom: "5%"}}>
                                        <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Avançar"} onClick={() => Set_New_Quiz_Status(1)}/>
                                    </div>

                                    <div style={{ width:"100%", height:"5%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => Set_New_Quiz_Status(0)}/>
                                    </div>   
                           
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