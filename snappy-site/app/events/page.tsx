'use client'

import { motion } from "framer-motion"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] bg-clip-text text-transparent">
              Weekly MCP Workshops
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Free workshops every week. Learn MCP implementation hands-on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <iframe
            src="https://lu.ma/embed/calendar/cal-AloQSpMMXmJtChQ/events?lt=light"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Can&apos;t make it to a workshop? Let&apos;s talk 1-on-1:
          </p>
          <a
            href="https://calendly.com/robertboulos/45m-vip"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3B7EA1] to-[#5E6B8D] text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Book a Private Session
          </a>
        </motion.div>
      </div>
    </div>
  )
}