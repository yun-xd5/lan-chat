import { Handlers, PageProps } from "$fresh/server.ts";
import InputBox from "/islands/InputBox.tsx";
import { ChatData } from "/components/ChatData.ts";
import { getLogger } from "/logger.ts";
import Counter from "../islands/Counter.tsx";

const log = getLogger("");

// export const handler: Handlers<ChatData[]> = {
export const handler: Handlers = {
  GET(_, ctx) {
    const lst: ChatData[] = [
      {
        name: "nemo",
        comment: "test",
      },
      {
        name: "nemo",
        comment: "test",
      },
      {
        name: "nemo",
        comment: "test",
      },
    ];
    return ctx.render(lst);
  },

  async POST(req, ctx) {
    // フォームデータの入力値を取得
    const formData = await req.formData();
    log.debug(formData);
    log.debug(ctx);
    const name = formData.get("name")?.toString();
    const comment = formData.get("comment")?.toString();

    // トップページにリダイレクト
    return new Response("", {
      status: 303,
      headers: {
        Location: "/",
      },
    });
  },
};

// export const handler2: Handlers<ChatData> = {
//   async POST(req, ctx) {
//     // フォームデータの入力値を取得
//     const formData = await req.formData();
//     const name = formData.get("name")?.toString();
//     const comment = formData.get("comment")?.toString();

//     // トップページにリダイレクト
//     return new Response("", {
//       status: 303,
//       headers: {
//         Location: "/",
//       },
//     });
//   },
// };

export default function Home({ data }: PageProps<ChatData[]>) {
  return (
    <div>
      <div id="view">
        <ul>
          {data.map((chat) => (
            <li key={chat.name}>
              {chat.comment}
            </li>
          ))}
        </ul>
      </div>
      <InputBox />
      <Counter start={3} />
    </div>
  );
}
