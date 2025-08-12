import { redirect } from 'next/navigation'

// Redirect to home page newsletter section
export default function NewsletterPage() {
  redirect('/#newsletter')
}