
import Card_button from "../components/Card_Button";
import Quiz_master_footer from "../components/Footer";
import Header from "../components/Header_navigation";


export default function QuestionScreen() {
    return (
    <>
    
            <div id="container">
                <Header Username={""}/>
    
    
                        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
            
            
                            <div id="USER Questions HEAD" 
                            style={{width:"80%", height: "9%", backgroundColor:"#FFF3CD", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#FFE5B4"}
                            }>
                                <h1>Minhas Perguntas</h1>
                            </div>
            
            
                            <div id="HOME-Questions" 
                                style={{width: "80%", height: "80%", display: "flex", flexDirection: "row", justifyContent: "center", gap: "12.5%", paddingTop: "5%", paddingBottom: "2%", backgroundColor:"#FFFFFF"}
                            }>
                                
                                            <Card_button width={20}  height={100} link="/QuizScreen"  bgcolor="9FF9FF"  text="Tópico"/>
                                            <Card_button width={20}  height={100} link="/ExamScreen"  bgcolor="A8E6CF"  text="Perguntas Salvas"/>
                                            <Card_button width={20}  height={100} link="/QuestionScreen"  bgcolor="A6BED0"  text="Perguntas da Comunidade"/>
                            
                            </div>
            
                            
                        </div>     
                
                <Quiz_master_footer/>    
                
                    
            </div>
    </>

)
}