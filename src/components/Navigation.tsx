import { Container } from "./Container";

export function Navigation() {
  return (
    <Container
      as="nav"
      className="flex py-4 px-4 sm:py-6 md:py-8 w-full items-center justify-between relative"
    >
      <a href="/" className="font-black text-xl z-50 relative">MD_</a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center text-sm justify-between gap-8 font-medium">
        <a href="/" className="hover:text-primary transition-colors">Home</a>
        <a href="/resume.pdf" className="hover:text-primary transition-colors">Resume</a>
        <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden relative">
        {/* Hamburger Toggle - Hidden Checkbox */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        
        {/* Hamburger Button */}
        <label 
          htmlFor="menu-toggle" 
          className="cursor-pointer z-50 relative w-6 h-6 flex items-center justify-center group"
        >
          <span className="absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary origin-center hamburger-line-top"></span>
          <span className="absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary origin-center hamburger-line-middle"></span>
          <span className="absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary origin-center hamburger-line-bottom"></span>
        </label>

        {/* Mobile Menu Overlay */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-300 ease-in-out"></div>
        
        {/* Mobile Menu */}
        <div className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-40 transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col pt-16 sm:pt-20 px-6 sm:px-8 space-y-4 sm:space-y-6">
            <a 
              href="/" 
              className="text-lg sm:text-xl font-medium py-4 sm:py-3 border-b border-gray-100 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="/resume.pdf" 
              className="text-lg sm:text-xl font-medium py-4 sm:py-3 border-b border-gray-100 hover:text-primary transition-colors"
            >
              Resume
            </a>
            <a 
              href="/blog" 
              className="text-lg sm:text-xl font-medium py-4 sm:py-3 border-b border-gray-100 hover:text-primary transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
