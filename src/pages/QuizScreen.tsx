import App_Button from "../components/App_Button"
import Header from "../components/Header_navigation"
import { useState } from "react";
import interface_quiz_question from "../interfaces/quiz_question";

export default function QuizScreen() {
    const [current_quizpage_status, set_current_quizpage_status] = useState(0)
    const [New_Quiz_Status, Set_New_Quiz_Status] = useState(0)
    const [new_quiz_topics, set_new_quiz_topics] = useState([])
    const [new_quiz_questions, set_new_quiz_questions] = useState<interface_quiz_question[]>([])
    const [quizQuestion, setQuizQuestion] = useState<interface_quiz_question>({question_text: '', question_alternative_a: '', question_alternative_b: '', question_alternative_c: '', question_alternative_d: ''});
    const topics = ["Matemática", "História", "Biologia"];

    const [Question_Text, Set_Question_Text] = useState("");
    const [Question_Alternative_A, Set_Question_Alternative_A] = useState("");
    const [Question_Alternative_B, Set_Question_Alternative_B] = useState("");
    const [Question_Alternative_C, Set_Question_Alternative_C] = useState("");
    const [Question_Alternative_D, Set_Question_Alternative_D] = useState("");
    
   
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
        const new_question = {
            question_text: Question_Text,
            question_alternative_a: Question_Alternative_A,
            question_alternative_b: Question_Alternative_B,
            question_alternative_c: Question_Alternative_C,
            question_alternative_d: Question_Alternative_D,
        };

        setQuizQuestion(new_question);

        set_new_quiz_questions(prev => [...prev, quizQuestion]);
        
        console.log(quizQuestion)
    }

    function load_question(question:interface_quiz_question)
    {
        Set_Question_Text(question.question_text)  
        Set_Question_Alternative_A(question.question_alternative_a)
        Set_Question_Alternative_B(question.question_alternative_b)
        Set_Question_Alternative_C(question.question_alternative_c)
        Set_Question_Alternative_D(question.question_alternative_d)
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
                                                    //checked={}
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

                                            <div style={{height: "10%", width:"100%"}}>
                                                <div className="question_screen_selection_grid" style={{display:"flex",marginTop: "40px", height:"100%", width: "100%", justifyContent:"center"}}>
                                                {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                                
                                                {(new_quiz_questions.length > 0) && new_quiz_questions.map(topic => (
                                                        topic.question_text != '' &&
                                                                <label key={topic.question_text} style={{ display: 'flex', flexDirection:"column", color:"black"}} >                                                          
                                                                <input
                                                                type="checkbox"
                                                                value={topic.question_text}
                                                                className="question_screen_selection_checkbox"
                                                                onClick={() => {load_question(topic)}}
                                                                onChange={() => {}}/>
                                                                <h3 style={{textAlign:"center"}}>{topic.question_text}</h3>
                                                                </label>                                                            
                                                ))}
                                                </div>
                                            </div>
                                            <div style={{width:"80%", height:"10%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Enunciado</h3>
                                                <input id="Question_Text" className="Text_Field" placeholder="Insira o enunciado da pergunta" value={Question_Text} onChange={(e) => {Set_Question_Text(e.target.value); console.log(`test current value of question_text = ${Question_Text}`)}}></input> 

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