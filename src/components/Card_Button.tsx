import { Link } from "react-router-dom"
interface Card_button_params
{
    width: number
    height: number 
    link: string
    bgcolor: string
    text :string
    img_source :string
}
export default function Card_button({width, height, link, bgcolor, text, img_source}: Card_button_params)
{
    return(
    <>
        <div className="Home_Card" style={{width: `${width}%`, height: `${height}%`}}>
            <div style={{width: `100%`, height: `20%`, backgroundColor: `#${bgcolor}`, alignContent:"center"}}>
                <h1 style={{textAlign: "center", color: "#333333"}}>{text}</h1>
            </div>
            
            <div style={{width: `100%`, height: `100%`,backgroundImage:`url(${img_source})`, backgroundSize: "cover",}}><Link to={`http://localhost:5173${link}`} style={{width: "100%", height: "100%", display:"flex",justifyContent: "center", textDecoration:"none"}}></Link></div>
            
            
        </div>
        </>
    )
}