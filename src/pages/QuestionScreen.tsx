

import Quiz_master_footer from "../components/Footer";
import Header from "../components/Header_navigation";

import { useState } from "react";
import { Control_menu, Saved_question_screen, Community_question_screen, Topics_screen_MainTopicSelection } from "../components/Page_Question_Screen";


export default function QuestionScreen() {
    const [current_option, set_current_option] = useState(0)
    const [picked_question_source, set_picked_question_source] = useState("")
    const[picked_question_topics, set_picked_question_topics] = useState([])
    const [current_topic_state, set_current_topic_state] = useState(0)
    
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
                    <Control_menu set_current_option={set_current_option}/>
                )
                    
                }
            
            case 1:
            {
                switch(current_topic_state)
                    {
                        case 0:
                            return(
                                <Topics_screen_MainTopicSelection handle_picked_question_topics={set_picked_question_topics} set_current_option={set_current_option} />
                            )
                        case 1:
                            return 
                        default:
                            return null;
                            
                    }
            }
            case 2:
            {
                return(
                    <Saved_question_screen set_current_option={set_current_option}/>
                )
            }
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