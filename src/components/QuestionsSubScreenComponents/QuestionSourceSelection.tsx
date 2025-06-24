import { useState } from "react";
import App_Button from "../App_Button";

const sources = ["lugar1", "lugar2", "lugar3"];

interface topics_screen_QuestionSourceSelection_interface
{
     set_picked_question_sources: (array: any[]) => void;
    set_current_component_status: (option: number) => void
 
   
    border_color :string
    header_bg_color :string
}

export function Topics_screen_QuestionSourceSelection({set_picked_question_sources, set_current_component_status, border_color, header_bg_color}:topics_screen_QuestionSourceSelection_interface)
{
    const [selectedSources, setSelectedSources] = useState<string[]>([]);
    return(
                        <>
                             <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: `#${header_bg_color}`, borderColor:`#${border_color}`}}>
                                    <h1>Fontes</h1>
                                    <h2 style={{fontSize: 28}}> Selecione a fonte</h2>
                                </div>
                    
                    
                                <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column", height: "100%", borderColor:`#${border_color}`}}>
                                    <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%", flexDirection:"column", borderStyle:"none"}}>                                                                                             
                                        
                                        <div className="question_screen_selection_grid">
                                            {sources.map(source => (
                                            
                                                <label key={source} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}}  >
                                            
                                                    
                                                <input
                                                    type="checkbox"
                                                    value={source}
                                                    className="question_screen_selection_checkbox"
                                                    checked={selectedSources.includes(source)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                        setSelectedSources(prev => [...prev, source]);
                                                        } else {
                                                        setSelectedSources(prev => prev.filter(t => t !== source));
                                                        }
                                                    }}
                                                    
                                                />
                                                    <h3 style={{textAlign:"center"}}>{source}</h3>
                                                </label>  
                                                                  
                                        ))}
                                        
                                        
                                        </div>         
                                        

    
                                    </div>

                                    <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => {set_picked_question_sources(selectedSources); console.log("PICKED TOPICS ->", selectedSources);}}/>
                                    </div>
                                    
                                    <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_component_status(1)}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) 
}
