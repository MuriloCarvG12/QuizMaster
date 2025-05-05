
import Card_button from "../components/Card_Button";
import Header from "../components/Header_navigation";

export default function QuestionScreen() {
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
    
    
                    <div id="HOME-CARDS" 
                        style={{width: "80%", height: "80%", display: "flex", flexDirection: "row", justifyContent: "center", gap: "12.5%", paddingTop: "5%", paddingBottom: "2%", backgroundColor:"#FFFFFF"}
                    }>
                        
                                    <Card_button width={20}  height={100} link="/QuizScreen"  bgcolor="9FF9FF"  text="Tópico"/>
                                    <Card_button width={20}  height={100} link="/ExamScreen"  bgcolor="A8E6CF"  text="Perguntas Salvas"/>
                                    <Card_button width={20}  height={100} link="/QuestionScreen"  bgcolor="A6BED0"  text="Perguntas da Comunidade"/>
                    
                    </div>
    
    
                </div>               
            </div>
    </>

)
}