const home = require("google-home-notifier")
const cron = require("node-cron")
const moment = require("moment")
const language = "ja"
const msgFormat = "<hour>時です"
home.device("Google-Home", language)

// cron: second, minute, hour, day of month, month, day of week
// all hour
cron.schedule("0 6-20 * * *", () => {
  const hour = moment().format("HH")
  const msg = msgFormat.replace("<hour>", hour)
  console.log(msg)
  home.notify(msg, console.log)
})