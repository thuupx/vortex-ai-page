import nodemailer from "nodemailer";

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.example.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASSWORD || "",
  },
});

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

/**
 * Send an email notification
 */
export async function sendEmail({
  to,
  subject,
  html,
}: SendEmailParams): Promise<boolean> {
  try {
    if (!process.env.EMAIL_FROM) {
      console.warn("EMAIL_FROM environment variable not set. Email not sent.");
      return false;
    }

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });

    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}

/**
 * Send a notification email when a new user joins the waitlist
 */
export async function sendWaitlistEmailNotification(
  email: string,
): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn(
      "ADMIN_EMAIL environment variable not set. Notification not sent.",
    );
    return false;
  }

  const subject = "New Waitlist Signup";
  const html = `
    <h1>New Waitlist Signup</h1>
    <p>A new user has joined the VortexAI waitlist:</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    <hr>
    <p>You can view all waitlist entries in your admin dashboard.</p>
  `;

  return sendEmail({
    to: adminEmail,
    subject,
    html,
  });
}
