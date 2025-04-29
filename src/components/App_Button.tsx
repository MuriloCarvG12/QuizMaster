import { useState } from "react";
import { Link } from "react-router-dom"

interface app_button
{
    bgcolor: string
    bordercolor : string
    link :string
    borderhovercolor: string
    bghovercolor: string
    message :string
}


export default function App_Button({bgcolor,bghovercolor, bordercolor, borderhovercolor, link, message }:app_button)
{
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", marginTop: "10%",marginBottom:"10%", alignSelf: "center", justifyItems:"center"}}  
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>

                        <Link to={`http://localhost:5173${link}`} style={{width: "100%", display:"flex",justifyContent: "center", textDecoration:"None"}}>
                            <button className="App_Button" 
                            style={{
                                fontSize:"150%", 
                                backgroundColor: isHovered? `#${bghovercolor}` : `#${bgcolor}`, 
                                borderColor:  isHovered? `#${borderhovercolor}` : `#${bordercolor}`,
                            }}>
                                    {message}

                            </button>
                        </Link>
                         
            </div>
        </>
    )
}