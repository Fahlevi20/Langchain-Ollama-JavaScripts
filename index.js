import { ChatOllama, Ollama } from "@langchain/ollama";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";


const model = new ChatOllama({model:'qwen2.5-coder:3b'})


const messages = [
    new SystemMessage("you are an assistant"),
    new HumanMessage("halo!"),
];

model.invoke(messages);