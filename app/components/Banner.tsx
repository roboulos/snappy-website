export default function Banner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-container mx-auto px-6 py-3 flex items-center justify-center text-sm">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" stroke="#f59e0b" strokeWidth="2"/>
            <path d="M10 5V10L13 13" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <p className="text-amber-900">
            We're launching our comprehensive MCP implementation guide –{' '}
            <a href="#" className="font-semibold text-amber-700 hover:text-amber-800 underline">
              Get early access
            </a>
          </p>
        </div>
        <button className="ml-4 text-amber-700 hover:text-amber-800">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}