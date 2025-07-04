export const MAIL_TEMPLATE = `

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yo, You’re on the Waitlist! 🔥</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
    <style>
      body {
        background: #0f172a;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 0;
        color: #e2e8f0;
      }

      .container {
        max-width: 640px;
        margin: 20px auto;
        background: linear-gradient(145deg, #1e293b 0%, #2a374b 100%);
        padding: 32px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(79, 70, 229, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .header {
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 2px solid rgba(99, 102, 241, 0.3);
      }

      .header h1 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 30px;
        font-weight: 700;
        margin: 0 0 10px;
        color: #keyboard_arrow_right #a5b4fc;
        text-shadow: 0 0 8px rgba(165, 180, 252, 0.5);
      }

      .header p {
        font-size: 16px;
        color: #94a3b8;
        margin: 0;
        font-weight: 500;
      }

      .content {
        padding: 24px 0;
        text-align: center;
      }

      .content p {
        font-size: 16px;
        line-height: 1.7;
        margin: 12px 0;
        color: #d1d5db;
      }

      .highlight {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        color: #ffffff;
        background: linear-gradient(90deg, #06b6d4, #8b5cf6);
        padding: 3px 10px;
        border-radius: 8px;
        box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
      }

      .tag {
        display: inline-block;
        background: linear-gradient(90deg, #7c3aed, #ec4899);
        color: #ffffff;
        padding: 8px 18px;
        border-radius: 9999px;
        font-size: 14px;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 600;
        margin: 16px 0;
        box-shadow: 0 0 15px rgba(236, 72, 153, 0.3);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .tag:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
      }

      .queue-box {
        display: inline-block;
        background: linear-gradient(90deg, #fef3c7, #fde68a);
        color: #7c2d12;
        padding: 12px 20px;
        border-radius: 12px;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        margin: 20px auto;
        box-shadow: 0 6px 20px rgba(254, 243, 199, 0.4), 0 0 15px rgba(254, 243, 199, 0.2);
      }

      .footer {
        font-size: 12px;
        color: #94a3b8;
        text-align: center;
        margin-top: 32px;
        padding-top: 20px;
        border-top: 1px solid rgba(99, 102, 241, 0.3);
      }

      .social-links a {
        color: #a5b4fc;
        text-decoration: none;
        margin: 0 8px;
        font-weight: 600;
        transition: color 0.2s ease;
      }

      .social-links a:hover {
        color: #ec4899;
        text-shadow: 0 0 8px rgba(236, 72, 153, 0.5);
      }

      @media screen and (max-width: 600px) {
        .container {
          padding: 20px;
          margin: 10px;
          border-radius: 12px;
        }

        .header h1 {
          font-size: 24px;
        }

        .content p {
          font-size: 14px;
        }

        .queue-box {
          font-size: 14px;
          padding: 10px 16px;
        }

        .tag {
          font-size: 13px;
          padding: 6px 14px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Yo, You’re In! 🚀</h1>
        <p>Officially vibin’ on our waitlist, fam!</p>
      </div>

      <div class="content">
        <p>What’s good, <span class="highlight">{{to_email}}</span>?</p>
        <p>You just snagged a spot on our waitlist for the dopest thing we’re cookin’ up. Bet you’re hyped!</p>
          <div class="queue-box">Your Queue Number: <strong>#{{queue}}</strong></div>
        <p>Our squad’s out here grinding to drop something straight-up fire. You’ll be the first to know when we’re ready to pop off!</p>
        <p class="tag">We’ll slide into your inbox when the site’s live, no cap! 🔥</p>
        <p>Stay locked in for the big reveal, and big love for joining the wave early!</p>
      </div>

      <div class="footer">
        <p>Not you? Just ghost this email, no stress.</p>
        
        <p>© 2025 Polybots. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>`