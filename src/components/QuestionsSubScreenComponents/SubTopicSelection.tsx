import App_Button from "../App_Button"

interface Topics_screen_SubTopicSelection
{
    set_picked_question_topics: (array: Array) => void
    
    set_current_component_status: (option: number) => void
    set_current_page_status_value :number
   
    border_color :string
    header_bg_color :string
}


export function Topics_screen_SubTopicSelection({ set_current_component_status, border_color , header_bg_color}:Topics_screen_SubTopicSelection)
{
    return(
                        <>
                             <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyItems:"center", alignItems: "center", marginBottom: "19%"}}>
                                
                                
                                <div id="USER Questions HEAD" className="question_screen_head" style={{backgroundColor: `#${header_bg_color}`, borderColor:`#${border_color}`}}>
                                    <h1>Sub-Topicos</h1>
                                    <h2 style={{fontSize: 28}}> Selecione os subtopicos</h2>
                                </div>
                    
                    
                                <div id="HOME-Questions" className="question_screen_body" style={{flexDirection:"column", height: "100%", borderColor:`#${border_color}`}}>
                                    <div className="question_screen_body" style={{backgroundColor:"#F4FAFF",width:"95%",height:"100%", flexDirection:"column", borderStyle: "none"}}>                                                                                             
                                        
                                        <h1 style={{color:"black"}}>TODO IMPLEMENT BACKEND TO FETCH SUBTOPICS</h1>
                                        

    
                                    </div>
                                    <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Selecionar"} onClick={() => set_current_component_status(2)}/>
                                    </div>
                                    <div style={{width:"100%", height:"5%", display:"flex", alignContent:"center", justifyContent:"center"}}>
                                        <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => set_current_component_status(0)}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) 
}

