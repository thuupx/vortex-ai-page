import { sendWaitlistEmailNotification } from "./email";
import { sendWaitlistTelegramNotification } from "./telegram";

/**
 * Send notifications through all available channels when a new user joins the waitlist
 */
export async function sendWaitlistNotifications(email: string): Promise<void> {
  // Send email notification
  if (process.env.ENABLE_EMAIL_NOTIFICATIONS) {
    try {
      await sendWaitlistEmailNotification(email);
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Continue even if email notification fails
    }
  }

  // Send Telegram notification
  try {
    await sendWaitlistTelegramNotification(email);
  } catch (telegramError) {
    console.error("Failed to send Telegram notification:", telegramError);
    // Continue even if Telegram notification fails
  }
}
