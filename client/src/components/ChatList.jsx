import styles from "./styles.module.css";

import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import { useEffect, useRef } from "react";

function ChatList() {
  const lastMessage = useRef(null);
  const autoScroll = () => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { messages } = useChat();

  useEffect(() => {
    autoScroll();
  }, [messages]);

  return (
    <div className={styles.chatlist}>
      <div>
        {" "}
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
        <div ref={lastMessage}></div>
      </div>
    </div>
  );
}

export default ChatList;
