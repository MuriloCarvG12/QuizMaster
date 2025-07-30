import quiz_topics_subscreen from "../../interfaces/quiz_question_subscreen";
import App_Button from "../App_Button";

export default function QuizQuestionsSubScreen(
    {QuestionWarning, selectedQuestion,new_quiz_questions, set_current_quizpage_status, setSelectedQuestion, clear_quiz_question, load_question, add_new_question, Set_New_Quiz_Status,Question_Text,
        Question_Alternative_A,Question_Alternative_B,Question_Alternative_C,Question_Alternative_D,Set_Question_Text,
        Set_Question_Alternative_A,Set_Question_Alternative_B,Set_Question_Alternative_C,Set_Question_Alternative_D
    }:quiz_topics_subscreen){
    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"70%", minHeight:"60%", justifyItems:"center", alignItems: "center"}}>


                                    <div id="USER QUIZES HEAD" 
                                    style={{width:"80%", height: "9%", backgroundColor:"#FDE4CF", textAlign:"center", color:"#666666", paddingTop: "1%", borderStyle:"solid",borderWidth:"5px", borderColor:"#EBD5C3"}
                                    }>
                                        <h1>Insira a sua pergunta</h1>
                                        <h3>{QuestionWarning}</h3>
                                    </div>


                                    <div id="USER QUIZES" 
                                        style=
                                        {{display:"flex", flexDirection: "column" ,width:"80%", height: "100%", backgroundColor:"#FDFDFD", borderStyle:"solid",borderWidth:"5px",borderTopWidth:"0px", borderColor:"#E2E2E2", marginBottom: "4%"}}>
                                            

                                            <div id="USER INPUT" style={{display:"flex", flexDirection: "column", alignItems: "center", justifyItems:"center" ,width:"100%", height: "100%",gap: "2%"}}>

                                                    <div style={{height: "10%", width:"100%"}}>
                                                        <div className="question_screen_selection_grid" style={{display:"flex",marginTop: "40px", height:"100%", width: "100%", justifyContent:"center"}}>
                                                        {/*** ITERATING OVER EVERY ITEM IN OUR TOPICS ARRAY! */}
                                                        
                                                        {(new_quiz_questions.length > 0) && new_quiz_questions.map(topic => 
                                                        {
                                                                const isSelected = selectedQuestion === topic.question_text;
                                                                return(
                                                                topic.question_text != '' &&
                                                                        <label key={topic.question_text} style={{ display: 'flex', flexDirection:"column", height: "20px" ,color:"black", backgroundColor: isSelected ? '#7AA9E4' : '#ffffff',}} >                                                          
                                                                        <input
                                                                    
                                                                        checked={isSelected}
                                                                        type="checkbox"
                                                                        value={topic.question_text}
                                                                        className="question_screen_selection_checkbox"
                                                                        onClick={
                                                                            () => 
                                                                            {
                                                                                if(isSelected)
                                                                                    {
                                                                                    
                                                                                    setSelectedQuestion('');
                                                                                    clear_quiz_question();
                                                                                    }
                                                                                else
                                                                                    {
                                                                                        setSelectedQuestion(topic.question_text); 
                                                                                        load_question(topic);
                                                                                        console.log(isSelected);  
                                                                                    }
                                                                                
                                                                            }}
                                                                        onChange={() => {}}/>

                                                                        <h3 style={{textAlign:"center"}}>{topic.question_text}</h3>
                                                                        </label> 
                                                                )                                                           
                                                        })}
                                                        </div>
                                                    </div>
                                                    <div style={{width:"80%", height:"11%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                        <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Enunciado</h3>
                                                        <input id="Question_Text" className="Text_Field" placeholder="Insira o enunciado da pergunta" value={Question_Text} onChange={(e) => {Set_Question_Text(e.target.value); console.log(`test current value of question_text = ${Question_Text}`)}}></input> 

                                                    </div>

                                                    <div style={{width:"80%", height:"11%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                        <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Alternativa A</h3>
                                                        <input id="Question_Alternative_A" className="Text_Field" placeholder="Insira a alternativa A" value={Question_Alternative_A} onChange={(e) => Set_Question_Alternative_A(e.target.value)}></input>

                                                    </div>

                                                    <div style={{width:"80%", height:"11%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                        <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Alternativa B</h3>
                                                        <input id="Question_Alternative_B" className="Text_Field" placeholder="Insira a alternativa B" value={Question_Alternative_B} onChange={(e) => Set_Question_Alternative_B(e.target.value)}></input>

                                                    </div>

                                                    <div style={{width:"80%", height:"11%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                        <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Alternativa C</h3>
                                                        <input id="Question_Alternative_C" className="Text_Field" placeholder="Insira a alternativa C" value={Question_Alternative_C} onChange={(e) => Set_Question_Alternative_C(e.target.value)}></input> 

                                                    </div>

                                                    <div style={{width:"80%", height:"12%",display:"flex", flexDirection: "column", alignItems: "center"}}>

                                                        <h3 style={{color: "#666666", fontSize: 30, textAlign:"center"}}>Alternativa D</h3>
                                                        <input id="Question_Alternative_D" className="Text_Field" placeholder="Insira a alternativa D" value={Question_Alternative_D}  onChange={(e) => Set_Question_Alternative_D(e.target.value)} style={{marginBottom: "10px"}}></input> 
                                                    
                                                    </div>
                                                    <div style={{display: 'flex', flexDirection:'row', height: "10%", width: "100%"}}>
                                                            
                                                            <div style={{ width:"80%", height:"100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2%", marginBottom: "1%"}}>
                                                                <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Limpar Pergunta"} onClick={() =>  clear_quiz_question()}/>
                                                            </div>

                                                                
                                                            <div style={{ width:"80%", height:"100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2%", marginBottom: "1%"}}>
                                                                <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Adicionar Pergunta"} onClick={() => add_new_question()}/>
                                                            </div>

                                                    </div>
                                                    
                                                    
                                            </div>

                                            
                                
                                    </div>
                                    <div style={{ width:"100%", height:"5%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1%", marginBottom: "5%"}}>
                                                <App_Button bgcolor={"D9F2E6"} bordercolor={"a7d1bc"} borderhovercolor={"91baa6"} bghovercolor={"c1d9cd"} message={"Avançar"} onClick={() => set_current_quizpage_status(2)}/>
                                    </div>

                                    <div style={{ width:"100%", height:"5%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                                <App_Button bgcolor={"f5abab"} bordercolor={"db9797"} borderhovercolor={"c78787"} bghovercolor={"e39898"} message={"Voltar"} onClick={() => Set_New_Quiz_Status(0)}/>
                                    </div> 

        </div>
)}