import Header from "../components/Header";

export default function QuizScreen() {
    return (
    <>
    
        <div id="container">
            <Header Username={""} User_Completed_Quizes={0} User_Completed_Questions={0} User_Completed_Exams={0} User_Favorite_Topic={0}/>

            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center"}}>
                <div id="USER QUIZES HEAD" style={{width:"80%", height: "10%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666"}}><h1>Meus Quizes</h1></div>
                <div id="USER QUIZES" style={{display:"flex", flexDirection: "row", gap: "5%", width:"80%", height: "50%", backgroundColor:"#FDFDFD"}}></div>
            </div>
            

            
        </div>
    </>

)
}