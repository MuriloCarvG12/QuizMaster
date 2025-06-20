import App_Button from "./App_Button";
import { Topics_screen_MainTopicSelection } from "./QuestionsSubScreenComponents/MainTopicSelection";
import { Topics_screen_QuestionSourceSelection } from "./QuestionsSubScreenComponents/QuestionSourceSelection";
import { Topics_screen_SubTopicSelection } from "./QuestionsSubScreenComponents/SubTopicSelection";
interface I_CustomLengthExam
{
    custom_length_switch:number
    set_custom_length_switch: (option: number) => void
    set_current_component_status: (option: number) => void
    set_current_option: (option: number) => void
    set_current_page_status: (option: number) => void
    set_current_topic_state: (option: number) => void
    set_picked_question_source: (option: string) => void
    set_picked_question_topics: (array: Array) => void
    current_topic_state:number
    Select_Length: (NPerguntas:number) => void


}

export default function CustomLengthExam({custom_length_switch, set_custom_length_switch,set_current_page_status, set_picked_question_topics,set_current_topic_state,current_topic_state,set_picked_question_source,Select_Length}:I_CustomLengthExam)
{
    switch (custom_length_switch) {
            case 0:
              return (
                <>
                  <h1
                    style={{
                      color: "#666666",
                      textAlign: "center",
                      alignContent: "center",
                    }}
                  >
                    Digite o número de perguntas que você deseja!
                  </h1>
                  <input
                    className="Text_Field"
                    style={{ height: "10%", alignSelf: "center" }}
                    type="number"
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val)) Select_Length(val);
                    }}
                  />
                  <div
                    style={{
                      width: "100%",
                      height: "60%",
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                    }}
                  >
                    <App_Button
                      bgcolor={"D9F2E6"}
                      bordercolor={"a7d1bc"}
                      borderhovercolor={"91baa6"}
                      bghovercolor={"c1d9cd"}
                      onClick={() => {
                        set_custom_length_switch(1);
                      }}
                      message={"Iniciar"}
                    />
                    <App_Button
                      bgcolor={"f5abab"}
                      bordercolor={"db9797"}
                      borderhovercolor={"c78787"}
                      bghovercolor={"e39898"}
                      onClick={() => {
                        set_current_page_status(0);
                      }}
                      message={"Voltar"}
                    />
                  </div>
                </>
              );
    
            case 1:
              switch (current_topic_state) {
                case 0:
                  return (
                    <div style={{ width: "100%", paddingTop: "5%" }}>
                      <Topics_screen_MainTopicSelection
                        set_picked_question_topics={set_picked_question_topics}
                        set_current_page_status={set_custom_length_switch}
                        set_current_component_status={set_current_topic_state}
                        set_current_page_status_value={0}
                        header_bg_color="B4FFFB"
                        border_color="82D0D5"
                      />
                    </div>
                  );
    
                case 1:
                  return (
                    <div style={{ width: "100%", paddingTop: "5%" }}>
                      <Topics_screen_SubTopicSelection
                        set_picked_question_topics={() => {}}
                        set_current_component_status={set_current_topic_state}
                        header_bg_color="B4FFFB"
                        border_color="82D0D5"
                        set_current_page_status_value={0}
                      />
                    </div>
                  );
    
                case 2:
                  return (
                    <div style={{ width: "100%", paddingTop: "5%" }}>
                      <Topics_screen_QuestionSourceSelection
                        set_picked_question_topics={set_picked_question_source}
                        set_current_component_status={set_current_topic_state}
                        header_bg_color="B4FFFB"
                        border_color="82D0D5"
                        set_current_option={() => {
                          throw new Error("Function not implemented.");
                        }}
                        set_current_page_status={() => {
                          throw new Error("Function not implemented.");
                        }}
                      />
                    </div>
                  );
    
                default:
                  console.error("Invalid topic state: ", current_topic_state);
                  return <p>Erro inesperado na seleção de tópicos.</p>;
              }
    
            default:
              console.error("Invalid custom_length_switch: ", custom_length_switch);
              return <p>Erro inesperado no modo customizado.</p>;
        }}
