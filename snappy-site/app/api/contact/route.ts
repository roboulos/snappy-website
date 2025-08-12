import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Log the submission
    console.log('Contact form submission:', data)
    
    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.CONTACT_EMAIL_FROM || 'Snappy Contact Form <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL_TO || 'robert@snappy.ai',
            subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Company:</strong> ${data.company}</p>
              <p><strong>Role:</strong> ${data.role}</p>
              <p><strong>Company Size:</strong> ${data.companySize}</p>
              <p><strong>Project Timeline:</strong> ${data.projectTimeline}</p>
              <p><strong>Budget:</strong> ${data.budget}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message.replace(/\n/g, '<br>')}</p>
            `,
          }),
        })

        if (!response.ok) {
          console.error('Resend API error:', await response.text())
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Don't fail the whole request if email fails
      }
    }
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you within 24 hours.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}