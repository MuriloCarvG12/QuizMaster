
import QuestionSearch from "./questionSearch";
import App_Button from "../App_Button";

import questionInterface from "../../interfaces/question_exam";
import { useEffect, useState } from "react";
import QuestionCard from "./questionCard";
import RenderSingleQuestion from "./singleQuestionRender";
import ShowQuestionCorrection from "./ShowSingleQuestionResult";
import imageInfo from "../../interfaces/question_image";



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
    async function FindQuestions(currentQuestionLowerBound: number, currentQuestionUpperBound: number)
    {
        
        let foundQuestions : questionInterface[] = [];
        const url = "http://localhost:3000/Question/getQuestion";
        
        let currentQuestionIndex: number;
        for(currentQuestionIndex = currentQuestionLowerBound; currentQuestionIndex < currentQuestionUpperBound; currentQuestionIndex++)
        {  
            const response =
            await fetch
                (url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ QuestionId: currentQuestionIndex }),
                })

            let question: questionInterface = await response.json();

            foundQuestions.push(question);
        }

        return foundQuestions;
    }

    //TODO FETCH QUESTION IMAGES
    function UpdateQuestions(foundQuestions : questionInterface[], setCurrentQuestions :React.Dispatch<React.SetStateAction<questionInterface[]>>) 
    {
        setCurrentQuestions(foundQuestions);
    }

    const [currentQuestions, setCurrentQuestions] = useState<questionInterface[]>([]);

    //used to fetch questions by their id
    const [currentQuestionLowerBound, setCurrentQuestionLowerBound] = useState(1);
    const [currentQuestionUpperBound, setCurrentQuestionUpperBound] = useState(11);
    //

    const [pageStatus, setPageStatus]= useState(0);
    const [selectedQuestion, setSelectedQuestion] = useState<questionInterface>()
    const [pickedQuestionAlternative, setPickedQuestionAlternative] = useState("");
    const [FilteredQuestion, setFilteredQuestion] = useState("");

    useEffect(() => {
        async function fetchQuestions() {
            const found = await FindQuestions(currentQuestionLowerBound, currentQuestionUpperBound);
            setPageStatus(1);
            UpdateQuestions(found, setCurrentQuestions);
        }
        fetchQuestions();
    }, [currentQuestionLowerBound, currentQuestionUpperBound]);
    
    function control_question_page(pageStatus:number)    
    {
        switch(pageStatus)
        {
            case 1:
                return(
                <>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "25px",
                    width: "100%",
                    alignContent: "start",
                    padding: "16px",
                    boxSizing: "border-box"
                    }}>
                        {FilteredQuestion == "" ? 
                            currentQuestions.map(question => (
                            <QuestionCard question={question}  setQuestionPageStatus={setPageStatus} setSelectedQuestion={setSelectedQuestion}/> ))
                            :
                            currentQuestions
                            .filter(question => question.QuestionId.includes(FilteredQuestion))
                            .map(question => (
                            <QuestionCard question={question} setQuestionPageStatus={setPageStatus} setSelectedQuestion={setSelectedQuestion} />
                            ))   
                        }
                </div>
                </>)
            case 2:
                return(
                    <>
                    <div style={{
                        display:"flex",
                        flexDirection: "column",
                        height: "50%"
                    }}>
                        <RenderSingleQuestion question={selectedQuestion} set_page_status={setPageStatus} setPickedQuestionAlternative={setPickedQuestionAlternative}/>
          
                    </div>
                        
                    </>
                )
            case 3: 
                return(
                    <>
                    <div style={{
                        display:"flex",
                        flexDirection: "column",
                        height: "50%"
                    }}>
                        <ShowQuestionCorrection question={selectedQuestion} questions_answer={pickedQuestionAlternative} setPageStatus={setPageStatus} />    
                    </div>
                    </>
                )

        }

    }
    return(
        <>
        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
            
            
            <div id="USER Questions HEAD" className="question_screen_head" style={{marginTop: "5%"}}>
                <h1>Perguntas</h1>
            </div>


            <div id="HOME-Questions" className="question_screen_body">
                {pageStatus == 1 && 
                <>
                    <div style={{width:"100%", height:"15%", display:"flex", alignContent:"center", justifyContent:"space-evel", marginBottom: "5%"}}>
                        <QuestionSearch set_question_filter={setFilteredQuestion}/> 
                    </div>
                </>
                }
                
                    {control_question_page(pageStatus)}       
                <div style={{width:"100%", height:"20%", display:"flex", flexDirection:"row", alignContent:"center", justifyContent:"space-evenly"}}>
                   
                   {pageStatus == 1 &&
                   <>
                        <div className="arrow-chevron-left">
                        <button style={{ width: "100%", height: "80%", opacity: 0, cursor: "pointer",position: "absolute" }}
                            onClick={() => {if (currentQuestionLowerBound > 0) {
                                setCurrentQuestionLowerBound(currentQuestionLowerBound - 10);
                                setCurrentQuestionUpperBound(currentQuestionUpperBound - 10);
                            }}}
                            />
                        </div>
                        
                        <div className="arrow-chevron-right">
                            <button style={{ width: "100%", height: "80%", opacity: 0, cursor: "pointer" ,position: "absolute"}}
                            onClick={() => { setCurrentQuestionLowerBound(currentQuestionLowerBound + 10);  setCurrentQuestionUpperBound(currentQuestionUpperBound + 10)}}
                            />
                        </div>  
                    </> 
                    }    
                </div>                                                                   
            </div>

            
        </div>     
        </>
    )   
}



