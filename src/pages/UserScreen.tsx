import Header from "../components/Header"




export default function UserScreen() {
    return (
    <>
     <div id="container">
        <Header Username={""} User_Completed_Quizes={0} User_Completed_Questions={0} User_Completed_Exams={0} User_Favorite_Topic={0}/>


        <div id="HOME-USER-OPTIONS-HEAD" 
            style={{width: "60%", height: "5%", backgroundColor: "#B4FFFB", marginLeft: "auto", marginRight: "auto", borderStyle:"solid", borderWidth:"5px", borderColor:"#82D0D5"}}>
            <h1>Edit profile (name, avatar, theme)</h1>
        </div>
        <div className="User-Options">
        </div>

        <div id="HOME-USER-OPTIONS-HEAD" 
            style={{width: "60%", height: "5%", backgroundColor: "#B4FFFB", marginLeft: "auto", marginRight: "auto", borderStyle:"solid", borderWidth:"5px", borderColor:"#82D0D5"}}>
            <h1>Ver Histórico</h1>
        </div>
        <div className="User-Options">
        </div>

        <div id="HOME-USER-OPTIONS-HEAD" 
            style={{width: "60%", height: "5%", backgroundColor: "#B4FFFB", marginLeft: "auto", marginRight: "auto", borderStyle:"solid", borderWidth:"5px", borderColor:"#82D0D5"}}>
            <h1>Detalhes do Usuário</h1>
        </div>
        <div className="User-Options">
        </div>


     </div>
    </>

)
}