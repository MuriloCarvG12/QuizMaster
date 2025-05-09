
import Card_button from "../components/Card_Button";
import Quiz_master_footer from "../components/Footer";
import Header from "../components/Header_navigation";
import App_Button from "../components/App_Button";
import { useState } from "react";

export default function QuestionScreen() {
    const [current_option, set_current_option] = useState(0)

    function control_menu(current_option:number)
    {
        switch(current_option)
        {
            case 0:
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
            case 1:
            {
                return(
                    <>
                         <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                            
                            
                            <div id="USER Questions HEAD" className="question_screen_head">
                                <h1>Topicos</h1>
                            </div>
                
                
                            <div id="HOME-Questions" className="question_screen_body">
                                <div style={{width:"100%", height:"15%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                    <App_Button bgcolor={"FFDACC"} bordercolor={"e3c0b3"} borderhovercolor={"d1b1a5"} bghovercolor={"e3c2b6"} message={"Voltar"} onClick={() => set_current_option(0)}/>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            case 2:
            {
                return(
                    <>
                    <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                       
                       
                       <div id="USER Questions HEAD" className="question_screen_head">
                           <h1>Perguntas Salvas</h1>
                       </div>
           
           
                       <div id="HOME-Questions" className="question_screen_body">
                           <div style={{width:"100%", height:"15%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                               <App_Button bgcolor={"FFDACC"} bordercolor={"e3c0b3"} borderhovercolor={"d1b1a5"} bghovercolor={"e3c2b6"} message={"Voltar"} onClick={() => set_current_option(0)}/>
                           </div>
                       </div>
                   </div>
               </>
                )
            }
            case 3:
            {
                return(
                <>
                <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                       
                       
                       <div id="USER Questions HEAD" className="question_screen_head">
                           <h1>Perguntas Comunidade</h1>
                       </div>
           
           
                       <div id="HOME-Questions" className="question_screen_body">
                           <div style={{width:"100%", height:"15%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                               <App_Button bgcolor={"FFDACC"} bordercolor={"e3c0b3"} borderhovercolor={"d1b1a5"} bghovercolor={"e3c2b6"} message={"Voltar"} onClick={() => set_current_option(0)}/>
                           </div>
                       </div>
                   </div>
                </>)   
            }
        }
       
    }



    return (
    <>
    
            <div id="container">
                <Header Username={""}/>
    
                {control_menu(current_option)}          
                
                <Quiz_master_footer/>    
                
                    
            </div>
    </>

)
}