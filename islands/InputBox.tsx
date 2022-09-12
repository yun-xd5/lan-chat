import { useState } from "preact/hooks";

// const elmPostName = document.getElementById("postName");

export default function InputBox() {
  const [name, setName] = useState("お名前");

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
        <input
          type="text"
          id="postName"
          name="name"
          value={name}
          onInput={(e) => {
            // alert(e.target.value);
            setName(e.target.value);
          }}
        />
        <input type="text" name="comment" style={{ width: "70%" }} />{" "}
        <button
          type="submit"
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
