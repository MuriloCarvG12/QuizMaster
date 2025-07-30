import quiz_topics_subscreen from "../../interfaces/quiz_topics_array";
import App_Button from "../App_Button";



export default function QuizTopicsSubscreen({topics, Set_New_Quiz_Status, set_current_quizpage_status, add_new_topic,new_quiz_topics}: quiz_topics_subscreen)

{ 
return(
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
                                                    onChange={() => {add_new_topic(topic); console.log(new_quiz_topics)}}/>
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
)}