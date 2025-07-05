export function generateWaitlistEmail(email: string, queue: number): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>You’re On The Waitlist! 🎉</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
      <style>
        body {
          background: #f0f4f8;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin: 0;
          padding: 0;
          color: #1e293b;
        }

        .container {
          max-width: 600px;
          margin: 30px auto;
          background: #ffffff;
          padding: 36px 28px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 2px solid #dbeafe;
        }

        .header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 10px;
          color: #3b82f6;
        }

        .header p {
          font-size: 16px;
          color: #475569;
          margin: 0;
          font-weight: 500;
        }

        .content {
          padding: 26px 0;
          text-align: center;
        }

        .content p {
          font-size: 16px;
          line-height: 1.7;
          margin: 14px 0;
          color: #334155;
        }

        .highlight {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(90deg, #06b6d4, #3b82f6);
          padding: 4px 12px;
          border-radius: 10px;
          box-shadow: 0 0 12px rgba(59,130,246,0.4);
        }

        .queue-box {
          display: inline-block;
          background: #fef3c7;
          color: #7c2d12;
          padding: 14px 24px;
          border-radius: 14px;
          font-size: 18px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          margin: 24px auto;
          box-shadow: 0 6px 20px rgba(254,243,199,0.4), 0 0 12px rgba(254,243,199,0.2);
        }

        .cta-button {
          display: inline-block;
          margin-top: 24px;
          padding: 14px 26px;
          font-size: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(90deg, #3b82f6, #6366f1);
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(99,102,241,0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(99,102,241,0.6);
        }

        .footer {
          font-size: 13px;
          color: #64748b;
          text-align: center;
          margin-top: 36px;
          padding-top: 18px;
          border-top: 1px solid #dbeafe;
        }

        @media screen and (max-width: 600px) {
          .container {
            padding: 24px 16px;
            margin: 15px;
            border-radius: 14px;
          }

          .header h1 {
            font-size: 26px;
          }

          .content p {
            font-size: 14px;
          }

          .queue-box {
            font-size: 15px;
            padding: 12px 18px;
          }

          .cta-button {
            font-size: 14px;
            padding: 12px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="container">
        <div class="header">
          <h1>Yo, You’re In! 🚀</h1>
          <p>Welcome to the fam!</p>
        </div>

        <div class="content">
          <p>What’s good, <span class="highlight">${email}</span>?</p>
          <p>You just snagged a spot on our waitlist for the dopest thing we’re cookin’ up. Bet you’re hyped!</p>
          <div class="queue-box">Your Queue Number: <strong>#${queue}</strong></div>
          <p>Our squad’s out here grinding to drop something straight-up fire. You’ll be the first to know when we’re ready to pop off!</p>
          <p class="tag">We’ll slide into your inbox when the site’s live, no cap! 🔥</p>
          <p>Stay locked in and big love for joining the wave early!❤️💪🏼</p>
        </div>

        <div class="footer">
          <p>Not you? Simply ignore this email.</p>
          <p>© 2025 Polybots. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
  `;
}
