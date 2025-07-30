export default interface quiz_topics_subscreen
{
    topics: string[];
    Set_New_Quiz_Status: React.Dispatch<React.SetStateAction<number>>;
    set_current_quizpage_status: React.Dispatch<React.SetStateAction<number>>;
}