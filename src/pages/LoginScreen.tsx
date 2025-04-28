import "../index.css"

export default function LoginScreen() {
  return (
    <>
      <div id="container">

        <div className="Header">


        </div>


        {/*  Block for the login body contained by a div to organize the divs in blocks*/}
        <div style={{width: "100%", height:"100%", display:'flex', flexDirection: 'row', gap: "3%"}}>
            <div className="login_image">
              <h1>Image</h1>
            </div>

            <div className="login_card">
                <h1>Test</h1>
            </div>
        </div>

        
      </div>
    </>
  )
}


