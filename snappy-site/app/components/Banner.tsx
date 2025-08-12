export default function Banner() {
  return (
    <div className="bg-primary/10 border-b border-primary/20">
      <div className="max-w-container mx-auto px-6 py-3 flex items-center justify-center text-sm">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            <path d="M10 5V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary"/>
          </svg>
          <p className="text-primary">
            🚀 Free MCP Setup Workshop - Every Wednesday –{' '}
            <a href="/events" className="font-semibold text-[#3B7EA1] hover:text-[#3B7EA1]/80 underline">
              See all workshops →
            </a>
          </p>
        </div>
        <button className="ml-4 text-primary hover:text-primary/80">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}