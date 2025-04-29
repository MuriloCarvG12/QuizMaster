import "../index.css"

export default function LoginScreen() {
  return (
    <>
      <div id="container">

        <div className="Header">


        </div>


        {/*  Block for the login body contained by a div to organize the divs in blocks*/}
        <div style={{width: "100%", height:"100%", display:'flex', flexDirection: 'row', gap: "3%", justifyContent: 'center'}}>

            <div style={{display:'flex', flexDirection: 'column', width: "50%", marginLeft: "5%"}}>

                <div className="login_image">
                    <h1>Image</h1>
                </div>
                <h1 style={{textAlign: 'center'}}>Frase Aleatoria Teste</h1>

            </div>

            <div style={{display:'flex', flexDirection: 'column', width: "50%"}}>
                <div className="login_card_head">

                </div>

                <div className="login_card_body">
                    
                </div>

              </div>
        </div>
           

        
      </div>
    </>
  )
}


