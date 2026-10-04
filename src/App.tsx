import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Benefits } from "./components/Benefits";
import { Programs } from "./components/Programs";
import { Process } from "./components/Process";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CookieNotice } from "./components/CookieNotice";
import { LegalPage, type LegalId } from "./components/LegalPage";

const legalPages = new Set<LegalId>(["mentions", "confidentialite", "cookies"]);

function readPage(): LegalId | "home" {
  const id = window.location.hash.replace("#", "");
  return legalPages.has(id as LegalId) ? (id as LegalId) : "home";
}

export default function App() {
  const [page, setPage] = useState<LegalId | "home">(readPage);

  useEffect(() => {
    const onHash = () => {
      const next = readPage();
      setPage(next);
      if (next !== "home") window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (page !== "home") return;
    const id = window.location.hash.replace("#", "");
    if (!id || legalPages.has(id as LegalId)) return;
    document.getElementById(id)?.scrollIntoView();
  }, [page]);

  return (
    <>
      <Header />
      <main>
        {page === "home" ? (
          <>
            <Hero />
            <About />
            <Expertise />
            <Benefits />
            <Programs />
            <Process />
            <Gallery />
            <Contact />
          </>
        ) : (
          <LegalPage page={page} />
        )}
      </main>
      <Footer />
      <CookieNotice />
    </>
  );
}
