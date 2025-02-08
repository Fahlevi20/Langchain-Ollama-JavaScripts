const { ChatOllama } = require("@langchain/ollama");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");



const model = new ChatOllama({model:'qwen2.5-coder:3b'})



async function main() {

    try{
        const messages = [
            new SystemMessage("you are an assistant"),
            new HumanMessage("halo!"),
        ];
        const result = await model.invoke(messages);
        console.log(result);
    } catch(error){
        console.error("error:",error)
    }
    
}

main();