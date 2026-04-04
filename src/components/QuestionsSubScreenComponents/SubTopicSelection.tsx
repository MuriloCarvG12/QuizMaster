import { useEffect, useState } from "react";
import App_Button from "../App_Button"

interface topic
{
  Id : number,
  TopicName : string,
  SubjectId: number
}

interface subtopic
{
  Id: number,
  SubTopicName: string,
  Topic: topic
}


interface Topics_screen_SubTopicSelection
{
    set_picked_question_topics: (array: subtopic[]) => void
    set_current_page_status: React.Dispatch<React.SetStateAction<number>>
    set_current_component_status: (option: number) => void
    subtopics: subtopic[];
    set_selected_subtopics: React.Dispatch<React.SetStateAction<subtopic[]>>;
    border_color :string
    header_bg_color :string
}


export function Topics_screen_SubTopicSelection({ set_current_component_status, set_current_page_status, border_color , header_bg_color, subtopics, set_selected_subtopics}:Topics_screen_SubTopicSelection)
{
    const [selectedSubTopics, setSelectedSubTopics] = useState<subtopic[]>([]);

    useEffect(() => {
        set_selected_subtopics(selectedSubTopics)
    }, [selectedSubTopics]);

    return(
                        <>
                             <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: `#${header_bg_color}`, borderColor:`#${border_color}`}}>
                                    <h1>Sub-Topicos</h1>
                                    <h2 style={{fontSize: 28}}> Selecione os sub-tópicos do simulado </h2>
                                </div>
                    
                    
                                <div id="HOME-Questions" className="question_exam_screen_body" style={{flexDirection:"column", height: "100%", borderColor:`#${border_color}`}}>
                                    <div className="question_exam_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%", flexDirection:"column", borderStyle: "none"}}>                                                                                             
                                        
                                        <div className="question_screen_selection_grid">
                                            {/*** ITERATING OVER EVERY ITEM IN OUR SUBTOPICS ARRAY! */}
                                        
                                            {(subtopics as subtopic[]).map(subtopics => (
                                            
                                                <label key={subtopics.SubTopicName} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                <input
                                                    type="checkbox"
                                                    value={subtopics}
                                                    className="question_screen_selection_checkbox"
                                                    checked={selectedSubTopics.some(t => t === subtopics)}
                                                    
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            const updated = [...selectedSubTopics, subtopics];
                                                            setSelectedSubTopics(updated);
                                                            set_selected_subtopics(updated);
                                                        } else {
                                                            const updated = selectedSubTopics.filter(t => t !== subtopics);
                                                            setSelectedSubTopics(updated);
                                                            set_selected_subtopics(updated);
                                                        }
                                                    }}
                                                    />
                                                    <h3 style={{textAlign:"center", marginTop: 10}}>{subtopics.SubTopicName}</h3>
                                                </label>  
                                                                 
                                        ))}
                                        
                                        
                                        </div>           
                                        
                                    </div>
                                    <div style={{width:"80%", height:"7%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"FFFFFF"} bordercolor={"C0C8F0"} borderhovercolor={"6677DD"} bghovercolor={"EEF2FF"} message={"Selecionar"} onClick={() => { set_current_page_status(2)}}/>
                                    </div>

                                    <div style={{width:"80%", height:"7%", display:"flex", alignContent:"center", justifyContent:"center", marginBottom: "5%"}}>
                                        <App_Button bgcolor={"FFFFFF"} bordercolor={"E0E0E0"} borderhovercolor={"999999"} bghovercolor={"F5F5F5"} message={"Voltar"} onClick={() => set_current_component_status(1)}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) 
}

