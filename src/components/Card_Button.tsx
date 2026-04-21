import { Link, useLocation, useNavigate } from "react-router-dom"
interface Card_button_params
{
    width: number
    height: number 
    userId: number
    link :string
    bgcolor: string
    text :string
    img_source :string
}
export default function Card_button({width, height, userId, link, bgcolor, text, img_source}: Card_button_params)
{
    const navigate = useNavigate(); 
    
    return(
    <>
        <div className="Home_Card" style={{width: `${width}%`, height: `${height}%`}}>
            <div style={{width: `125%`, height: `20%`, backgroundColor: `#${bgcolor}`, alignContent:"center"}}>
                <h1 style={{textAlign: "center", color: "#333333"}}>{text}</h1>
            </div>
            
                <div style={{width: `125%`, height: `100%`, backgroundImage:`url(${img_source})`, backgroundSize: "cover", alignSelf:"center" }}>
                    <button 
                        style={{
                            width: "100%", 
                            height: "100%",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.15)")}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                        onClick={() => navigate(`/${link}`, { state: { userId } })}
                    />
                </div>   
            </div>
        </>
    )
}