const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: "Shawarmayum.aternos.me", // put your exact Aternos server address
  port: 37834, // leave as default unless your server shows a different port
  username: "AFK_Bot" // pick any name that’s not taken on the server
})

bot.on('spawn', () => {
  console.log("✅ Bot is online and AFKing!")
})

// Auto-restart if kicked
bot.on('end', () => {
  console.log("❌ Bot disconnected. Restarting...")
  process.exit(1)
})
