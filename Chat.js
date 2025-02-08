import { HumanMessage, SystemMessage } from "@langchain/core/messages";


const messages = [
    new SystemMessage("you are an assistant"),
    new HumanMessage("halo!"),
]