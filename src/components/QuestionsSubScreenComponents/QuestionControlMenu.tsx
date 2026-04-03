
import QuestionSearch from "../PageQuestions/questionSearch";
import App_Button from "../App_Button";

import questionInterface from "../../interfaces/question_exam";
import { useState } from "react";
import QuestionCard from "../PageQuestions/questionCard";
import RenderSingleQuestion from "../PageQuestions/singleQuestionRender";
import ShowQuestionCorrection from "../PageQuestions/ShowSingleQuestionResult";



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
    const mockQuestions: questionInterface[] = [
    {
        Id: 1,
        QuestionId: "Q001",
        QuestionText: "Vestibular UNICAMP 2023",
        QuestionPrompt: "Qual é o resultado da integral definida de x² no intervalo de 0 a 3?",
        QuestionAltA: "6",
        QuestionAltB: "9",
        QuestionAltC: "12",
        QuestionAltD: "27",
        QuestionAltE: "3",
        CorrectAlternative: "B",
        SubjectId: 1,
        TopicId: 1,
        SubTopicId: 1
    },
    {
        Id: 2,
        QuestionId: "Q002",
        QuestionText: "FUVEST 2022",
        QuestionPrompt: "A célula procariótica difere da eucariótica pois não possui:",
        QuestionAltA: "Membrana plasmática",
        QuestionAltB: "Material genético",
        QuestionAltC: "Núcleo definido",
        QuestionAltD: "Ribossomos",
        QuestionAltE: "Parede celular",
        CorrectAlternative: "C",
        SubjectId: 2,
        TopicId: 4,
        SubTopicId: 9
    },
    {
        Id: 3,
        QuestionId: "Q003",
        QuestionText: "ENEM 2023",
        QuestionPrompt: "Sobre a Revolução Francesa, é correto afirmar que um de seus principais ideais era:",
        QuestionAltA: "A manutenção da monarquia absolutista",
        QuestionAltB: "A escravidão como base econômica",
        QuestionAltC: "Liberdade, igualdade e fraternidade",
        QuestionAltD: "O fortalecimento da Igreja Católica",
        QuestionAltE: "A expansão do feudalismo",
        CorrectAlternative: "C",
        SubjectId: 3,
        TopicId: 7,
        SubTopicId: 14
    },
    {
        Id: 4,
        QuestionId: "Q004",
        QuestionText: "Vestibular FUVEST 2023",
        QuestionPrompt: "Em um circuito elétrico simples, ao dobrar a tensão mantendo a resistência constante, a corrente elétrica:",
        QuestionAltA: "Permanece a mesma",
        QuestionAltB: "É reduzida à metade",
        QuestionAltC: "É quadruplicada",
        QuestionAltD: "Dobra",
        QuestionAltE: "É zerada",
        CorrectAlternative: "D",
        SubjectId: 1,
        TopicId: 2,
        SubTopicId: 5
    },
    {
        Id: 5,
        QuestionId: "Q005",
        QuestionText: "UNICAMP 2022",
        QuestionPrompt: "A função f(x) = 2x³ - 3x² - 12x + 5 possui ponto de máximo local em x =",
        QuestionAltA: "x = 2",
        QuestionAltB: "x = 0",
        QuestionAltC: "x = -1",
        QuestionAltD: "x = 3",
        QuestionAltE: "x = -2",
        CorrectAlternative: "C",
        SubjectId: 1,
        TopicId: 1,
        SubTopicId: 3
    },
    {
        Id: 1,
        QuestionId: "Q001",
        QuestionText: "Vestibular UNICAMP 2023",
        QuestionPrompt: "Qual é o resultado da integral definida de x² no intervalo de 0 a 3?",
        QuestionAltA: "6",
        QuestionAltB: "9",
        QuestionAltC: "12",
        QuestionAltD: "27",
        QuestionAltE: "3",
        CorrectAlternative: "B",
        SubjectId: 1,
        TopicId: 1,
        SubTopicId: 1
    },
    {
        Id: 2,
        QuestionId: "Q002",
        QuestionText: "FUVEST 2022",
        QuestionPrompt: "A célula procariótica difere da eucariótica pois não possui:",
        QuestionAltA: "Membrana plasmática",
        QuestionAltB: "Material genético",
        QuestionAltC: "Núcleo definido",
        QuestionAltD: "Ribossomos",
        QuestionAltE: "Parede celular",
        CorrectAlternative: "C",
        SubjectId: 2,
        TopicId: 4,
        SubTopicId: 9
    },
    {
        Id: 3,
        QuestionId: "Q003",
        QuestionText: "ENEM 2023",
        QuestionPrompt: "Sobre a Revolução Francesa, é correto afirmar que um de seus principais ideais era:",
        QuestionAltA: "A manutenção da monarquia absolutista",
        QuestionAltB: "A escravidão como base econômica",
        QuestionAltC: "Liberdade, igualdade e fraternidade",
        QuestionAltD: "O fortalecimento da Igreja Católica",
        QuestionAltE: "A expansão do feudalismo",
        CorrectAlternative: "C",
        SubjectId: 3,
        TopicId: 7,
        SubTopicId: 14
    },
    {
        Id: 4,
        QuestionId: "Q004",
        QuestionText: "Vestibular FUVEST 2023",
        QuestionPrompt: "Em um circuito elétrico simples, ao dobrar a tensão mantendo a resistência constante, a corrente elétrica:",
        QuestionAltA: "Permanece a mesma",
        QuestionAltB: "É reduzida à metade",
        QuestionAltC: "É quadruplicada",
        QuestionAltD: "Dobra",
        QuestionAltE: "É zerada",
        CorrectAlternative: "D",
        SubjectId: 1,
        TopicId: 2,
        SubTopicId: 5
    },
    {
        Id: 5,
        QuestionId: "Q005",
        QuestionText: "UNICAMP 2022",
        QuestionPrompt: "A função f(x) = 2x³ - 3x² - 12x + 5 possui ponto de máximo local em x =",
        QuestionAltA: "x = 2",
        QuestionAltB: "x = 0",
        QuestionAltC: "x = -1",
        QuestionAltD: "x = 3",
        QuestionAltE: "x = -2",
        CorrectAlternative: "C",
        SubjectId: 1,
        TopicId: 1,
        SubTopicId: 3
    }
    

];
    const [pageStatus, setPageStatus]= useState(0);
    const [selectedQuestion, setSelectedQuestion] = useState<questionInterface>()
    const [pickedQuestionAlternative, setPickedQuestionAlternative] = useState("");
    const [FilteredQuestion, setFilteredQuestion] = useState("");

    function control_question_page(pageStatus:number)    
    {
        switch(pageStatus)
        {
            case 0:
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
                            mockQuestions.map(question => (
                            <QuestionCard question={question}  setQuestionPageStatus={setPageStatus} setSelectedQuestion={setSelectedQuestion}/> ))
                            :
                            mockQuestions
                            .filter(question => question.QuestionId.includes(FilteredQuestion))
                            .map(question => (
                            <QuestionCard question={question} setQuestionPageStatus={setPageStatus} setSelectedQuestion={setSelectedQuestion} />
                            ))   
                        }
                </div>
                </>)
            case 1:
                return(
                    <>
                    <div style={{
                        display:"flex",
                        flexDirection: "column",
                        marginTop: "2%",
                        height: "50%"
                    }}>
                        <RenderSingleQuestion question={selectedQuestion} set_page_status={setPageStatus} setPickedQuestionAlternative={setPickedQuestionAlternative}/>
          
                    </div>
                        
                    </>
                )
            case 2: 
                return(
                    <>
                    <div>
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
                
                <div style={{width:"100%", height:"15%", display:"flex", alignContent:"center", justifyContent:"space-evel", marginBottom: "5%"}}>
                    <QuestionSearch set_question_filter={setFilteredQuestion}/> 
                </div>
                    {control_question_page(pageStatus)}                                                                                  
            </div>

            
        </div>     
        </>
    )   
}



