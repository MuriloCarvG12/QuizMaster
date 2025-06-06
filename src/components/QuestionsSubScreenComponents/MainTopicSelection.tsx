import { useState } from "react"
import App_Button from "../App_Button"

interface topics_screen_interface
{
    set_picked_question_topics: (array: Array) => void
    set_current_page_status: (option: number) => void
    set_current_component_status: (option: number) => void
    set_current_page_status_value :number
   
    border_color :string
    header_bg_color :string
}

const topics = ["Matemática", "História", "Biologia","Matemática", "História", "Biologia","Matemática", "História", "Biologia", "História", "Biologia13","Matemática", "História", "Biologia","Matemática", "História", "Biologia1","Matemática", "História", "Biologia","Matemática", "História", "Biologia","Matemática", "História", "Biologia", "História", "Biologia13","Matemática", "História", "Biologia","Matemática", "História", "Biologia1"];



// COMPONENTES RELACIONADOS A SUBTELA TOPICOS SALVOS

export  function Topics_screen_MainTopicSelection({set_picked_question_topics, set_current_page_status , set_current_component_status, border_color, header_bg_color}:topics_screen_interface)
{
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    return(
                        <>
                             <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: `#${header_bg_color}`, borderColor:`#${border_color}`}}>
                                    <h1>Tópicos</h1>
                                    <h2 style={{fontSize: 28}}> Selecione o topico</h2>
                                </div>
                    
                              
                                <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column", height: "100%",  borderColor:`#${border_color}`}}>
                                    <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%", flexDirection:"column", borderStyle: "none"}}>
                                    

                                        <div className="question_screen_selection_grid">
                                            {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                            {topics.map(topic => (
                                            
                                                <label key={topic} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                <input
                                                    type="checkbox"
                                                    value={topic}
                                                    className="question_screen_selection_checkbox"
                                                    checked={selectedTopics.includes(topic)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                        setSelectedTopics(prev => [...prev, topic]);
                                                        } else {
                                                        setSelectedTopics(prev => prev.filter(t => t !== topic));
                                                        }
                                                    }}/>
                                                    <h3 style={{textAlign:"center", marginTop: 10}}>{topic}</h3>
                                                </label>  
                                                                 
                                        ))}
                                        
                                        
                                        </div>                                                                                          
                                    </div>
                                       <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => {set_picked_question_topics(selectedTopics); set_current_component_status(1); console.log("PICKED TOPICS ->", selectedTopics);}}/>
                                        </div>

                                        <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                            <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_page_status(0)}/>
                                        </div>
                                    
                                </div>
                            </div>
                        </>
                    )
}
