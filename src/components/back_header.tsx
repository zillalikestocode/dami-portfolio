import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { CopyIcon } from "lucide-react";
import Button from "./ui/button";
import ThemeSwitcher from "./ui/theme_switcher";

export default function BackHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dami@jointabs.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="relative">
      <div className="flex relative justify-center items-center">
        <div className="hidden md:flex justify-center items-center w-full gap-2">
          <a href="/">
            <Button>Home</Button>
          </a>
          <a href="/about">
            <Button>About</Button>
          </a>
          <a href="/speaking">
            <Button>Speaking</Button>
          </a>
          <a href="mailto:dami@jointabs.com">
            <Button className="block sm:hidden">Email</Button>
          </a>
          <div className="hidden relative sm:flex gap-2 items-center">
            <h4>dami@jointabs.com</h4>

            <button
              style={{ opacity: copied ? 0 : 1 }}
              onClick={handleCopyEmail}
              className="cursor-pointer transition-opacity hover:opacity-70"
              aria-label="Copy email to clipboard"
            >
              <CopyIcon className="text-link" size={14} strokeWidth={2.5} />
            </button>

            <span
              style={{ display: !copied ? "none" : "block" }}
              className=" font-normal text-sm -right-[120px] absolute text-link"
            >
              Yaay! Speak soon! 😄
            </span>
          </div>
        </div>

        <div className="absolute right-0 md:right-[47px] flex items-center gap-4">
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden hover:bg-border rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={2.5} color="var(--color-dark-text)" />
            ) : (
              <Menu
                color="var(--color-dark-text)"
                size={24}
                strokeWidth={2.5}
              />
            )}
          </button>
        </div>
      </div>

      {isMobile && (
        <>
          {isMenuOpen && (
            <div
              className="fixed inset-0 z-40 animate-in fade-in duration-300"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
          )}
          <div
            className={`absolute top-full left-0 right-0 bg-background z-50 transition-all duration-300 ease-in-out mt-2 overflow-hidden ${
              isMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 border-0"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav
              className="flex gap-3 py-4 items-start flex-col"
              role="navigation"
            >
              <a href="/" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full text-left justify-start">Home</Button>
              </a>
              <a href="/about" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full text-left justify-start">
                  About
                </Button>
              </a>
              <a href="/speaking" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full text-left justify-start">
                  Speaking
                </Button>
              </a>
              <a
                href="mailto:dami@jointabs.com"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="text-left w-fit justify-start">Email</Button>
              </a>
              <div className="flex justify-center pt-3">
                <ThemeSwitcher />
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
