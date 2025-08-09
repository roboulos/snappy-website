export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-container mx-auto flex items-center justify-between h-20 px-8">
        <div className="flex items-center gap-2">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path 
              d="M16 2L4 8V16C4 22.6274 8.68629 28 16 28C23.3137 28 28 22.6274 28 16V8L16 2Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M16 10V22M10 16H22" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-2xl font-bold text-textHeading">Snappy</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-textBody hover:text-primary font-medium transition-colors flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L3 7V13C3 16.3137 5.68629 19 10 19C14.3137 19 17 16.3137 17 13V7L10 2Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Services
          </a>
          <a href="#about" className="text-textBody hover:text-primary font-medium transition-colors flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            About
          </a>
          <a href="#resources" className="text-textBody hover:text-primary font-medium transition-colors flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5C4 3.89543 4.89543 3 6 3H14C15.1046 3 16 3.89543 16 5V17L10 14L4 17V5Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Resources
          </a>
          <a href="#newsletter" className="text-textBody hover:text-primary font-medium transition-colors flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5H17V15H3V5Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 5L10 10L17 5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Newsletter
          </a>
        </div>
        <button className="md:hidden text-textBody">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}