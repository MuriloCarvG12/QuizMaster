import { Link } from "react-router-dom"

interface header_info
{
    Username :string
    
}


export default function Header({Username} :header_info)
{
    return(
        <>
            <div className="Header">
                <h1 style={{marginBottom: "1%"}}> Quiz Master !</h1>
                <h2 style={{marginBottom: "1%"}}> Bem Vindo {Username}</h2>
               
                    
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: "10%"}}>
                                <Link To="http://localhost:5173/Home"><h1>Home</h1></Link>
                                <Link To="http://localhost:5173/QuizScreen"><h1>Quizes</h1></Link>
                                <Link To="http://localhost:5173/QuestionScreen"><h1>Perguntas</h1></Link>
                                <Link To="http://localhost:5173/ExamScreen"><h1>Simulados</h1></Link>
                                <Link To="http://localhost:5173/UserScreen"><h1>Usuário</h1></Link>
                                
                        </div>
                    

                   
              

            </div>
        </>
    )
}