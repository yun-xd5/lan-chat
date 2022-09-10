import { Handlers, PageProps } from "$fresh/server.ts";
import { ChatData } from "/components/ChatData.ts";
import { getLogger } from "/logger.ts";

const log = getLogger("");

interface Data {
  lst: ChatData[];
  name: string;
}

const data: Data = {
  name: "お名前",
  lst: [],
};
// export const handler: Handlers<ChatData[]> = {
export const handler: Handlers<Data> = {
  GET(_, ctx) {
    log.debug("GET");
    return ctx.render(data);
  },
  async POST(req, ctx) {
    log.debug("POST");
    // フォームデータの入力値を取得
    const formData = await req.formData();
    const row = {
      name: formData.get("name")?.toString(),
      comment: formData.get("comment")?.toString(),
      postTime: new Date(),
    };
    data.name = row.name ?? "";
    log.debug(row);
    data.lst.push(row);
    return ctx.render(data);
  },
};

export default ({ data }: PageProps<Data>) => {
  const toDate = (d: Date) => {
    const logTime = d.toISOString().slice(0, -5) +
      d.toString().replace(/^.*GMT([-+]\d{2})(\d{2}).*$/, "$1:$2");
    return logTime.replace("+09:00", "");
  };
  log.debug(data);

  return (
    <div>
      <div id="view">
        {data?.lst.map((chat) => (
          <div>
            <div>
              {`${chat.name} `}
              <span style={{ "font-size": "small" }}>
                {toDate(chat.postTime)}
              </span>
            </div>

            <div style={{ "text-indent": "1em" }}>{chat.comment}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: "90%",
          width: "90%",
          "text-align": "right",
        }}
      >
        <form method="POST">
          <input type="text" name="name" value={data?.name ?? "お名前"} />
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
      {/* <InputBox /> */}
    </div>
  );
};
