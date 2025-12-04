import { useState } from "react";
import Input from "./ui/input";
import { CopyIcon, ArrowRight, ArrowLeft } from "lucide-react";
import ThemeSwitcher from "./ui/theme_switcher";
import Button from "./ui/button";
import Footer from "./Footer";

interface PasswordGateProps {
  correctPassword: string;
}

export default function PasswordGate({ correctPassword }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    setError("");

    if (password === correctPassword) {
      window.dispatchEvent(new CustomEvent("password-authenticated"));
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dami@jointabs.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="h-full flex flex-col py-10 items-center justify-center min-h-screen px-4 sm:px-6">
      <div className="flex max-w-200 w-full items-center justify-between">
        <Button onClick={handleBack}>
          <ArrowLeft size={18} className="text-dark-text" strokeWidth={2.5} />
          Back
        </Button>
        <ThemeSwitcher />
      </div>
      <div className="space-y-2.5 flex justify-center flex-col w-full h-full max-w-md">
        <div className="space-y-1.5">
          <h4>Enter Password to continue</h4>
          <p className="text-xs leading-5">
            This case study is not publicly available due to non-disclosure
            agreements. To request access, contact me for a password. Access is
            limited to recruiters and potential clients. Thank you for
            understanding.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="flex-1 min-w-0">
            <Input
              hasLock
              placeholder="Enter password..."
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && password.length > 0) {
                  handleSubmit();
                }
              }}
              isError={!!error}
              required
              autoComplete="off"
              className="w-full"
            />
          </div>
          {password.length > 0 ? (
            <button
              type="submit"
              className="cursor-pointer p-2.5 sm:p-3 h-[42px] sm:h-auto flex-shrink-0 rounded-xl bg-dark-text hover:opacity-70 transition-opacity"
              aria-label="Submit password"
            >
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="text-background sm:w-5 sm:h-5"
              />
            </button>
          ) : undefined}
        </form>
        <div>
          <p className="flex flex-wrap relative items-center gap-1 text-xs">
            Need access, request password{" "}
            <a
              href="mailto:dami@jointabs.com"
              className="text-dark-text font-normal cursor-pointer sm:!hidden"
            >
              reach out
            </a>
            <span
              className="hidden sm:inline text-dark-text font-normal cursor-pointer break-all"
              onClick={copyEmail}
            >
              dami@jointabs.com
            </span>
            <button
              style={{ opacity: copied ? 0 : 1 }}
              onClick={copyEmail}
              className="hidden sm:block cursor-pointer transition-opacity hover:opacity-70 flex-shrink-0"
              aria-label="Copy email to clipboard"
            >
              <CopyIcon size={14} strokeWidth={2.5} className="text-link" />
            </button>
            <span
              style={{ display: !copied ? "none" : "block" }}
              className="hidden sm:block font-normal absolute -right-[10px] text-link"
            >
              Yaay! Speak soon! 😄
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
