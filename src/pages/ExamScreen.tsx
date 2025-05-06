import Header from "../components/Header_navigation";
import App_Button from "../components/App_Button";
import { useState } from "react";


export default function ExamScreen() {

    const [current_step, set_current_step] = useState(0)
    const [length, set_length] = useState(0)
    

    function Select_Length(NPerguntas:number)
    {
        set_length(NPerguntas)
        set_current_step(current_step + 1)
        console.log(length)
    }

    // this funciton lets our program know which status of the exam generation the user is in
    function RenderStatus(status: number) {
        switch (status) {
          case 0:
            return <>
                <App_Button bgcolor={"fce0d9"} bordercolor={"f2bcb1"}  borderhovercolor={"d1a097"} bghovercolor={"dec3bd"} onClick={() => Select_Length(25)} message={"Curto 25 perguntas"}/>
                <App_Button bgcolor={"D4EDDA"} bordercolor={"ACCAB3"}  borderhovercolor={"93ad99"} bghovercolor={"b3c7b8"} onClick={() => Select_Length(45)} message={"Médio 45 perguntas"}/>
                <App_Button bgcolor={"D1ECF1"} bordercolor={"B7D8DE"}  borderhovercolor={"a3c4c9"} bghovercolor={"b2d4db"} onClick={() => Select_Length(90)} message={"Longo 90 perguntas"}/>
                <App_Button bgcolor={"FFF3CD"} bordercolor={"D5C799"}  borderhovercolor={"c4b88d"} bghovercolor={"d6cba7"} onClick={() => Select_Length(1)} message={"Customizado"}/>;
            </>
          case 1:
            return <>
                <h1>Topicos</h1>
            </>;
          case 2:
            return <p>Success!</p>;
          default:
            return <p>Unknown status</p>;
        }
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

            <h1 style={{color:"#333333", textAlign: "center", alignContent: "center"}}> {current_step == 0 ? "Selecione o Tamanho da Prova" : current_step == 1 ? "Selecione os Topicos da Prova" : current_step == 2 ? "Selecione Adicionais da Prova" : "Isso nao deveria ter ocorrido"}</h1>
        </div>
       
        <div id="HOME-USER-OPTIONS" className="User-Options" style={{width:"60%",height:"65%", borderStyle:"solid", borderWidth:"5px", borderColor:"#82D0D5", borderTop: "0px", justifyContent: "space-between", flexDirection:"column" }}>
            {
                RenderStatus(current_step)     
            }
           
        </div>

    </div>
    </>

)
}