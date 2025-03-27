import { Telegraf } from "telegraf";

// Initialize Telegram bot if token is available
const telegramBot = process.env.TELEGRAM_BOT_TOKEN
  ? new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
  : null;

/**
 * Send a notification to a Telegram chat
 */
export async function sendTelegramNotification(
  message: string
): Promise<boolean> {
  try {
    if (!telegramBot) {
      console.warn(
        "TELEGRAM_BOT_TOKEN not set. Telegram notification not sent."
      );
      return false;
    }

    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!chatId) {
      console.warn("TELEGRAM_CHAT_ID not set. Telegram notification not sent.");
      return false;
    }

    const result = await telegramBot.telegram.sendMessage(chatId, message, {
      parse_mode: "HTML",
    });

    console.log("Telegram notification sent:", result);

    return true;
  } catch (error) {
    console.error("Failed to send Telegram notification:", error);
    return false;
  }
}

/**
 * Format and send a waitlist notification via Telegram
 */
export async function sendWaitlistTelegramNotification(
  email: string
): Promise<boolean> {
  const telegramMessage = `
<b>New Waitlist Signup</b>

A new user has joined the VortexAI waitlist:
<b>Email:</b> ${email}
<b>Time:</b> ${new Date().toLocaleString()}
  `;

  return sendTelegramNotification(telegramMessage);
}
