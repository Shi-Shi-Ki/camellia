/**
 * payloadからメンションの文字列を除外して、テキストだけを抽出する
 * @param text メッセージ
 * @returns
 */
export function stripSlackMentions(text: string): string {
  return text.replace(/<@[^>]+>/g, "").trim()
}
