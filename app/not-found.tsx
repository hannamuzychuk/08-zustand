"use client";
import { Metadata } from "next";
import css from "./page.module.css";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you ale looking for does not exist un the NoteHun application.",
 openGraph: {
    title: "404 - Page Not Found",
    description: "The page you ale looking for does not exist un the NoteHun application.",
    url: "",

    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: "1200", 
        height: "630",
        alt: "NoteHub 404 Not Found",
        }
      ]  
  }
}

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button onClick={() => router.replace("/")}>Go back!</button>
    </>
  );
}
