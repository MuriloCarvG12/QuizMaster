export default interface quiz_topics_subscreen
{
    Message :string
    topics: string[];
    Set_New_Quiz_Status: React.Dispatch<React.SetStateAction<number>>;
    set_current_quizpage_status: React.Dispatch<React.SetStateAction<number>>;
    new_quiz_topics: string[];
    add_new_topic(current_topic: string): void;
    set_Message: React.Dispatch<React.SetStateAction<string>>
    remove_topic: (current_topic: string) => void
}