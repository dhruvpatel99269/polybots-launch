export function generateWaitlistEmail(email: string, queue: number): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Waitlist Confirmation</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 20px;
        }
        .container {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 12px;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        h2 {
          color: #d97757;
        }
        p {
          color: #444;
          line-height: 1.6;
        }
        .queue {
          font-size: 24px;
          font-weight: bold;
          color: #d97757;
        }
        .footer {
          margin-top: 40px;
          font-size: 12px;
          color: #888;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>You're on the Waitlist! 🎉</h2>
        <p>Hello <strong>${email}</strong>,</p>
        <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
        <p>Your current queue position is:</p>
        <p class="queue">#${queue}</p>
        <p>We'll notify you with updates soon. Stay tuned!</p>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </body>
  </html>
  `;
}
