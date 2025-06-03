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
            <Header Username={""} User_Completed_Quizes={0} User_Completed_Questions={0} User_Completed_Exams={0} User_Favorite_Topic={0}  />

            <div id="HOME-CARDS" style={{width: "100%", height: "35%", display: "flex", flexDirection: "row", justifyContent: "center", gap: "12.5%", marginBottom: "10%"}}>
                <Card_button width={20} height={100} link="/QuizScreen" bgcolor="FDE4CF" text="Quizes" img_source={quizImage}  />
                <Card_button width={20} height={100} link="/ExamScreen" bgcolor="B4FFFB" text="Simulados" img_source={examImage}  />
                <Card_button width={20} height={100} link="/QuestionScreen" bgcolor="D9F2E6" text="Perguntas" img_source={questoesImage}  />

            </div>


          <div id="HOME-USER-OPTIONS-HEAD" style={{width: "50%", height: "5%", backgroundColor: "#FFF3CD", marginLeft: "auto", marginRight: "auto"}}>
              <h1 style={{color:"#333333", textAlign: "center", alignContent: "center"}}> Area do Usuario</h1>
          </div>
          <div id="HOME-USER-OPTIONS" className="User-Options" style={{height:"30%"}}>
                  <Card_button width={25} height={70} link="/UserScreen" bgcolor="FFF3CD" text="Settings" img_source={userImage}  />
                            
          </div>

        </div>
      </>
    )
  }
  
  
  