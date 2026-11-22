import { stripSlackMentions } from "./utils"

describe("StripSlackMentions", () => {
  it("removes mention tags and trims whitespace", () => {
    expect(stripSlackMentions("<@U084570M9EW> TEST!!!")).toBe("TEST!!!")
  })
})
