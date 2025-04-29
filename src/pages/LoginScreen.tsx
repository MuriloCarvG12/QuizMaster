import { Link } from "react-router-dom"
import "../index.css"

export default function LoginScreen() {
  return (
    <>
      <div id="container">

        <div className="Header">
            

        </div>


        {/*  Block for the login body contained by a div to organize the divs in blocks*/}
        <div style={{width: "100%", height:"100%", display:'flex', flexDirection: 'row', gap: "3%", justifyContent: 'center'}}>

            <div style={{display:'flex', flexDirection: 'column', width: "50%", marginLeft: "5%", gap:"3%"}}>

                <div className="login_image">
                    <h1>Image</h1>
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

                    <div style={{width: "100%", height: "5%", display: "flex", justifyContent: "center", marginTop: "10%",marginBottom:"10%", alignSelf: "center", justifyItems:"center"}}>
                        <Link to={"http://localhost:5173/Home"} style={{width: "100%", display:"flex",justifyContent: "center", textDecoration:"None"}}><button className="App_Button" style={{width:"60%", height: "200%"}} > Entrar </button></Link>
                    </div>

                    <div style={{width: "100%", height: "5%", display: "flex", justifyContent: "center", marginTop: "10%",marginBottom:"10%", alignSelf: "center", justifyItems:"center",}}>
                      <button className="App_Button" style={{fontSize:"150%", backgroundColor: "#FFF3CD", borderColor:"#e4cf8b"}}> Não possui conta? Cadastre-se aqui!</button>
                    </div>

                </div>

              </div>
        </div>
           

        
      </div>
    </>
  )
}


