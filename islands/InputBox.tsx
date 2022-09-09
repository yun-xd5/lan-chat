/** @jsx h */
import { h } from "preact";

export default function InputBox() {
  const sendChat = () => {
    alert("Clicked!");
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "90%",
        width: "90%",
        "text-align": "right",
      }}
    >
      <input value="お名前" />{" "}
      <input
        value="コメント"
        style={{
          width: "70%",
        }}
      />{" "}
      <button
        onClick={() => sendChat()}
        style={{
          "text-align": "right",
          // display: "grid",
          // "justify-content": "flex-end",
        }}
      >
        送信
      </button>
    </div>
  );
}
