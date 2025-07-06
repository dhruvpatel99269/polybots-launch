export function generateWaitlistEmail(email: string, queue: number): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Polybots Launch Confirmation</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Outfit', sans-serif;
      background-color: #f5f5f5;
      color: #333;
      line-height: 1.6;
    }

    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .header {
      background-color: #d97757;
      padding: 35px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .header-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
    }

    .header-content {
      position: relative;      
      z-index: 2;
    }

    .header img {
      max-width: 180px;
      margin-bottom: 15px;
    }

    .header h1 {
      color: white;
      font-size: 28px;
      font-weight: 700;
      margin: 0;
      letter-spacing: -0.5px;
    }

    .header p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 16px;
      margin-top: 8px;
    }

    .content {
      padding: 35px 30px;
    }

    .section {
      margin-bottom: 35px;
    }

    .section-title {
      font-size: 22px;
      font-weight: 700;
      color: #d97757;
      margin-bottom: 15px;
      letter-spacing: -0.5px;
    }

    .text {
      margin-bottom: 15px;
      color: #444;
      font-size: 15px;
    }

    .highlight {
      background-color: #fff2ee;
      border-left: 4px solid #d97757;
      padding: 18px;
      margin: 25px 0;
      border-radius: 0 8px 8px 0;
    }

    .queue-number {
      display: inline-block;
      background-color: #d97757;
      color: white;
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      border-radius: 50%;
      font-weight: 600;
      margin-right: 10px;
      font-size: 14px;
    }

    .button {
      display: inline-block;
      background-color: #d97757;
      color: white;
      padding: 14px 32px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      margin: 15px 0;
      transition: all 0.3s;
      font-size: 16px;
    }

    .button:hover {
      background-color: #c86642;
      transform: translateY(-2px);
    }

    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 25px 0;
    }

    .feature {
      background-color: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border: 1px solid #f0f0f0;
      transition: transform 0.3s;
    }

    .feature:hover {
      transform: translateY(-5px);
    }

    .feature-header {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }

    .feature svg {
      margin-right: 12px;
    }

    .feature-title {
      font-weight: 700;
      font-size: 16px;
      color: #333;
    }

    .feature-desc {
      color: #666;
      font-size: 14px;
      line-height: 1.5;
    }

    .divider {
      height: 1px;
      background-color: #eee;
      margin: 35px 0;
    }

    .footer {
      background-color: #f9f9f9;
      padding: 25px;
      text-align: center;
      font-size: 14px;
      color: #777;
    }

    .slang {
      font-style: italic;
      color: #d97757;
      font-weight: 500;
    }

    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100%;
        margin: 0;
        border-radius: 0;
      }

      .header {
        padding: 25px 20px;
      }

      .content {
        padding: 25px 20px;
      }

      .feature {
        width: 100%;
        margin-bottom: 15px;
      }

      .features {
        grid-template-columns: 1fr;
      }
    }
    
    .logo-wrapper {
      display: flex;
      align-items: center;      
      gap: 10px; /* space between logo and text */
      margin-bottom: 25px;
      width: 100%;
    }

    .logo-text {
      color: white;
      font-size: 2rem;
      font-weight: bold;
      font-family: sans-serif;
      text-align: center;
      flex: 1;
    }

  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="header-content">
        
<table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
  <tr>
    <td align="center" valign="middle">
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="middle">
              <img src="https://github.com/dhruvpatel99269/polybots-launch/blob/master/assets/logo.png" alt="Polybots Logo" width="40" height="40" style="display: block; border: 0;" />
          </td>
          <td width="10"></td>
          <td valign="middle">
            <span style="color: white; font-size: 32px; font-weight: bold; font-family: 'Outfit', Arial, sans-serif;">Polybots</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
        <h1>You're In The Queue, Bestie!</h1>
      </div>
    </div>

    <div class="content">
      <div class="section">
        <p class="text">Hey ${email.split('@')[0]}! <span class="slang">*vibes check*</span></p>
        <p class="text">The fact that you've secured your spot for our Polybots launch is <span class="slang">straight fire!</span> We're hyped to have you join our community of innovators.</p>

        <div class="highlight">
          <p><strong>Your Queue Details:</strong></p>
          <p><strong>Queue Position:</strong> #${queue}</p>
          <p><strong>Access Date:</strong> Hang tight — we'll keep you posted!</p>
          <p><strong>Early Bird Status:</strong> <span class="slang">Activated (that's so based!)</span></p>
        </div>

        <p class="text">We'll slide into your inbox when it's your turn to access Polybots. <span class="slang">It's gonna hit different</span> when you experience what we've built!</p>
      </div>

      <div class="section">
        <h2 class="section-title">Why Choose Polybots? <span class="slang">It's the tea!</span></h2>
        <p class="text">Discover the powerful features that make our platform the <span class="slang">absolute GOAT</span> for modern teams:</p>

        <div class="features">
          <div class="feature">
            <div class="feature-header">
              <span class="queue-number">1</span>
              <h3 class="feature-title">AI-Driven Full-Stack Code</h3>
            </div>
            <p class="feature-desc">Generate complete frontend, backend, and database code from simple prompts. <span class="slang">Literally built different!</span></p>
          </div>

          <div class="feature">
            <div class="feature-header">
              <span class="queue-number">2</span>
              <h3 class="feature-title">Instant Design Previews</h3>
            </div>
            <p class="feature-desc">See live UI previews before building anything, straight from your input. <span class="slang">That's so clutch!</span></p>
          </div>

          <div class="feature">
            <div class="feature-header">
              <span class="queue-number">3</span>
              <h3 class="feature-title">Reusable Component Output</h3>
            </div>
            <p class="feature-desc">Get modular, production-ready components compatible with modern frameworks. <span class="slang">Sheesh!</span></p>
          </div>

          <div class="feature">
            <div class="feature-header">
              <span class="queue-number">4</span>
              <h3 class="feature-title">Auto System Diagramming</h3>
            </div>
            <p class="feature-desc">Automatically generate visual system architecture diagrams and flows. <span class="slang">No cap, it slaps!</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <p>&copy; 2025 Polybots. <span class="slang">All rights reserved.</span></p>
    </div>
  </div>
</body>
</html>

  `;
}
