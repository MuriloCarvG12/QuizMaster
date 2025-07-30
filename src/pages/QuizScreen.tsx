import App_Button from "../components/App_Button"
import Header from "../components/Header_navigation"
import { useState } from "react";
import interface_quiz_question from "../interfaces/quiz_question";
import QuizTopicsSubscreen from "../components/PageQuiz/QuizTopicsSubscreen";
import QuizQuestionsSubScreen from "../components/PageQuiz/QuizQuestionsSubScreen";

export default function QuizScreen() {
    const [current_quizpage_status, set_current_quizpage_status] = useState(0)
    const [New_Quiz_Status, Set_New_Quiz_Status] = useState(0)
    const [new_quiz_topics, set_new_quiz_topics] = useState([])
    const [new_quiz_questions, set_new_quiz_questions] = useState<interface_quiz_question[]>([])
    const [quizQuestion, setQuizQuestion] = useState<interface_quiz_question>({question_text: '', question_alternative_a: '', question_alternative_b: '', question_alternative_c: '', question_alternative_d: ''});
    const topics = ["Matemática", "História", "Biologia"];
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const [QuestionWarning, setQuestionWarning] = useState("")
    const [Question_Text, Set_Question_Text] = useState("");
    const [Question_Alternative_A, Set_Question_Alternative_A] = useState("");
    const [Question_Alternative_B, Set_Question_Alternative_B] = useState("");
    const [Question_Alternative_C, Set_Question_Alternative_C] = useState("");
    const [Question_Alternative_D, Set_Question_Alternative_D] = useState("");
    
   
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
                            QuizTopicsSubscreen({topics, Set_New_Quiz_Status, set_current_quizpage_status})
                        )
                    
                    case 1:
                      return (
                            QuizQuestionsSubScreen(
                                {QuestionWarning, selectedQuestion,new_quiz_questions, setSelectedQuestion, clear_quiz_question, load_question,add_new_question,Set_New_Quiz_Status,Question_Text,
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
              
        }
    }
    return (
        <div id="container">
            <Header Username={""}/>
            {control_quiz_page(current_quizpage_status)}

        </div>

    )
}