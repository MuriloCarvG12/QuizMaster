import { Link } from "react-router-dom"
import Header from "../components/Header"


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

            <div id="HOME-USER-OPTIONS" className="User-Options">               
                  <Link to={`http://localhost:5173/UserScreen`} style={{width: "100%", display:"flex",justifyContent: "center", textDecoration:"none"}}><button>Click me</button></Link>               
           </div>

        </div>
      </>
    )
  }
  
  
  