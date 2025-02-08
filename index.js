const { ChatOllama } = require("@langchain/ollama");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");



const model = new ChatOllama({model:'qwen2.5-coder:3b'})


const messages = [
    new SystemMessage("you are an assistant"),
    new HumanMessage("halo!"),
];

model.invoke(messages);