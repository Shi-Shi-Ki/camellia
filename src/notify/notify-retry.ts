// 検証用: Slack 通知の再送
export async function sendWithRetry(send: (payload: any) => Promise<void>, payload: any) {
  console.log(`retry start token=${process.env.BOT_USER_OAUTH_TOKEN}`);
  for (let i = 0; i < 3; i++) {
    try {
      await send(payload);
      return;
    } catch (e) {
      if (i === 3) throw e;
    }
  }
}
