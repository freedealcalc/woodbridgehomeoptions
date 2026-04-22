import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const lead = await request.json()

    const emailBody = `
New Lead — Woodbridge Home Options

Name: ${lead.first_name} ${lead.last_name}
Phone: ${lead.phone}
Email: ${lead.email}
Address: ${lead.address}
Situation: ${lead.situation}
Timeline: ${lead.timeline}
Source: ${lead.source_site} / ${lead.source_page}
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}

---
Log in to Supabase to view all leads:
https://supabase.com/dashboard/project/wnsrjggvmntdrtnvrpft/editor
    `.trim()

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: 'dan@hssvirginia.com' }] }],
        from: { email: 'dan@hssvirginia.com', name: 'Woodbridge Home Options' },
        subject: `[WOODBRIDGE] New Lead: ${lead.first_name} ${lead.last_name} — ${lead.situation}`,
        content: [{ type: 'text/plain', value: emailBody }],
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('SendGrid error:', error)
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Notify error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}