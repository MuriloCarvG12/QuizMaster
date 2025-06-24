import Header from "../components/Header_navigation";
import App_Button from "../components/App_Button";
import { useState } from "react";

import Page_Exam_SelectAditionals from "../components/Page_Exam_SelectAditionals";
import { Topics_screen_MainTopicSelection } from "../components/QuestionsSubScreenComponents/MainTopicSelection";
import { Topics_screen_QuestionSourceSelection } from "../components/QuestionsSubScreenComponents/QuestionSourceSelection";
import { Topics_screen_SubTopicSelection } from "../components/QuestionsSubScreenComponents/SubTopicSelection";
import CustomLengthExam from "../components/Page_ExamScreen_CustomLengthExam";

/***
 * 
 * TODO TRANSFORM CUSTOM LENGTH SUBSCRENE INTO ITS OWN COMPONENT SO WE ACN HAVE PROPER NAVIGATION
 */

export default function ExamScreen() {

    const [current_page_status, set_current_page_status] = useState(0)// controls the current state of page
    const [exam_length, set_exam_length] = useState(0)
    const [custom_length_switch, set_custom_length_switch] = useState(0)
    const [picked_question_source, set_picked_question_source] = useState("") // variable that stores the exam sources selected
    const[picked_question_topics, set_picked_question_topics] = useState([]) // variable that stores the topics selected
    const [current_topic_state, set_current_topic_state] = useState(0) // variable that controles the topic submenu shownd
    const [timer_on, set_timer_on] = useState(0) //variable that checks if the user wants to take the exam with a tiemr or not 1 - turned on and 0 - not turned on
    const [show_score_during_exam, set_show_score_during_exam] = useState(0)

    function Select_Length(NPerguntas:number)
    {
        set_exam_length(NPerguntas)
    }

    // this funciton lets our program know which status of the exam generation the user is in
  function RenderStatus(status: number) {
  switch (status) {
    case 0:
      return (
        <>
          <App_Button
            bgcolor={"fce0d9"}
            bordercolor={"f2bcb1"}
            borderhovercolor={"d1a097"}
            bghovercolor={"dec3bd"}
            onClick={() => {
              Select_Length(25);
              set_current_page_status(1);
            }}
            message={"Curto 25 perguntas"}
          />
          <App_Button
            bgcolor={"D4EDDA"}
            bordercolor={"ACCAB3"}
            borderhovercolor={"93ad99"}
            bghovercolor={"b3c7b8"}
            onClick={() => {
              Select_Length(45);
              set_current_page_status(1);
            }}
            message={"Médio 45 perguntas"}
          />
          <App_Button
            bgcolor={"D1ECF1"}
            bordercolor={"B7D8DE"}
            borderhovercolor={"a3c4c9"}
            bghovercolor={"b2d4db"}
            onClick={() => {
              Select_Length(90);
              set_current_page_status(1);
            }}
            message={"Longo 90 perguntas"}
          />
          <App_Button
            bgcolor={"FFF3CD"}
            bordercolor={"D5C799"}
            borderhovercolor={"c4b88d"}
            bghovercolor={"d6cba7"}
            onClick={() => {
              Select_Length(1);
              set_current_page_status(3);
            }}
            message={"Customizado"}
          />
        </>
      );

    case 1:
      switch (current_topic_state) {
        case 0:
          return (
            <div style={{ width: "100%", paddingTop: "5%" }}>
              <Topics_screen_MainTopicSelection
                set_picked_question_topics={set_picked_question_topics}
                set_current_page_status={set_current_page_status}
                set_current_component_status={set_current_topic_state}
                set_current_page_status_value={0}
                header_bg_color="B4FFFB"
                border_color="82D0D5"
              />
            </div>
          );
        case 1:
          return (
            <div style={{ width: "100%", paddingTop: "5%" }}>
              <Topics_screen_SubTopicSelection
                set_picked_question_topics={() => {}}
                set_current_component_status={set_current_topic_state}
                header_bg_color="B4FFFB"
                border_color="82D0D5"
                set_current_page_status_value={0}
              />
            </div>
          );
        case 2:
          return (
            <div style={{ width: "100%", paddingTop: "5%" }}>
              <Topics_screen_QuestionSourceSelection
                set_picked_question_topics={set_picked_question_source}
                set_current_component_status={set_current_topic_state}
                header_bg_color="B4FFFB"
                border_color="82D0D5"
                set_current_option={() => {
                  throw new Error("Function not implemented.");
                }}
                set_current_page_status={() => {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          );
        default:
          console.error("Invalid topic state: ", current_topic_state);
          return <p>Erro inesperado na seleção de tópicos.</p>;
      }

    case 2:
      return (
        <Page_Exam_SelectAditionals
          set_current_step={current_page_status}
          set_current_step_option={1}
          set_current_option_start={3}
          set_timer={set_timer_on}
          set_show_score_during_exam={set_show_score_during_exam}
          show_score_during_exam_value={show_score_during_exam}
        />
      );

    case 3:
      //TODO FIX THIS FUCKING MESS!!!!!
      return(
      <CustomLengthExam 
        custom_length_switch={custom_length_switch}
        set_custom_length_switch={set_custom_length_switch}
        set_current_page_status={set_current_page_status}
        set_picked_question_topics={set_picked_question_topics}
        set_current_topic_state={set_current_topic_state}
        current_topic_state={current_topic_state}
        set_picked_question_source={set_picked_question_source}
        Select_Length={set_exam_length} 
        set_current_component_status={set_current_topic_state} 
        set_current_option={() => {}}      /> )
    }}
 

    return (
    <>
    {/** Creating an exam will have 3 steps 
     *  The Length 
     * The topics 
     * and an options page - include specific questions from certain places or incldue timers!
     * 
     */}
    <div id="container">
        <Header Username={""}/>
        <div id="HOME-USER-OPTIONS-HEAD" 
            style={{width: "60%", height: "5%", backgroundColor: "#B4FFFB", marginLeft: "auto", marginRight: "auto", borderStyle:"solid", borderWidth:"5px", borderColor:"#82D0D5", paddingTop:40}}>

            <h1 style={{color:"#444444", textAlign: "center", alignContent: "center"}}> {current_topic_state == 0 ? "Selecione o Tamanho da Prova" : current_topic_state == 1 ? "Selecione os Topicos da Prova" : current_topic_state == 2 ? "Selecione Adicionais da Prova"  : current_topic_state == 3 ? "Escolha o numero de Perguntas da prova" : "Isso nao deveria ter ocorrido"}</h1>
        </div>
       
        <div id="HOME-USER-OPTIONS" className="User-Options" style={{width:"60%",height:"65%", borderStyle:"solid", borderWidth:"5px", borderColor:"#82D0D5", borderTop: "0px", justifyContent: "space-between", flexDirection:"column" }}>
            
            {
                RenderStatus(current_page_status)    
            } 
                
            
           
        </div>

    </div>
    </>
    )
  }

