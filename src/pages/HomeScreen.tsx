import quizImage from '../images/QuizCardImage.png';
import questoesImage from '../images/QuestoesCardImage.png';
import examImage from '../images/ExameCardImage.png';
import userImage from '../images/UserCardImage.png';
import Header from "../components/Header"
import Card_button from "../components/Card_Button"
import { useLocation } from "react-router-dom";
import UserInfo from '../interfaces/user_info';


export default function HomeScreen() {
    const location = useLocation();
    const { userInfo } = location.state as { userInfo: UserInfo } || {};

    return (


      <>
        <div id="container">
            <Header Username={userInfo.Name}  User_Completed_Questions={userInfo.QuestionsCompleted} User_Completed_Exams={userInfo.ExamsCompleted}  />

            <div id="HOME-CARDS" style={{
              width: "100%",
              height: "35%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "9%",
              alignItems: "center", 
              marginTop: "10%"
            }}>

                <Card_button width={20} height={100} userId={userInfo.Id} link="/ExamScreen" bgcolor="B4FFFB"  text="Simulados" img_source={examImage}  />
                <Card_button width={20} height={100} userId={userInfo.Id} link="/QuestionScreen" bgcolor="D9F2E6" text="Perguntas" img_source={questoesImage}  />
                <Card_button width={20} height={100} userId={userInfo.Id} link="/UserScreen" bgcolor="FFF3CD" text="Usuário" img_source={userImage}  />

            </div>
        </div>
      </>
    )
  }
  
  
  