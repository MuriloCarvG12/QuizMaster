
import QuestionSearch from "../PageQuestions/questionSearch";
import App_Button from "../App_Button";
import QuestionCard from "../PageQuestions/QuestionCard";


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
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head" style={{marginTop: "5%"}}>
                                    <h1>Perguntas</h1>
                                </div>
                    
                    
                                <div id="HOME-Questions" className="question_screen_body">
    
                                    <div style={{width:"100%", height:"15%", display:"flex", alignContent:"center", justifyContent:"center", marginBottom: "10%"}}>
                                       <QuestionSearch /> 
                                    </div>

                                    <div style={{width:"100%", height:"100%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <QuestionCard/>
                                    </div>
                                                                                                                               
                                </div>
                    
                                
                            </div>     
                            </>)
}



