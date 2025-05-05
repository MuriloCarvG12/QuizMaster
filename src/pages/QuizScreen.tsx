import App_Button from "../components/App_Button"
import Header from "../components/Header_navigation"


export default function QuizScreen() {
    return (
    <>
    
        <div id="container">
            <Header Username={""}/>

            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>


                <div id="USER QUIZES HEAD" 
                style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                }>
                    <h1>Meus Quizes</h1>
                </div>


                <div id="USER QUIZES" 
                style={{display:"flex", flexDirection: "row", gap: "5%", width:"80%", height: "50%", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2"}
                }>

                </div>


            </div>

            <div style={{width:"100%", height:"6%",display:"flex", justifyContent:"center"}}>
                <App_Button bgcolor={"A8E6CF"} bordercolor={"99D2BD"} link={""} borderhovercolor={"7EAF9D"} bghovercolor={"99D2BD"} message={"CRIAR NOVO QUIZ"}/>
            </div>
            
            

            
        </div>
    </>

)
}