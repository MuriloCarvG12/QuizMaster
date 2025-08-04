import quiz_topics_subscreen from "../../interfaces/quiz_topics_array";
import App_Button from "../App_Button";



export default function QuizTopicsSubscreen({topics, Set_New_Quiz_Status, set_current_quizpage_status, add_new_topic, new_quiz_topics, Message, set_Message, remove_topic}: quiz_topics_subscreen)

{ 
return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>


                            <div id="USER QUIZES HEAD" 
                            style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                            }>
                                <h1>Tópicos do Quiz</h1>
                                <h1>{Message}</h1>
                            </div>


                            <div id="USER QUIZES" 
                                style=
                                {{
                                    display:"flex", flexDirection: "column", gap: "5%", width:"80%", height: "900px", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"
                                    
                                }}>

                                
                                        <div className="question_screen_selection_grid" style={{marginTop: "40px", height:"20%"}}>
                                            {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}

                                            {
                                            topics.map(topic => {
                                                const selected_topic = new_quiz_topics.includes(topic);
                                                return(
                                            
                                                    <label key={topic} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                    <input
                                                        style={{backgroundColor: selected_topic ? '#7AA9E4' : '#ffffff'}}
                                                        type="checkbox"
                                                        value={topic}
                                                        className="question_screen_selection_checkbox"
                                                      
                                                        onChange={() => selected_topic ? 
                                                                        //replace me with a filter logic!
                                                                        (remove_topic(topic),
                                                                        console.log(new_quiz_topics))
                                                                        : (add_new_topic(topic), console.log(new_quiz_topics))}/>
                                                        <h3 style={{textAlign:"center"}}>{topic}</h3>
                                                    </label>  
                                                )})
                                            }
                                        
                                        
                                        </div> 

                                <div style={{ width:"100%", height:"8%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10%", marginBottom: "10%"}}>
                                    <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar Tópicos"} onClick={() => new_quiz_topics.filter(t => t.trim() !== '').length > 0 ? Set_New_Quiz_Status(1) : set_Message('Por Favor selecione pelo menos 1 tópico! ')}/>
                                </div>

                                <div style={{ width:"100%", height:"8%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_quizpage_status(0)}/>
                                </div>

                            </div>


        </div>
)}