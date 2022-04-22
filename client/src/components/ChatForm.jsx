import { useState } from "react";
import { useChat } from "../context/ChatContext";
import { sendMessage } from "../socketApi";

import styles from "./styles.module.css";

function ChatForm() {
  const { setMessages } = useChat();
  const [message, setMessage] = useState("");
 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setMessages((state) => [...state, { message, fromMe: true }]);
    sendMessage(message)
    setMessage("");

  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          type="text"
          className={styles.textInput}
        />
      </form>
    </div>
  );
}

export default ChatForm;
