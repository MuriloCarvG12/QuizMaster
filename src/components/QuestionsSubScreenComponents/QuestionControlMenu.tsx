
import QuestionSearch from "../PageQuestions/questionSearch";
import App_Button from "../App_Button";

import questionInterface from "../../interfaces/question_exam";
import { useEffect, useState } from "react";
import QuestionCard from "../PageQuestions/questionCard";
import RenderSingleQuestion from "../PageQuestions/singleQuestionRender";
import ShowQuestionCorrection from "../PageQuestions/ShowSingleQuestionResult";
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
    },
    {
        Id: 6,
        QuestionId: "Q006",
        QuestionText: "ENEM 2022",
        QuestionPrompt: "A fotossíntese é um processo que ocorre nos cloroplastos e tem como produtos finais:",
        QuestionAltA: "CO² e água",
        QuestionAltB: "Glicose e oxigênio",
        QuestionAltC: "ATP e CO²",
        QuestionAltD: "Glicose e CO²",
        QuestionAltE: "Água e ATP",
        CorrectAlternative: "B",
        SubjectId: 2,
        TopicId: 4,
        SubTopicId: 10
    },
    {
        Id: 7,
        QuestionId: "Q007",
        QuestionText: "Vestibular UNICAMP 2022",
        QuestionPrompt: "Qual é o valor de log₂(64)?",
        QuestionAltA: "4",
        QuestionAltB: "8",
        QuestionAltC: "5",
        QuestionAltD: "6",
        QuestionAltE: "7",
        CorrectAlternative: "D",
        SubjectId: 1,
        TopicId: 1,
        SubTopicId: 2
    },
    {
        Id: 8,
        QuestionId: "Q008",
        QuestionText: "FUVEST 2023",
        QuestionPrompt: "A Independência do Brasil foi proclamada em:",
        QuestionAltA: "7 de setembro de 1889",
        QuestionAltB: "15 de novembro de 1822",
        QuestionAltC: "7 de setembro de 1822",
        QuestionAltD: "15 de novembro de 1889",
        QuestionAltE: "13 de maio de 1888",
        CorrectAlternative: "C",
        SubjectId: 3,
        TopicId: 7,
        SubTopicId: 15
    },
    {
        Id: 9,
        QuestionId: "Q009",
        QuestionText: "ENEM 2021",
        QuestionPrompt: "Em química, o pH de uma solução neutra a 25°C é igual a:",
        QuestionAltA: "0",
        QuestionAltB: "14",
        QuestionAltC: "5",
        QuestionAltD: "7",
        QuestionAltE: "10",
        CorrectAlternative: "D",
        SubjectId: 4,
        TopicId: 10,
        SubTopicId: 20
    },
    {
        Id: 10,
        QuestionId: "Q010",
        QuestionText: "Vestibular FUVEST 2021",
        QuestionPrompt: "Um objeto é lançado verticalmente para cima com velocidade inicial de 20 m/s. Considerando g = 10 m/s², a altura máxima atingida é:",
        QuestionAltA: "10 m",
        QuestionAltB: "40 m",
        QuestionAltC: "20 m",
        QuestionAltD: "5 m",
        QuestionAltE: "30 m",
        CorrectAlternative: "C",
        SubjectId: 1,
        TopicId: 2,
        SubTopicId: 6
    },
    {
        Id: 11,
        QuestionId: "Q011",
        QuestionText: "UNICAMP 2021",
        QuestionPrompt: "O processo de osmose ocorre quando há movimento de:",
        QuestionAltA: "Soluto do meio hipertônico para o hipotônico",
        QuestionAltB: "Solvente do meio hipertônico para o hipotônico",
        QuestionAltC: "Solvente do meio hipotônico para o hipertônico",
        QuestionAltD: "Soluto do meio hipotônico para o hipertônico",
        QuestionAltE: "Proteínas através da membrana",
        CorrectAlternative: "C",
        SubjectId: 2,
        TopicId: 4,
        SubTopicId: 11
    },
    {
        Id: 12,
        QuestionId: "Q012",
        QuestionText: "ENEM 2023",
        QuestionPrompt: "Na língua portuguesa, a função da conjunção 'embora' em 'Embora estivesse chovendo, ele saiu' é:",
        QuestionAltA: "Causal",
        QuestionAltB: "Consecutiva",
        QuestionAltC: "Concessiva",
        QuestionAltD: "Condicional",
        QuestionAltE: "Temporal",
        CorrectAlternative: "C",
        SubjectId: 5,
        TopicId: 13,
        SubTopicId: 25
    },
    {
        Id: 13,
        QuestionId: "Q013",
        QuestionText: "FUVEST 2022",
        QuestionPrompt: "A equação da reta que passa pelos pontos (0, 3) e (2, 7) é:",
        QuestionAltA: "y = x + 3",
        QuestionAltB: "y = 3x + 1",
        QuestionAltC: "y = 2x + 3",
        QuestionAltD: "y = 2x + 1",
        QuestionAltE: "y = 4x - 1",
        CorrectAlternative: "C",
        SubjectId: 1,
        TopicId: 1,
        SubTopicId: 4
    },
    {
        Id: 14,
        QuestionId: "Q014",
        QuestionText: "UNICAMP 2023",
        QuestionPrompt: "O elemento químico de número atômico 11, o sódio, pertence ao grupo:",
        QuestionAltA: "Halogênios",
        QuestionAltB: "Gases nobres",
        QuestionAltC: "Metais alcalinos terrosos",
        QuestionAltD: "Metais alcalinos",
        QuestionAltE: "Metais de transição",
        CorrectAlternative: "D",
        SubjectId: 4,
        TopicId: 10,
        SubTopicId: 21
    },
    {
        Id: 15,
        QuestionId: "Q015",
        QuestionText: "ENEM 2022",
        QuestionPrompt: "O movimento operário do século XIX resultou na conquista de diversos direitos trabalhistas. Qual dos seguintes foi uma conquista desse período?",
        QuestionAltA: "Vale transporte",
        QuestionAltB: "Jornada de trabalho de 8 horas",
        QuestionAltC: "13º salário",
        QuestionAltD: "FGTS",
        QuestionAltE: "Seguro desemprego",
        CorrectAlternative: "B",
        SubjectId: 3,
        TopicId: 8,
        SubTopicId: 16
    }
    
    

];
    function FindQuestions(currentQuestionLowerBound: number, currentQuestionUpperBound: number, mockQuestions: questionInterface[])
    {

        let foundQuestions : questionInterface[] = [];
        let currentQuestionIndex: number;
        console.log(mockQuestions.length)
        for(currentQuestionIndex = currentQuestionLowerBound; currentQuestionIndex < currentQuestionUpperBound; currentQuestionIndex++)
        {
            console.log(currentQuestionIndex)
            
            foundQuestions.push(mockQuestions[currentQuestionIndex]);
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
    const [currentQuestionLowerBound, setCurrentQuestionLowerBound] = useState(0);
    const [currentQuestionUpperBound, setCurrentQuestionUpperBound] = useState(10);
    //

    const [pageStatus, setPageStatus]= useState(0);
    const [selectedQuestion, setSelectedQuestion] = useState<questionInterface>()
    const [pickedQuestionAlternative, setPickedQuestionAlternative] = useState("");
    const [FilteredQuestion, setFilteredQuestion] = useState("");

    useEffect(() => {
        const found = FindQuestions(currentQuestionLowerBound, currentQuestionUpperBound, mockQuestions);
        setPageStatus(1)
        UpdateQuestions(found, setCurrentQuestions);
        console.log("uptaded questions")
        console.log(found);
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
                        marginTop: "2%",
                        height: "50%"
                    }}>
                        <RenderSingleQuestion question={selectedQuestion} set_page_status={setPageStatus} setPickedQuestionAlternative={setPickedQuestionAlternative}/>
          
                    </div>
                        
                    </>
                )
            case 3: 
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
                <div style={{width:"100%", height:"20%", display:"flex", flexDirection:"row", alignContent:"center", justifyContent:"space-evenly"}}>
                   
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
                </div>                                                                           
            </div>

            
        </div>     
        </>
    )   
}



