interface header_info
{
    Username :string
    User_Completed_Questions :number
    User_Completed_Exams :number
}


export default function Header({Username, User_Completed_Questions ,User_Completed_Exams} :header_info)
{
    return(
        <>
            <div className="Header">
                <h1 style={{marginBottom: "1%"}}> Quiz Master !</h1>
                <h2 style={{marginBottom: "1%"}}> Bem Vindo {Username}</h2>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: "10%" }}>

                            <div style={{display: "flex", flexDirection:"column"}}>
                                <h2>Perguntas Respondidas </h2>
                                <h2>{User_Completed_Questions}</h2>
                            </div>

                            <div style={{display: "flex", flexDirection:"column"}}>
                                <h2>Simulados Completados</h2>
                                <h2>{User_Completed_Exams}</h2>
                            </div>

                        </div>
                
              

            </div>
        </>
    )
}