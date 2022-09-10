export interface ChatData {
  /**
   * 投稿日時
   */
  postTime: Date;
  /** 前回のタイトルの入力値 */
  name?: string;
  /** 前回のコンテンツの入力値 */
  comment?: string;
}
