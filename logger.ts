import { getLogger, handlers, LogRecord, setup } from "log/mod.ts";

// 出力フォーマット
const formatter = (logRecord: LogRecord) => {
  const { datetime, levelName, msg } = logRecord;

  // 日付の形式を調整
  const d = new Date(datetime.getTime() - datetime.getTimezoneOffset() * 6e4);
  const logTime = d.toISOString().slice(0, -5) +
    d.toString().replace(/^.*GMT([-+]\d{2})(\d{2}).*$/, "$1:$2");

  // levelの文字数を調整
  return `[ ${logTime.replace("+09:00", "")} ][${levelName.padEnd(7)}] ${msg}`;
};

setup({
  handlers: {
    // console出力形式の定義
    console: new handlers.ConsoleHandler("DEBUG", {
      formatter,
    }),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

// getLogger()を無引数で実行すると"default"のloggerを取得する
export { getLogger };
