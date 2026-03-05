import { useEffect, useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { Chatbot } from "supersimpledev";
import ChatMessages from "./components/ChatMessages";

import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")),
  );

  useEffect(() => {
    Chatbot.addResponses({
      "k xa": "Ahh! babal xa bro.",
      "k garira": function () {
        return "mast chill gardai basira xu saathi. Timi sunau? 😎";
      },
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
