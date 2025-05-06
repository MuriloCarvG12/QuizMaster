import Header from "../components/Header_navigation";
import App_Button from "../components/App_Button";


export default function ExamScreen() {
    function teste(Frase:string)
    {
        console.log(`${Frase}`)
    }

    return (
    
    <>
    {/** Creating an exam will have 3 steps 
     *  The Length 
     * The topics 
     * and an options page - include specific questions from certain places or incldue timers!
     * 
     */}
    <div id="container">
        <Header Username={""}/>
        <div id="HOME-USER-OPTIONS-HEAD" 
            style={{width: "60%", height: "5%", backgroundColor: "#B4FFFB", marginLeft: "auto", marginRight: "auto", borderStyle:"solid", borderWidth:"5px", borderColor:"#82D0D5"}}>

            <h1 style={{color:"#333333", textAlign: "center", alignContent: "center"}}> Area do Usuario</h1>
        </div>

        <div id="HOME-USER-OPTIONS" className="User-Options" style={{width:"60%",height:"65%", borderStyle:"solid", borderWidth:"5px", borderColor:"#82D0D5", borderTop: "0px", justifyContent: "space-between", flexDirection:"column" }}>
            <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => teste("curto")} message={"Curto"}/>
            <App_Button bgcolor={"D4EDDA"} bordercolor={"ACCAB3"}  borderhovercolor={""} bghovercolor={"b3c7b8"} onClick={() => teste("medio")} message={"Médio"}/>
            <App_Button bgcolor={"D1ECF1"} bordercolor={"B7D8DE"}  borderhovercolor={""} bghovercolor={"b0cacf"} onClick={() => teste("Longo")} message={"Longo"}/>
            <App_Button bgcolor={"FFF3CD"} bordercolor={"D5C799"}  borderhovercolor={""} bghovercolor={"ccc2a3"} onClick={() => teste("Custom")} message={"Customizado"}/>
                                    
        </div>

    </div>
    </>

)
}