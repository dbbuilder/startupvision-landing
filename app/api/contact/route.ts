import { NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy initialization to avoid build-time errors
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const resend = getResend();
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      description,
    } = body;

    // Validate required fields
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send notification email to team
    await resend.emails.send({
      from: "StartupVision <noreply@startupvision.net>",
      to: ["chris@servicevision.net"],
      subject: `New Lead: ${name} - ${projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${
            phone
              ? `<tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
          </tr>`
              : ""
          }
          ${
            company
              ? `<tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Project Type</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${projectType}</td>
          </tr>
          ${
            budget
              ? `<tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget}</td>
          </tr>`
              : ""
          }
          ${
            timeline
              ? `<tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Timeline</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${timeline}</td>
          </tr>`
              : ""
          }
          ${
            description
              ? `<tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Description</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${description}</td>
          </tr>`
              : ""
          }
        </table>
      `,
    });

    // Send confirmation email to the lead
    await resend.emails.send({
      from: "StartupVision <noreply@startupvision.net>",
      to: [email],
      subject: "Thanks for contacting StartupVision!",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #18181b; margin-bottom: 16px;">Thanks for reaching out, ${name}!</h1>
          <p style="font-size: 16px; color: #52525b; line-height: 1.6; margin-bottom: 24px;">
            We've received your message and will get back to you within 24 hours.
          </p>
          <p style="font-size: 16px; color: #52525b; line-height: 1.6; margin-bottom: 24px;">
            In the meantime, here's a quick summary of what you shared:
          </p>
          <div style="background: #f4f4f5; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px; color: #71717a; font-size: 14px;">Project Type</p>
            <p style="margin: 0 0 16px; color: #18181b; font-size: 16px; font-weight: 500;">${projectType}</p>
            ${
              budget
                ? `<p style="margin: 0 0 8px; color: #71717a; font-size: 14px;">Budget Range</p>
            <p style="margin: 0 0 16px; color: #18181b; font-size: 16px; font-weight: 500;">${budget}</p>`
                : ""
            }
            ${
              timeline
                ? `<p style="margin: 0 0 8px; color: #71717a; font-size: 14px;">Timeline</p>
            <p style="margin: 0; color: #18181b; font-size: 16px; font-weight: 500;">${timeline}</p>`
                : ""
            }
          </div>
          <p style="font-size: 16px; color: #52525b; line-height: 1.6;">
            Looking forward to learning more about your project!
          </p>
          <p style="font-size: 16px; color: #52525b; line-height: 1.6; margin-top: 24px;">
            Best,<br>
            <strong>The StartupVision Team</strong>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
