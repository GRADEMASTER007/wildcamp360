import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "wildcamp-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // storage unavailable — stay hidden
    }
  }, []);

  const dismiss = (choice: "accepted" | "dismissed") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
    >
      <div className="container mx-auto max-w-4xl rounded-lg border border-border bg-card shadow-lg p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Cookie className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
          <p className="text-sm text-muted-foreground flex-1">
            We use cookies to keep the site working and to understand how it's used. See our{" "}
            <Link to="/cookie-policy" className="text-primary hover:underline font-medium">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={() => dismiss("dismissed")}>
              Decline
            </Button>
            <Button size="sm" onClick={() => dismiss("accepted")}>
              Accept
            </Button>
            <button
              onClick={() => dismiss("dismissed")}
              aria-label="Dismiss cookie notice"
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
