import { redirect } from 'next/navigation'

// Redirect to services page for now
export default function ToolsPage() {
  redirect('/services')
}