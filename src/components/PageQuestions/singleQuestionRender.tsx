import { useState } from "react";
import questionInterface from "../../interfaces/question_exam";
import ExamAlternativeSelectButton from "../questionAlternativeSelectButton";
import App_Button from "../App_Button";

interface question {
    Id: number;
    QuestionId: string;
    QuestionText: string;
    QuestionPrompt: string;
    QuestionAltA: string;
    QuestionAltB: string;
    QuestionAltC: string;
    QuestionAltD: string;
    QuestionAltE: string;
    CorrectAlternative: string;
    SubjectId: number;
    TopicId: number;
    SubTopicId: number;
}

interface question_answers 
{
  ExamQuestionNumber : Number;
  AlternativeAssigned :String
}

interface imageInfo
{
  QuestionId: number;
  ImageUrl: String
}


export default function RenderSingleQuestion({ question, set_page_status, setPickedQuestionAlternative, userId} : { question: question, set_page_status: React.Dispatch<React.SetStateAction<number>>, setPickedQuestionAlternative: React.Dispatch<React.SetStateAction<string>>, userId: number}) { 
  const [question_answers, set_question_answers] = useState<question_answers[]>([]);

  async function HandleFinishQuestion( { set_page_status, userId, setPickedQuestionAlternative , alternativeValue} :{set_page_status: React.Dispatch<React.SetStateAction<number>>, userId:number, setPickedQuestionAlternative: React.Dispatch<React.SetStateAction<string>>, alternativeValue : String})
  {
    const response = await fetch("http://localhost:3000/User/UpdateUserQuestionsCompleted/" + userId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
        set_page_status(3);
        setPickedQuestionAlternative(alternativeValue as string)
    } else {
        console.error("Request failed with status:", response.status);
    }
  }

  return (
    <>
    <div style={{width:"100%", height:"auto", textAlign: "center", display: "flex", flexDirection: "column", color: "black" }}>
        <h3 style={{marginBottom: "25px"}}>{question.QuestionText}</h3>
        

        <p>{question.QuestionPrompt}</p>
        <div style={{ width: "80%", height: "90%", display: "flex", flexDirection: "column", alignItems: "center",  margin: "0 auto", gap: "10px"}}>
            <ExamAlternativeSelectButton message={question.QuestionAltA}  set_question_answers={set_question_answers} current_question_index={0} question_answers={question_answers} alternativeValue={'A'}/>
            <ExamAlternativeSelectButton message={question.QuestionAltB}  set_question_answers={set_question_answers} current_question_index={0} question_answers={question_answers} alternativeValue={'B'}/>
            <ExamAlternativeSelectButton message={question.QuestionAltC}  set_question_answers={set_question_answers} current_question_index={0} question_answers={question_answers} alternativeValue={'C'}/>
            <ExamAlternativeSelectButton message={question.QuestionAltD}  set_question_answers={set_question_answers} current_question_index={0} question_answers={question_answers} alternativeValue={'D'}/>
            {question.QuestionAltE !== "" && <ExamAlternativeSelectButton message={question.QuestionAltE}  set_question_answers={set_question_answers} current_question_index={0} question_answers={question_answers} alternativeValue={'E'}/>}
        </div>
      
    </div>
       <div style={{width:"35%", height: "40%", display: "flex", flexDirection:"column", alignItems: "center", margin: "0 auto"}}>
            <App_Button 
            bgcolor={"FFFFFF"}
            bordercolor={"E8E8FF"}
            borderhovercolor={"6677DD"}
            bghovercolor={"EEF2FF"}
            message={"Responder"} 
            onClick={() => HandleFinishQuestion({
              set_page_status,
              userId,
              setPickedQuestionAlternative,
              alternativeValue: String(question_answers[0].AlternativeAssigned)
            })}
            />

            <App_Button 
            bgcolor={"FFFFFF"} 
            bordercolor={"E0E0E0"} 
            borderhovercolor={"999999"} 
            bghovercolor={"F5F5F5"} 
            message={"Voltar"} 
            onClick={() => set_page_status(1)}
            />

        </div>
 
    </>
  );
}