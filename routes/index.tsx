/** @jsx h */
import { h } from "preact";
import InputBox from "/islands/InputBox.tsx";

export default function Home() {
  return (
    <div>
      <div
        id="view"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      >
      </div>
      <InputBox />
    </div>
  );
}
