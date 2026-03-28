import { useEffect, useState } from "react"
import App_Button from "../App_Button"


interface subject
{
    Id : number,
    SubjectName : string
}
interface topics_screen_interface
{
    set_picked_question_topics: (array: Array) => void
    set_current_page_status: (option: number) => void
    set_current_component_status: (option: number) => void
    set_current_page_status_value :number
   
    border_color :string
    header_bg_color :string
    subjects : subject[];
    set_selected_subjects: React.Dispatch<React.SetStateAction<string[]>>;
}



// COMPONENTES RELACIONADOS A SUBTELA TOPICOS SALVOS

export function Topics_screen_MainTopicSelection({set_picked_question_topics, set_current_page_status , set_current_component_status, border_color, header_bg_color, subjects, set_selected_subjects}:topics_screen_interface)
{

    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    
    useEffect(() => {
        set_selected_subjects(selectedTopics);
    }, [selectedTopics]);

    return(
                        <>
                             <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: `#${header_bg_color}`, borderColor:`#${border_color}`}}>
                                    <h1>Assuntos</h1>
                                    <h2 style={{fontSize: 28}}> Selecione os assuntos do simulado</h2>
                                </div>
                    
                              
                                <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column", height: "100%",  borderColor:`#${border_color}`}}>
                                    <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%", flexDirection:"column", borderStyle: "none"}}>
                                    

                                        <div className="question_screen_selection_grid">
                                            {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                        
                                            {(subjects).map(topic => (
                                            
                                                <label key={topic.SubjectName} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                <input
                                                    type="checkbox"
                                                    value={topic.SubjectName}
                                                    className="question_screen_selection_checkbox"
                                                    checked={selectedTopics.includes(topic.SubjectName)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                        setSelectedTopics(prev => [...prev, topic.SubjectName]);
                                    
                                                        } else {
                                                        setSelectedTopics(prev => prev.filter(t => t !== topic.SubjectName));
                                                        }
                                                    }}/>
                                                    <h3 style={{textAlign:"center", marginTop: 10}}>{topic.SubjectName}</h3>
                                                </label>  
                                                                 
                                        ))}
                                        
                                        
                                        </div>                                                                                          
                                    </div>
                                       <div style={{width:"80%", height:"7%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                            <App_Button bgcolor={"FFFFFF"} bordercolor={"C0C8F0"} borderhovercolor={"6677DD"} bghovercolor={"EEF2FF"} message={"Selecionar"} onClick={() => {set_picked_question_topics(selectedTopics); set_current_component_status(1);}}/>
                                        </div>

                                        <div style={{width:"80%", height:"7%", display:"flex", alignContent:"center", justifyContent:"center", marginBottom: "5%"}}>
                                            <App_Button bgcolor={"FFFFFF"} bordercolor={"E0E0E0"} borderhovercolor={"999999"} bghovercolor={"F5F5F5"} message={"Voltar"} onClick={() => set_current_page_status(0)}/>
                                        </div>
                                    
                                </div>
                            </div>
                        </>
                    )
}
