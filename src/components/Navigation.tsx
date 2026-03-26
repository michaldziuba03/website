import { useState, useEffect } from "react";
import { Container } from "./Container";
import { LuMenu, LuX } from "react-icons/lu";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Container>
            <header className="w-full flex justify-between items-center pb-6 pt-10">
                <a href="/" className={`font-bold text-xl z-20 ${isOpen ? 'fixed left-4 top-10 sm:static' : 'relative'}`}>mddev_</a>
                
                {/* Desktop Nav */}
                <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-foreground/80">
                    <a href="/" className="hover:text-foreground transition-colors">Home</a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Resume</a>
                    <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`sm:hidden z-20 text-foreground/80 hover:text-foreground transition-colors ${isOpen ? 'fixed right-4 top-10' : 'relative'}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 z-10 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center sm:hidden">
                        <nav className="flex flex-col items-center gap-8 text-xl font-medium text-foreground/80">
                            <a href="/" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">Home</a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">Resume</a>
                            <a href="/blog" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">Blog</a>
                        </nav>
                    </div>
                )}
            </header>
        </Container>
    );
}
