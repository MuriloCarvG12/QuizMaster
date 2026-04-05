import quizImage from '../images/QuizCardImage.png';
import questoesImage from '../images/QuestoesCardImage.png';
import examImage from '../images/ExameCardImage.png';
import userImage from '../images/UserCardImage.png';
import Header from "../components/Header"
import Card_button from "../components/Card_Button"


export default function HomeScreen() {
    return (
      <>
        <div id="container">
            <Header Username={""}  User_Completed_Questions={0} User_Completed_Exams={0}  />

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

                <Card_button width={20} height={100} link="/ExamScreen" bgcolor="B4FFFB" text="Simulados" img_source={examImage}  />
                <Card_button width={20} height={100} link="/QuestionScreen" bgcolor="D9F2E6" text="Perguntas" img_source={questoesImage}  />
                <Card_button width={20} height={100} link="/UserScreen" bgcolor="FFF3CD" text="Usuário" img_source={userImage}  />

            </div>
        </div>
      </>
    )
  }
  
  
  