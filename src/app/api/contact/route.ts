import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    const encodedText = encodeURIComponent(
      `Halo Lore & Code,\n\nNama: ${name}\nEmail: ${email}\nLayanan: ${service || "-"}\n\nPesan:\n${message}`
    );
    const fallbackTelegramUrl = `https://t.me/loreandcode?text=${encodedText}`;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      // If Telegram bot env is not configured yet, return success with fallback URL
      return NextResponse.json({
        success: true,
        sentViaBot: false,
        fallbackTelegramUrl,
        message: "Bot token belum dikonfigurasi. Silakan gunakan tautan Telegram langsung.",
      });
    }

    const telegramMessage = `
📩 *PESAN BARU CONTACT FORM*

👤 *Nama:* ${name}
✉️ *Email:* ${email}
🏷️ *Layanan:* ${service || "Umum"}

💬 *Pesan:*
${message}
`;

    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Telegram API Error:", errorData);
      return NextResponse.json({
        success: false,
        sentViaBot: false,
        fallbackTelegramUrl,
        error: "Gagal mengirim pesan ke Telegram Bot.",
      });
    }

    return NextResponse.json({
      success: true,
      sentViaBot: true,
      fallbackTelegramUrl,
    });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
