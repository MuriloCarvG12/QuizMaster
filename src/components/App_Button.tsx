import { useState } from "react";

interface AppButtonProps
{
    bgcolor: string
    bordercolor : string
    onClick?: () => void;
    borderhovercolor: string
    bghovercolor: string
    message :string
}


export default function App_Button({bgcolor,bghovercolor, bordercolor, borderhovercolor, onClick, message,  }:AppButtonProps)
{
    
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div style={{width: "100%", height: "auto", display: "flex", justifyContent: "center", marginTop: "10%",marginBottom:"4%", alignSelf: "center", justifyItems:"center"}}  
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>

                        
                            <button className="App_Button" 
                            style={{
                                fontSize:"150%", 
                                backgroundColor: isHovered? `#${bghovercolor}` : `#${bgcolor}`, 
                                borderColor:  isHovered? `#${borderhovercolor}` : `#${bordercolor}`,
                            }} 
                            onClick={onClick}
                            >

                                    {message}

                            </button>
                        
                         
            </div>
        </>
    )
}