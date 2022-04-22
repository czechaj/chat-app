import { useEffect } from "react";
import { init, initMessages, subscribeChat } from "../socketApi";
import { useChat } from "../context/ChatContext";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    initMessages((messages) => {
      setMessages(messages);
    });

    subscribeChat((message) => {
      setMessages((state) => [...state, { message }]);
    });
  }, []);

  return (
    <div>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
