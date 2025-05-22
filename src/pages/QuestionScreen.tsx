

import Quiz_master_footer from "../components/Footer";
import Header from "../components/Header_navigation";

import { useState } from "react";
import { Control_menu, Saved_question_screen, Community_question_screen, Topics_screen_MainTopicSelection, Topics_screen_QuestionSourceSelection, Topics_screen_SubTopicSelection } from "../components/Page_Question_Screen";


export default function QuestionScreen() {
    const [current_option, set_current_option] = useState(0) // variable controls the sub menu shown
    const [picked_question_source, set_picked_question_source] = useState("") // variable that stores the exam sources selected
    const[picked_question_topics, set_picked_question_topics] = useState([]) // variable that stores the topics selected
    const [current_topic_state, set_current_topic_state] = useState(0) // variable that controles the topic submenu shownd
    




    function control_menu(current_option:number)
    {
        switch(current_option)
        {
            case 0: // sub-tela inicial da pagina perguntas
                {
                    return(
                    <Control_menu set_current_option={set_current_option}/>
                )
                    
                }
            // sub-tela Topicos  da pagina perguntas 
            case 1: 
            {
                switch(current_topic_state)
                    {
                        case 0:
                            return(
                                <Topics_screen_MainTopicSelection set_picked_question_topics={set_picked_question_topics} set_current_option={set_current_option} set_current_topic_state={set_current_topic_state} />
                            )
                        case 1:
                            return (
                                <Topics_screen_SubTopicSelection set_picked_question_topics={() => {}} set_current_option={set_current_option} set_current_topic_state={set_current_topic_state}/>
                            )
                        case 2:
                            return (
                                <Topics_screen_QuestionSourceSelection set_picked_question_topics={set_picked_question_source} set_current_option={set_current_option} set_current_topic_state={set_current_topic_state}/>
                            )
                        default:
                            return(
                                console.log("this is broken!")
                            )
                            
                    }
            }
            // sub-tela Perguntas Salvas  da pagina perguntas 
            case 2:
            {
                return(
                    <Saved_question_screen set_current_option={set_current_option}/>
                )
            }
            // sub-tela Perguntas Comunidade da pagina perguntas 
            case 3:
            {
                return(
                <Community_question_screen set_current_option={set_current_option}/>
                )   
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