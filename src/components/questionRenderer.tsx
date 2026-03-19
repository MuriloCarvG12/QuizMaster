import { memo, useEffect, useState } from "react";
import RenderQuestions from "./questionDisplay";

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

const RenderExamQuestions = memo(function RenderExamQuestions({ questions   }: { questions  : question[] }) {
  const [current_question, set_current_question] = useState(0);
  const [question_answers, set_question_answers] = useState<question_answers[]>([]);

  return (
    <div style={{ width: "100%", height: "auto", minHeight: "60%", display: "flex", flexDirection: "row", justifyContent:"center", alignContent:"center", gap: "10px" }}>
      <div className="arrow-chevron-left">
        <button
          style={{ width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
          onClick={() => { if (current_question > 0) set_current_question(current_question - 1); }}
        />
      </div>

      <div style={{ width: "80%", height: "auto", alignContent: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
        <div style={{ textAlign: "center", color: "#222222", marginBottom: "15%" }}>
          <h2>Pergunta {current_question + 1}/{questions.length}</h2>
        </div>
        <div style={{ width: "100%", height: "90%", alignSelf: "center", display: "flex", flexDirection: "column", alignItems: "center"  }}>
          <RenderQuestions question={questions[current_question]} current_question_index={current_question}/>
        </div>
      </div>

      <div className="arrow-chevron-right">
        <button
          style={{ width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
          onClick={() => { if (current_question < questions  .length - 1) set_current_question(current_question + 1); }}
        />
      </div>
    </div>
  );
});

export default RenderExamQuestions;

