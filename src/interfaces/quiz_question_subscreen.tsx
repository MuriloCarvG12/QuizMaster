import interface_quiz_question from "./quiz_question";

export default interface quiz_topics_subscreen
{

    QuestionWarning: string;
    selectedQuestion: string;   
    new_quiz_questions: interface_quiz_question[];
    setSelectedQuestion: React.Dispatch<React.SetStateAction<string>>;
    clear_quiz_question: () => void;
    load_question(question: interface_quiz_question): void;
    add_new_question(): void;
    Set_New_Quiz_Status: React.Dispatch<React.SetStateAction<number>>;
    Question_Text: string;
    Question_Alternative_A: string;
    Question_Alternative_B: string;
    Question_Alternative_C: string;
    Question_Alternative_D: string;
    Set_Question_Text: React.Dispatch<React.SetStateAction<string>>;
    Set_Question_Alternative_A: React.Dispatch<React.SetStateAction<string>>;
    Set_Question_Alternative_B: React.Dispatch<React.SetStateAction<string>>;
    Set_Question_Alternative_C: React.Dispatch<React.SetStateAction<string>>;
    Set_Question_Alternative_D: React.Dispatch<React.SetStateAction<string>>;    
                                
}