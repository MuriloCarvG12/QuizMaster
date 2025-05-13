import { useState } from "react";
import App_Button from "./App_Button";

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
    handle_picked_question_topics: (event:any) => void
    
    set_current_option: (option: number) => void
}

const topics = ["Matemática", "História", "Biologia","Matemática", "História", "Biologia","Matemática", "História", "Biologia","Matemática", "História", "Biologia"];





export function Topics_screen_MainTopicSelection({handle_picked_question_topics, set_current_option}:topics_screen_interface)
{
    return(
                        <>
                             <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head">
                                    <h1>Topicos</h1>
                                </div>
                    
                    
                                <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column"}}>
                                    <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%", flexDirection:"column"}}>
                                        <h1 style={{color:"black"}}> Selecione o topico </h1>

                                        <div className="question_screen_selection_grid">
                                            {topics.map(topic => (
                                            
                                                <label key={topic} style={{ display: 'block', width:"5%", height:"2%", color:"black"}} >
                                            
                                                    
                                                <input
                                                    type="checkbox"
                                                    value={topic}
                                                    className="question_screen_selection_checkbox"
                                                    
                                                />
                                                    {topic}
                                                </label>  
                                                                  
                                        ))}

                                        
                                        </div>
                                        <div style={{width:"100%", height:"10%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                            <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => handle_picked_question_topics}/>
                                        </div>

                                        
                                        

    
                                    </div>
                                    
                                </div>
                            </div>
                        </>
                    )
}

export function Topics_screen_SubTopicSelection({handle_picked_question_topics , set_current_option}:topics_screen_interface){}

export function Topics_screen_QuestionSourceSelection({handle_picked_question_source , set_current_option}:topics_screen_interface)
{
    return(
                        <>
                             <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head">
                                    <h1>Topicos</h1>
                                </div>
                    
                    
                                <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column"}}>
                                    <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%", flexDirection:"column"}}>                                                                                             
                                        <h1 style={{color:"black"}}> Selecione a fonte </h1>
                                        <select onChange={handle_picked_question_source} className="question_screen_selection_box" >
                                            <option value="someOption" >Some option</option>
                                            <option value="otherOption">Other option</option>
                                        </select>
                                        

    
                                    </div>
                                    <div style={{width:"100%", height:"10%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_option(0)}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) 
}

interface i_saved_question_screen
{
    set_current_option: (option :number) => void
}

export function Saved_question_screen({set_current_option}: i_saved_question_screen)
{
    return(
                        <>
                        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                           
                           
                           <div id="USER Questions HEAD" className="question_screen_head">
                               <h1>Perguntas Salvas</h1>
                           </div>
               
               
                           <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column"}}>
                                <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%"}}>
                                    <h1 style={{color:"black"}}> Retrieve Saved Questions</h1>
                                </div>
                               <div style={{width:"100%", height:"10%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                   <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_option(0)}/>
                               </div>
                           </div>
                       </div>
                   </>
                    )
}

interface i_community_question_screen
{
    set_current_option: (option :number) => void
}

export function Community_question_screen({set_current_option}: i_community_question_screen)
{
    return(
                    <>
                    <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                           
                           
                           <div id="USER Questions HEAD" className="question_screen_head">
                               <h1>Perguntas Comunidade</h1>
                           </div>
               
               
                           <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column"}}>
                                <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%"}}>
                                    <h1 style={{color:"black"}}> GOTO COMMUNITY QUESTIONS PAGE</h1>
                                </div>
                               <div style={{width:"100%", height:"10%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                   <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_option(0)}/>
                               </div>
                           </div>
                       </div>
                    </>) 
}

