import { useState } from "react"
import Header from "../components/Header_navigation"
import App_Button from "../components/App_Button"



export default function UserScreen() {
    const [edit_profile, set_edit_profile] = useState(0)
    const [see_history, set_see_history] = useState(0)
    const [see_details, set_see_details] = useState(0)

    function edit_controller(status:number)
    {
        switch(status)
        {
            case 0:
                {
                    return (<>
                        <div style={{width:"100%", height:"20%", display:"flex", justifyContent:"center"}}>
                            <App_Button bgcolor={""} bordercolor={""} borderhovercolor={""} bghovercolor={""} onClick={() => set_edit_profile(edit_profile + 1)} message={""}/>
                        </div>
                    </>)
                    
                }
            case 1:
                {
                return <>
                <div style={{display:'flex', flexDirection:"column", width: "100%", height:"100%"}}>
                    <div id="HOME-USER-OPTIONS-HEAD" 
                        style={{width: "100%", height: "10%", backgroundColor: "#D3EAF2", marginLeft: "auto", marginRight: "auto", borderStyle:"solid", borderWidth:"5px", borderColor:"#b7dbe8"}}>
                        <h1>Editar Perfil</h1>
                    </div>
                    <div className="User-Options" style={{width: "100%", height:"100%"}}>
                    </div>
                </div>
                </>
                }
        }
    }

    function history_controller(status:number)
    {
        switch(status)
        {
            case 0:
                {
                    return (<>
                        <div style={{width:"100%", height:"20%", display:"flex", justifyContent:"center"}}>
                            <App_Button bgcolor={""} bordercolor={""} borderhovercolor={""} bghovercolor={""} onClick={() => set_see_history(see_history + 1)} message={""}/>
                        </div>
                    </>)
                    
                }
            case 1:
                {
                return <>

                     <div id="HOME-USER-OPTIONS-HEAD" 
                    style={{width: "100%", height: "19%", backgroundColor: "#E3D4F3 ", marginLeft: "auto", marginRight: "auto", borderStyle:"solid", borderWidth:"5px", borderColor:"#cbb3e6"}}>
                    <h1>Ver Histórico</h1>
                    </div>
                    <div className="User-Options" style={{width: "100%", height:"100%"}}>
                    </div>
                </>
            }
        }
    }

    function detail_controller(status:number)
    {
        switch(status)
        {
            case 0:
                {
                    return (<>
                        <div style={{width:"100%", height:"20%", display:"flex", justifyContent:"center"}}>
                            <App_Button bgcolor={""} bordercolor={""} borderhovercolor={""} bghovercolor={""} onClick={() => set_see_details(see_details + 1)} message={""}/>
                        </div>
                    </>)
                    
                }
            case 1:
                {
                return <>
                    <div id="HOME-USER-OPTIONS-HEAD" 
                    style={{width: "100%", height: "10%", backgroundColor: "#B4FFFB", marginLeft: "auto", marginRight: "auto", borderStyle:"solid", borderWidth:"5px", borderColor:"#82D0D5"}}>
                    <h1>Detalhes do Usuário</h1>
                    </div>
                    <div className="User-Options" style={{width: "100%", height:"100%"}}>
                    </div>
                </>
                }
        }
    }

    return (
    <>
    <div id="container">
        <Header Username={""} />

        <div style={{width: "100%", height: "80%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{width:"50%", height: "50%", marginBottom:"2%"}}>
                    {edit_controller(edit_profile)}
                </div>

                <div style={{width:"50%", height: "50%", marginBottom:"2%"}}>
                    {history_controller(see_history)}
                </div>

                <div style={{width:"50%", height: "50%", marginBottom:"2%"}}>
                    {detail_controller(see_details)}
                </div>     

        </div>
    </div>
    </>

)
}