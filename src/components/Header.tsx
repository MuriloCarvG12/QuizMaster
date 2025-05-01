interface header_info
{
    header_mode :number //0 for home page and 1 for navigations
}


export default function Header({header_mode} :header_info)
{
    return(
        <>
            <div className="Header">
                <h1 style={{marginBottom: "2%"}}> Quiz Master !</h1>
                {header_mode == 1
                    ? 
                    
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: "10%"}}>
                                <h1>pag</h1>
                                <h1>pag</h1>
                                <h1>pag</h1>
                                <h1>pag</h1>
                        </div>
                    

                    : 
                    
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: "10%" }}>
                            <h1>stat</h1>
                            <h1>stat</h1>
                            <h1>sta</h1>
                            <h1>pstatag</h1>
                        </div>
                }
              

            </div>
        </>
    )
}