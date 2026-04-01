import { memo, useEffect, useState } from "react";
import RenderQuestions from "./questionDisplay";
import App_Button from "./App_Button";

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
function RenderExamQuestions({ questions, set_current_page_status, set_answers, questionImages   }: { questions  : question[], set_current_page_status: React.Dispatch<React.SetStateAction<number>>, set_answers: React.Dispatch<React.SetStateAction<question_answers[]>> , questionImages: imageInfo[]}) {
  const [current_question, set_current_question] = useState(0);
  const [question_answers, set_question_answers] = useState<question_answers[]>([]);

  useEffect(() => { set_answers(question_answers) }, [question_answers])

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", gap: "20px" }}>

  <div className="arrow-chevron-left">
    <button style={{ width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
      onClick={() => { if (current_question > 0) set_current_question(current_question - 1); }}
    />
  </div>

  <div style={{ width: "80%", height: "auto", alignContent: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
    <div style={{ textAlign: "center", color: "#222222", marginBottom: "15%" }}>
      <h2>Pergunta {current_question + 1}/{questions.length}</h2>
    </div>
    <div style={{ width: "100%", height: "90%", alignSelf: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <RenderQuestions question={questions[current_question]} set_question_answers={set_question_answers} current_question_index={current_question}  question_answers={question_answers} questionImages={questionImages.flat()} />
    </div>

    {current_question + 1 === questions.length && (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "24px", marginBottom: "10%", width: "100%", height: "5%" }}>
        <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Finalizar Simulado"} onClick={() => set_current_page_status(5)} />
      </div>
    )}
  </div>

  <div className="arrow-chevron-right">
    <button style={{ width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
      onClick={() => { if (current_question < questions.length - 1) set_current_question(current_question + 1); }}
    />
  </div>
</div>
          

    
  );
};

export default RenderExamQuestions;

