
import Header from "../components/Header"
import Card_button from "../components/Card_Button"

export default function HomeScreen() {
    return (
      <>
        <div id="container">
            <Header Username={""} User_Completed_Quizes={0} User_Completed_Questions={0} User_Completed_Exams={0} User_Favorite_Topic={0}  />

            <div id="HOME-CARDS" style={{width: "100%", height: "35%", display: "flex", flexDirection: "row", justifyContent: "center", gap: "12.5%", marginBottom: "10%"}}>
                <Card_button width={20}  height={100} link="/QuizScreen"  bgcolor="FDE4CF"  text="Quizes"  />
                <Card_button width={20}  height={100} link="/ExamScreen"  bgcolor="B4FFFB"  text="Simulados"  />
                <Card_button width={20}  height={100} link="/QuestionScreen"  bgcolor="D9F2E6"  text="Perguntas"  />

            </div>


          <div id="HOME-USER-OPTIONS-HEAD" style={{width: "50%", height: "5%", backgroundColor: "#FFF3CD", marginLeft: "auto", marginRight: "auto"}}>
              <h1 style={{color:"#333333", textAlign: "center", alignContent: "center"}}> Area do Usuario</h1>
          </div>
          <div id="HOME-USER-OPTIONS" className="User-Options">
                  <Card_button width={25}  height={80} link="/UserScreen"  bgcolor="FFF3CD"  text="Settings"  />
                            
          </div>

        </div>
      </>
    )
  }
  
  
  