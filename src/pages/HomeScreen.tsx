
import Header from "../components/Header"
import Card_button from "../components/Card_Button"

export default function HomeScreen() {
    return (
      <>
        <div id="container">
            <Header header_mode={0} />

            <div id="HOME-CARDS" style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: "12.5%", marginBottom: "10%"}}>
                <div className="Home_Card">

                </div>

                <div className="Home_Card">

                </div>

                <div className="Home_Card">

                </div>

            </div>


          <div id="HOME-USER-OPTIONS-HEAD" style={{width: "50%", height: "5%", backgroundColor: "#FFF3CD", marginLeft: "auto", marginRight: "auto"}}>
              <h1 style={{color:"#333333", textAlign: "center", alignContent: "center"}}> Area do Usuario</h1>
          </div>
          <div id="HOME-USER-OPTIONS" className="User-Options">
                  <Card_button width={25}  height={60} link="/UserScreen"  bgcolor="FFF3CD"  text="Test"  />
                            
          </div>

        </div>
      </>
    )
  }
  
  
  