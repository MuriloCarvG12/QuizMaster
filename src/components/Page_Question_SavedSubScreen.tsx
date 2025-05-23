import { useState } from "react";
import App_Button from "./App_Button";


// COMPONENTES RELACIONADOS A SUBTELA PERGUNTAS SALVAS

interface i_saved_question_screen
{
    set_current_option: (option :number) => void
    set_current_saved_topic_state: (option :number) => void
}

const saved_topics = ["Matemática", "História", "Biologia"]

export function Saved_question_screen({set_current_option, set_current_saved_topic_state}: i_saved_question_screen)
{
    const [SelectedTopics, setSelectedTopics] = useState<string[]>([]);
    return(
                        <>
                        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                           
                           
                           <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: "#DCCFF9", borderColor:"#bdafdb"}}>
                                    <h1>Tópicos Salvos</h1>
                                    <h2 style={{fontSize: 28}}> Selecione o topico salvo</h2>
                                </div>
               
               
                           <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column", borderColor:"#bdafdb"}}>
                                <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%"}}>
                                    
                                        <div className="question_screen_selection_grid">
                                            {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                            {saved_topics.map(topic => (
                                            
                                                <label key={topic} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                <input
                                                    type="checkbox"
                                                    value={topic}
                                                    className="question_screen_selection_checkbox"
                                                    checked={SelectedTopics.includes(topic)}
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
                                            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => {set_current_saved_topic_state(1); console.log("bear")}}/>
                                </div>

                                <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                            <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_option(0)}/>
                                </div>
                            </div>
                       </div>
                   </>
                    )
}

interface i_saved_question_subtopics_screen
{
    
    set_current_saved_topic_state: (option :number) => void
}


export function Saved_question_subtopics_screen({set_current_saved_topic_state}:i_saved_question_subtopics_screen)
{
    const [SelectedTopics, setSelectedTopics] = useState<string[]>([]);
    return(
                        <>
                        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                           
                           
                           <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: "#DCCFF9", borderColor:"#bdafdb"}}>
                                    <h1>Sub - Tópicos </h1>
                                    <h2 style={{fontSize: 28}}> Selecione o sub-topico </h2>
                                </div>
               
               
                           <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column", borderColor:"#bdafdb"}}>
                                <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%"}}>
                                    
                                        <div className="question_screen_selection_grid">
                                            {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                            {saved_topics.map(topic => (
                                            
                                                <label key={topic} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                <input
                                                    type="checkbox"
                                                    value={topic}
                                                    className="question_screen_selection_checkbox"
                                                    checked={SelectedTopics.includes(topic)}
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
                                            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => set_current_saved_topic_state(2)}/>
                                </div>

                                <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                            <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_saved_topic_state(0)}/>
                                </div>
                            </div>
                       </div>
                   </>
                    )
}


interface i_saved_source_question_subtopics_screen
{
    
    set_current_saved_topic_state: (option :number) => void
}


export function Saved_source_question_subtopics_screen({ set_current_saved_topic_state}:i_saved_source_question_subtopics_screen)
{
    const [SelectedTopics, setSelectedTopics] = useState<string[]>([]);
    return(
                        <>
                        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                           
                           
                           <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: "#DCCFF9", borderColor:"#bdafdb"}}>
                                    <h1>Fontes </h1>
                                    <h2 style={{fontSize: 28}}> Selecione a fonte </h2>
                                </div>
               
               
                           <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column", borderColor:"#bdafdb"}}>
                                <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%"}}>
                                    
                                        <div className="question_screen_selection_grid">
                                            {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                            {saved_topics.map(topic => (
                                            
                                                <label key={topic} style={{ display: 'flex', flexDirection:"column", color:"black", justifyContent:"center", alignContent: "center"}} >                                                          
                                                <input
                                                    type="checkbox"
                                                    value={topic}
                                                    className="question_screen_selection_checkbox"
                                                    checked={SelectedTopics.includes(topic)}
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
                                            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => set_current_saved_topic_state(2)}/>
                                </div>

                                <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                            <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_saved_topic_state(0)}/>
                                </div>
                            </div>
                       </div>
                   </>
                    )
}
