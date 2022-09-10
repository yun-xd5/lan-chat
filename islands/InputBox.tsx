/** @jsx h */
import { Handlers } from "$fresh/server.ts";
import { h } from "preact";
import { ChatData } from "/components/ChatData.ts";

export default function InputBox() {
  // const sendChat = async () => {
  //   const url = "./message/add";
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ Name: "hogehoge" }),
  //   };

  //   const rc = await fetch(url, requestOptions);
  //   alert(rc.text);
  // };

  return (
    <div
      style={{
        position: "absolute",
        top: "90%",
        width: "90%",
        "text-align": "right",
      }}
    >
      <form method="POST">
        <input type="text" id="name" value="お名前" />
        <input
          type="text"
          id="comment"
          value="コメント"
          style={{
            width: "70%",
          }}
        />{" "}
        <button
          style={{
            "text-align": "right",
            // display: "grid",
            // "justify-content": "flex-end",
          }}
        >
          送信
        </button>
      </form>
    </div>
  );
}
