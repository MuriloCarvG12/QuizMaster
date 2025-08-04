import App_Button from "../components/App_Button"
import Header from "../components/Header_navigation"
import { useState } from "react";
import interface_quiz_question from "../interfaces/quiz_question";
import QuizTopicsSubscreen from "../components/PageQuiz/QuizTopicsSubscreen";
import QuizQuestionsSubScreen from "../components/PageQuiz/QuizQuestionsSubScreen";

export default function QuizScreen() {
    const [current_quizpage_status, set_current_quizpage_status] = useState(0)
    const [New_Quiz_Status,  Set_New_Quiz_Status] = useState(0)
    const [new_quiz_topics, set_new_quiz_topics] = useState([''])
    const [new_quiz_questions, set_new_quiz_questions] = useState<interface_quiz_question[]>([])
    const [quizQuestion, setQuizQuestion] = useState<interface_quiz_question>({question_text: '', question_alternative_a: '', question_alternative_b: '', question_alternative_c: '', question_alternative_d: ''});
    const topics = ["Matemática", "História", "Biologia"];
    const [Message, set_Message] = useState("");
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const [QuestionWarning, setQuestionWarning] = useState("")
    const [Question_Text, Set_Question_Text] = useState("");
    const [Question_Alternative_A, Set_Question_Alternative_A] = useState("");
    const [Question_Alternative_B, Set_Question_Alternative_B] = useState("");
    const [Question_Alternative_C, Set_Question_Alternative_C] = useState("");
    const [Question_Alternative_D, Set_Question_Alternative_D] = useState("");
    
    function remove_topic(current_topic:string)
    {
        set_new_quiz_topics(prev => prev.filter(topic => topic !== current_topic)); 
    }

    function add_new_topic(current_topic:string)
    {
        set_new_quiz_topics(prev => [...prev, current_topic]); 
        console.log(new_quiz_topics)
    }
   
    function clear_quiz_question()
    {
            /***id="Question_Text" id="Question_Alternative_A" */
            Set_Question_Text("");
            Set_Question_Alternative_A("");
            Set_Question_Alternative_B("");
            Set_Question_Alternative_C("");
            Set_Question_Alternative_D("");
    }

    function add_new_question()
    {
        const new_question = {
            question_text: Question_Text,
            question_alternative_a: Question_Alternative_A,
            question_alternative_b: Question_Alternative_B,
            question_alternative_c: Question_Alternative_C,
            question_alternative_d: Question_Alternative_D,
        };
        if(new_question.question_text == '' || new_question.question_alternative_a == '' || new_question.question_alternative_b == '' || new_question.question_alternative_c == '' || new_question.question_alternative_d == '')
            {
                setQuestionWarning('Por favor preencha todas as informações')
            }
        else
            {
                setQuestionWarning('');
                set_new_quiz_questions(prev => [...prev, new_question]);
                clear_quiz_question();
            }         
    }



    function load_question(question:interface_quiz_question)
    {
        Set_Question_Text(question.question_text)  
        Set_Question_Alternative_A(question.question_alternative_a)
        Set_Question_Alternative_B(question.question_alternative_b)
        Set_Question_Alternative_C(question.question_alternative_c)
        Set_Question_Alternative_D(question.question_alternative_d)
    }

    function control_quiz_page(current_quizpage_status:number)
    {
        switch(current_quizpage_status)
        {
            case 0:
                return(<>
                   

                        <div style={{width:"100%", height:"6%",display:"flex", justifyContent:"center", marginBottom:"10%"}}>
                            <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Criar Novo Quiz"} onClick={() => set_current_quizpage_status(1)}/>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>


                            <div id="USER QUIZES HEAD" 
                            style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                            }>
                                <h1>Meus Quizes</h1>
                            </div>


                            <div id="USER QUIZES" 
                            style={{display:"flex", flexDirection: "row", gap: "5%", width:"80%", height: "50%", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"}
                            }>

                            </div>


                        </div>                   
                  
                    </>
                )

            case 1:
                switch(New_Quiz_Status)
                {   
                    case 0:
                      return (
                            QuizTopicsSubscreen({topics, set_current_quizpage_status, add_new_topic,new_quiz_topics, Message, set_Message, Set_New_Quiz_Status, remove_topic})
                        )
                    
                    case 1:
                      return (
                            QuizQuestionsSubScreen(
                                {QuestionWarning,setQuestionWarning, selectedQuestion,new_quiz_questions, set_current_quizpage_status, setSelectedQuestion, clear_quiz_question, load_question,add_new_question,Set_New_Quiz_Status,Question_Text,
                                Question_Alternative_A,Question_Alternative_B,Question_Alternative_C,Question_Alternative_D,Set_Question_Text,
                                Set_Question_Alternative_A,Set_Question_Alternative_B,Set_Question_Alternative_C,Set_Question_Alternative_D})
                        )

                    default:
                        return (
                        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>


                            <div id="USER QUIZES HEAD" 
                            style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                            }>
                                <h1>Escolha os tópicos do Quiz</h1>
                            </div>


                            <div id="USER QUIZES" style={{display:"flex", flexDirection: "row", gap: "5%", width:"80%", height: "50%", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"}}>
                                <h1>Isso nao deveria ter acontecido</h1>
                            </div>


                        </div>
                        )
                }
            case 2:
                return(
                <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>


                            <div id="USER QUIZES HEAD" 
                                style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                                }>
                                        <h1>Confirmar Quiz</h1>
                            </div>


                            <div id="USER QUIZES" 
                                style=
                                {{
                                    display:"flex", flexDirection: "column", gap: "5%", width:"80%", height: "900px", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"
                                }}>

                                <div id="Quiz Topics" style={{textAlign:"center"}}>
                                        <h1 style={{color:"#777777"}}>Topicos da Quiz</h1>
                                        <div className="question_screen_selection_grid" style={{display:"flex",marginTop: "40px", height:"100%", width: "100%", justifyContent:"center"}}>
                                            
                                            
                                            {(new_quiz_topics.length > 0) && new_quiz_topics.map(topic => 
                                                        {
                                                            const isSelected = selectedQuestion === topic;
                                                            return(
                                                                topic != '' &&
                                                                    <label key={topic} style={{ display: 'flex', flexDirection:"column", height: "20px" ,color:"black", backgroundColor: isSelected ? '#7AA9E4' : '#ffffff',}} >                                                          
                                                                    <input
                                                                        
                                                                    checked={isSelected}
                                                                    type="checkbox"
                                                                    value={topic}
                                                                    className="question_screen_selection_checkbox"
                                                                    onClick={
                                                                        () => 
                                                                                {
                                                                                    if(isSelected)
                                                                                        {
                                                                                        
                                                                                        setSelectedQuestion('');
                                                                                        clear_quiz_question();
                                                                                        }
                                                                                    else
                                                                                        {
                                                                                            setSelectedQuestion(topic); 
                                                                                        
                                                                                            console.log(isSelected);  
                                                                                        }
                                                                                    
                                                                                }}
                                                                    onChange={() => {}}/>

                                                                    <h3 style={{textAlign:"center"}}>{topic}</h3>
                                                                    </label> 
                                                                    )})}
                                        </div>
                                        
                                </div> 

                                <div id="Quiz Topics" style={{textAlign:"center"}}>
                                        <h1 style={{color:"#777777"}}>Questoes da Quiz</h1>
                                        <div className="question_screen_selection_grid" style={{display:"flex",marginTop: "40px", height:"100%", width: "100%", justifyContent:"center"}}>
                                                {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                                        
                                                {(new_quiz_questions.length > 0) && new_quiz_questions.map(topic => 
                                                    {
                                                        const isSelected = selectedQuestion === topic.question_text;
                                                        return(
                                                            topic.question_text != '' &&
                                                                <label key={topic.question_text} style={{ display: 'flex', flexDirection:"column", height: "20px" ,color:"black"}} >                                                          
                                                                <input
                                                                style={{backgroundColor: isSelected ? '#7AA9E4' : '#ffffff'}}   
                                                                checked={isSelected}
                                                                type="checkbox"
                                                                value={topic.question_text}
                                                                className="question_screen_selection_checkbox"
                                                                onClick={
                                                                    () => 
                                                                            {
                                                                                if(isSelected)
                                                                                    {
                                                                                    
                                                                                    setSelectedQuestion('');
                                                                                    clear_quiz_question();
                                                                                    }
                                                                                else
                                                                                    {
                                                                                        setSelectedQuestion(topic.question_text); 
                                                                                        load_question(topic);
                                                                                        console.log(isSelected);  
                                                                                    }
                                                                                
                                                                            }}
                                                                onChange={() => {}}/>

                                                                <h3 style={{textAlign:"center"}}>{topic.question_text}</h3>
                                                                </label> 
                                                                )})}
                                        </div>
                                </div>        


                            </div>
                            
                            <div style={{display:'flex', flexDirection: "column", width: "70%", height: "40%"}}>
                                <div style={{ width:"100%", height:"25%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10%", marginBottom: "10%"}}>
                                        <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Publicar Quiz"} onClick={() => Set_New_Quiz_Status(1)}/>
                                </div>
                                
                                <div style={{ width:"100%", height:"25%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_quizpage_status(1)}/>
                                </div>
                            </div>


                </div>

                )
              
        }
    }
    return (
        <div id="container">
            <Header Username={""}/>
            {control_quiz_page(current_quizpage_status)}

        </div>

    )
}