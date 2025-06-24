

import Quiz_master_footer from "../components/Footer";
import Header from "../components/Header_navigation";

import { useState } from "react";



import { CommunityButton } from "../components/Page_Question_Community_Button";
import {Control_menu} from "../components/QuestionsSubScreenComponents/QuestionControlMenu";
import { Topics_screen_MainTopicSelection } from "../components/QuestionsSubScreenComponents/MainTopicSelection";
import { Topics_screen_QuestionSourceSelection } from "../components/QuestionsSubScreenComponents/QuestionSourceSelection";
import { Topics_screen_SubTopicSelection } from "../components/QuestionsSubScreenComponents/SubTopicSelection";

/**
 * 
 * TODO MAKE THIS PAGE USE THE QUESTIONSSUBSCREEN COMPONENTS INSTEAD OF THE PAGE_QUESTIONS
 * 
 * 
 */

export default function QuestionScreen() {
    const [current_option, set_current_option] = useState(0) // variable controls the sub menu shown
    const [picked_question_source, set_picked_question_source] = useState("") // variable that stores the exam sources selected
    const[picked_question_topics, set_picked_question_topics] = useState([]) // variable that stores the topics selected
    const [current_topic_state, set_current_topic_state] = useState(0) // variable that controles the topic submenu shownd
    const [current_saved_topic_state, set_current_saved_topic_state] = useState(0) // variable that controles the saved questions submenu
    
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
                                 <Topics_screen_MainTopicSelection
                            set_picked_question_topics={set_picked_question_topics}
                            
                            set_current_page_status={set_current_option}
                            set_current_component_status={set_current_topic_state}
                            set_current_page_status_value={0}
                            header_bg_color="aadaf2"
                            border_color="96c1d6"
                            />
                               
                                          
                            )
                        case 1:
                            return (
                                
                               <Topics_screen_SubTopicSelection
                                set_picked_question_topics={() => { } }
                                set_current_component_status={set_current_topic_state}
                                header_bg_color="aadaf2"
                                border_color="96c1d6"  />
                            )
                        case 2:
                            return (
                                <Topics_screen_QuestionSourceSelection 
                                set_picked_question_sources={set_picked_question_source} 
                                set_current_component_status={set_current_topic_state} 
                                header_bg_color="aadaf2" 
                                border_color="96c1d6"/>
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
                switch(current_saved_topic_state)
                {
                    case 0:
                        return(
                           
                            <Topics_screen_MainTopicSelection
                            set_picked_question_topics={set_picked_question_topics}
                            
                            set_current_page_status={set_current_option}
                            set_current_component_status={set_current_saved_topic_state}
                            set_current_page_status_value={0}
                            header_bg_color="DCCFF9"
                            border_color="bdafdb"
                            />
                           
                        )
                    case 1: 
                        return(
                            <Topics_screen_SubTopicSelection 
                            set_picked_question_topics={() => { } } 
                            set_current_component_status={set_current_saved_topic_state} 
                            header_bg_color="DCCFF9" 
                            border_color="bdafdb"  />
                           
                        )

                    case 2:
                        return(
                            <Topics_screen_QuestionSourceSelection 
                            set_picked_question_sources={set_picked_question_source}
                             set_current_component_status={set_current_saved_topic_state} 
                             header_bg_color="DCCFF9" 
                             border_color="bdafdb"/>

                        )
                    default:{
                        return(console.log("this is broken"))
                    }
                }
                
            }
         
            // sub-tela Perguntas Comunidade da pagina perguntas 
            case 3:
            {           
                return (
                    CommunityButton     
                );
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

