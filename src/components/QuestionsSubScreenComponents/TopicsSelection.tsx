import { useEffect, useState } from "react";
import App_Button from "../App_Button"

interface topic
{
  Id : number,
  TopicName : String,
  SubjectId: number
}

interface Topics_screen_SubTopicSelection
{
    
    
    set_current_component_status: (option: number) => void
    topics: topic[];
    set_selected_topics: React.Dispatch<React.SetStateAction<topic[]>>;
    border_color :string
    header_bg_color :string
}


export function Topics_screen_TopicSelection({ set_current_component_status, border_color , header_bg_color, topics, set_selected_topics}:Topics_screen_SubTopicSelection)
{
    const [selectedTopics, setSelectedTopics] = useState<topic[]>([]);

    useEffect(() => {
        set_selected_topics(selectedTopics)
    }, [selectedTopics]);

    return(
                        <>
                             <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: `#${header_bg_color}`, borderColor:`#${border_color}`}}>
                                    <h1>Tópicos</h1>
                                    <h2 style={{fontSize: 28}}> Selecione os tópicos do simulado </h2>
                                </div>
                    
                    
                                <div id="HOME-Questions" className="question_exam_screen_body" style={{flexDirection:"column", height: "100%", borderColor:`#${border_color}`}}>
                                    <div className="question_exam_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%", flexDirection:"column", borderStyle: "none"}}>                                                                                             
                                        
                                        <div className="question_screen_selection_grid">
                                            {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                        
                                            {(topics).map(topic => (
                                            
                                                <label key={topic.TopicName} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                <input
                                                    type="checkbox"
                                                    value={topic.TopicName}
                                                    className="question_screen_selection_checkbox"
                                                    checked={selectedTopics.some(t => t.TopicName === topic.TopicName)}

                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedTopics(prev => [...prev, topic]);
                                                        } else {
                                                            setSelectedTopics(prev => prev.filter(t => t.TopicName !== topic.TopicName));
                                                        }
                                                    }}/>
                                                    <h3 style={{textAlign:"center", marginTop: 10}}>{topic.TopicName}</h3>
                                                </label>  
                                                                 
                                        ))}
                                        
                                        
                                        </div>           
                                        
                                    </div>
                                    <div style={{width:"80%", height:"7%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"FFFFFF"} bordercolor={"C0C8F0"} borderhovercolor={"6677DD"} bghovercolor={"EEF2FF"} message={"Selecionar"} onClick={() => {set_selected_topics(selectedTopics); set_current_component_status(2);}}/>
                                    </div>

                                    <div style={{width:"80%", height:"7%", display:"flex", alignContent:"center", justifyContent:"center", marginBottom: "5%"}}>
                                        <App_Button bgcolor={"FFFFFF"} bordercolor={"E0E0E0"} borderhovercolor={"999999"} bghovercolor={"F5F5F5"} message={"Voltar"} onClick={() => set_current_component_status(0)}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) 
}

