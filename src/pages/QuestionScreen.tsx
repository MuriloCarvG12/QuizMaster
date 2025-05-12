
import Card_button from "../components/Card_Button";
import Quiz_master_footer from "../components/Footer";
import Header from "../components/Header_navigation";
import App_Button from "../components/App_Button";
import { useState } from "react";
import { Control_menu } from "../components/Page_Question_Screen";

export default function QuestionScreen() {
    const [current_option, set_current_option] = useState(0)
    const [picked_question_source, set_picked_question_source] = useState("")
    const[picked_question_topics, set_picked_question_topics] = useState([])
    
    const handle_picked_question_source = (event) => {
        set_picked_question_source(event.target.value);
        console.log("PICKED OPTION -> " + picked_question_source)
      };

    function handle_picked_question_topics(event)  {
        const values = Array.from(event.target.selectedOptions, option => option.value);
        set_picked_question_topics(values);
        console.log("PICKED TOPICS ->", values);
      };

    function control_menu(current_option:number)
    {
        switch(current_option)
        {
            case 0:
                {
                    return(
                        <Control_menu set_current_option={set_current_option} />)
                }
            case 1:
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
                                    <select onChange={handle_picked_question_topics} multiple={true}>
                                        <option value="someOption">Some option</option>
                                        <option value="otherOption">Other option</option>
                                    </select>
                                    <h1 style={{color:"black"}}> Selecione a fonte </h1>
                                    <select onChange={handle_picked_question_source}>
                                        <option value="someOption">Some option</option>
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
            case 2:
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
            case 3:
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