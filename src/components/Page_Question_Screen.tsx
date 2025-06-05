
import { useState } from "react";
import App_Button from "./App_Button";


/***
 *       This file contains all the code necessary for the question screen 
 *      Control menu works as a switch receiving a control use state and rendering the proper funciton according to it
 *          
 *      Topics_screen_MainTopicSelection is the first screen if the user chooses topics
 * 
 *      Topics_screen_SubTopicSelection is the seconds screen if the user selects the topics they want this is where they take the sub topics
 * 
 * 
 *      Topics_screen_QuestionSourceSelection is the final screen of the topics section where they choose the sources for their exam a specific book or college
 * 
 * 
 * 
 */


type ControlMenuProps = {
  set_current_option: (option: number) => void;
};


export function Control_menu({set_current_option}:ControlMenuProps)
{
    return(
                            <>
                                <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head">
                                    <h1>Minhas Perguntas</h1>
                                </div>
                    
                    
                                <div id="HOME-Questions" className="question_screen_body">
    
                                    <div style={{width:"100%", height:"15%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"aadaf2"} bordercolor={"96c1d6"} borderhovercolor={"84aabd"} bghovercolor={"9ac5db"} message={"Tópicos"} onClick={() => set_current_option(1)}/>
                                    </div>
    
                                    <div style={{width:"100%", height:"15%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"DCCFF9"} bordercolor={"bdafdb"} borderhovercolor={"a99bc7"} bghovercolor={"c7bae3"} message={"Perguntas Salvas"} onClick={() => set_current_option(2)}/>
                                    </div>
    
                                    <div style={{width:"100%", height:"15%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"FFDACC"} bordercolor={"e3c0b3"} borderhovercolor={"d1b1a5"} bghovercolor={"e3c2b6"} message={"Perguntas da Comunidade"} onClick={() => set_current_option(3)}/>
                                    </div>
                                                                                                                               
                                </div>
                    
                                
                            </div>     
                            </>)
}

interface topics_screen_interface
{
    set_picked_question_topics: (array: Array) => void
    set_current_topic_state: (option: number) => void
    set_current_option: (option: number) => void
    border_color :string
    header_bg_color :string
}

const topics = ["Matemática", "História", "Biologia","Matemática", "História", "Biologia","Matemática", "História", "Biologia", "História", "Biologia13","Matemática", "História", "Biologia","Matemática", "História", "Biologia1","Matemática", "História", "Biologia","Matemática", "História", "Biologia","Matemática", "História", "Biologia", "História", "Biologia13","Matemática", "História", "Biologia","Matemática", "História", "Biologia1"];



// COMPONENTES RELACIONADOS A SUBTELA TOPICOS SALVOS

export function Topics_screen_MainTopicSelection({set_picked_question_topics, set_current_option, set_current_topic_state, border_color, header_bg_color}:topics_screen_interface)
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
                                            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => {set_picked_question_topics(selectedTopics); set_current_topic_state(1); console.log("PICKED TOPICS ->", selectedTopics);}}/>
                                        </div>

                                        <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                            <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_option(0)}/>
                                        </div>
                                    
                                </div>
                            </div>
                        </>
                    )
}

export function Topics_screen_SubTopicSelection({ set_current_topic_state, border_color , header_bg_color}:topics_screen_interface)
{
    return(
                        <>
                             <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: `#${header_bg_color}`, borderColor:`#${border_color}`}}>
                                    <h1>Sub-Topicos</h1>
                                    <h2 style={{fontSize: 28}}> Selecione os subtopicos</h2>
                                </div>
                    
                    
                                <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column", height: "100%", borderColor:`#${border_color}`}}>
                                    <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%", flexDirection:"column", borderStyle: "none"}}>                                                                                             
                                        
                                        <h1 style={{color:"black"}}>TODO IMPLEMENT BACKEND TO FETCH SUBTOPICS</h1>
                                        

    
                                    </div>
                                    <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => set_current_topic_state(2)}/>
                                    </div>
                                    <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_topic_state(0)}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) 
}


const sources = ["lugar1", "lugar2", "lugar3"];

interface topics_screen_QuestionSourceSelection_interface
{
    set_picked_question_topics: (array: Array) => void
    set_current_topic_state: (option: number) => void
    set_current_option: (option: number) => void
    set_current_page_status: (option: number) => void
    set_current_page_status_value:number
    border_color :string
    header_bg_color :string
}

export function Topics_screen_QuestionSourceSelection({set_picked_question_topics, set_current_topic_state, set_current_page_status, set_current_page_status_value, border_color, header_bg_color}:topics_screen_QuestionSourceSelection_interface)
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
                                            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => {set_picked_question_topics(selectedSources); console.log("PICKED TOPICS ->", selectedSources); set_current_page_status(set_current_page_status_value)}}/>
                                    </div>
                                    
                                    <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_topic_state(1)}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) 
}



