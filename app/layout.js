import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE_URL = "https://www.nimsaradev.com";
const TITLE = "Nimsara Liyanage | Software Engineer. AI | ML";
const DESCRIPTION =
  "Computer Engineering graduate and Associate Software Engineer specializing in scalable mobile & backend software, Agentic AI, LLMs, RAG, machine learning & deep learning.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Nimsara Liyanage",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Agentic AI",
    "LLM",
    "RAG",
    "Flutter Developer",
    "Mobile Developer",
    "Backend Developer",
    "Computer Engineering",
    "University of Jaffna",
    "Sri Lanka",
    "Portfolio",
  ],
  authors: [{ name: "Nimsara Liyanage", url: SITE_URL }],
  creator: "Nimsara Liyanage",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nimsara Liyanage",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nimsara Liyanage",
  url: SITE_URL,
  image: `${SITE_URL}/images/Nimsara5.png`,
  jobTitle: "Associate Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Aagee AI",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Jaffna",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  email: "mailto:t.nimsaraliyanage@gmail.com",
  sameAs: [
    "https://github.com/NimsaraLiyanage",
    "https://www.linkedin.com/in/nimsaraliyanage/",
  ],
  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Agentic AI",
    "Flutter",
    "Mobile Development",
    "Backend Development",
    "AWS",
    "Azure",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nimsara Liyanage",
  url: SITE_URL,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
