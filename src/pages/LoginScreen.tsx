
import "../index.css"
import App_Button from "../components/App_Button"
import logo from '../images/QuizMasterLogo.png';
import { useNavigate } from "react-router-dom";


export default function LoginScreen() {
    function Navigate(Page:string) {
        const navigate = useNavigate();  

        const handleLoginClick = () => {
            navigate(`/${Page}`); // Capital "H" if your route is "/Home"
        };
      
        return (
          <App_Button
            bgcolor="94D3A2"
            bghovercolor="89C095"
            bordercolor="7AAD85"
            borderhovercolor="7eb68a"
            message="Entrar!"
            onClick={handleLoginClick}
          />
        
        )};
  return (

    <>
      <div id="container">

        <div className="Header">
            <h1 style={{marginBottom: "2%"}}> Quiz Master !</h1>
           

        </div>


        {/*  Block for the login body contained by a div to organize the divs in blocks*/}
        <div style={{width: "100%", height:"100%", display:'flex', flexDirection: 'row', gap: "3%", justifyContent: 'center'}}>

            <div style={{display:'flex', flexDirection: 'column', width: "50%", marginLeft: "5%", gap:"3%"}}>

                <div className="login_image">
                    <img src={logo} style={{width: "100%" , height: "100%"}} />
                </div>

                <h1 style={{textAlign: 'center', color: "#333333", fontSize: "40px"}}>Frase Aleatória Teste</h1>

            </div>

            <div style={{display:'flex', flexDirection: 'column', width: "50%"}}>
                <div className="login_card_head">
                    <h1 style={{textAlign: 'center'}}> Realizar Login!</h1>
                </div>

                <div className="login_card_body">

                    <div style={{width: "100%", height: "5%", display: "flex", justifyContent: "center", marginTop: "10%",marginBottom:"10%", alignSelf: "center", justifyItems:"center"}}>
                        <input className="Text_Field" placeholder="Insira o seu nome"></input>
                    </div>

                    <div style={{width: "100%", height: "5%", display: "flex", justifyContent: "center", marginTop: "10%",marginBottom:"10%", alignSelf: "center", justifyItems:"center"}}>
                        <input className="Text_Field" placeholder="Insira a sua senha"></input>
                    </div>

                    <div style={{width: "100%", height: "8%", display: "flex", justifyContent: "center", marginTop: "10%",marginBottom:"10%", alignSelf: "center", justifyItems:"center",}}>
                        {Navigate("Home")}
                    </div>

                    <div style={{width: "50%", height: "5%", display: "flex", justifyContent: "center", marginTop: "10%",marginBottom:"10%", alignSelf: "center", justifyItems:"center",}}>
                        {Navigate("Cadastrar")} 
                    </div>
                    
                </div>

              </div>
        </div>
           

        
      </div>
    </>
  )
}


