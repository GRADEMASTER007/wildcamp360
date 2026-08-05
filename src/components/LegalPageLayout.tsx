import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  lastUpdated?: string;
  children: ReactNode;
}

const LegalPageLayout = ({ title, description, lastUpdated = "August 2026", children }: LegalPageLayoutProps) => {
  useEffect(() => {
    document.title = `${title} | WildCamp Adventures`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <header className="mb-10 pb-8 border-b border-border">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: {lastUpdated}</p>
          </header>

          <article className="space-y-8 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mb-2 [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_p]:mb-3">
            {children}
          </article>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              This page contains placeholder content maintained by WildCamp Adventures and is not legal advice.
              Questions? Email{" "}
              <a href="mailto:legal@wildcamp.com" className="text-primary hover:underline">
                legal@wildcamp.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
