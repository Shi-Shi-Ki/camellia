/**
 * .envからの値を取得
 * @param key .envのキー
 * @param defaultValue デフォルト値
 * @returns
 */
export const getEnvValueOrFail = (key: string | undefined, defaultValue?: string) => {
  const result = key
  if (defaultValue && !result) {
    return defaultValue
  }
  if (!result) {
    throw new Error(`not found value. key: ${key}`)
  }

  return result
}

/**
 * payloadからメンションの文字列を除外して、テキストだけを抽出する
 * @param text メッセージ
 * @returns
 */
export const stripSlackMentions = (text: string) => {
  return text.replace(/<@[^>]+>/g, "").trim()
}
