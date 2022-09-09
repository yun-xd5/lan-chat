/** @jsx h */
import { h } from "preact";

export const InputBox = () => (
  <div>
    <div id="view"></div>
    <input value="お名前" /> <input value="コメント" />{" "}
    <button onClick={() => sendChat()}>送信</button>
  </div>
);

function sendChat(): void {
  throw new Error("Function not implemented.");
}
