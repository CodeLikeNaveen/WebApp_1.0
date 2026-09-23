import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Naveen Reddu - Portfolio",
  description: "Explore Naveen Reddu's portfolio, featuring software projects, technical skills, experience, and modern web development work.",
  keywords: [
    "Naveen Reddu",
    "naveen reddu",
    "CodeLikeNaveen",
    "Code Like Naveen",
    "code like naveen",
    "MERN Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Naveen Reddu" }],
  openGraph: {
    title: "Naveen Reddu | My Latest Portfolio Website",
    description: "Explore Naveen Reddu's portfolio, projects, skills, and experience.",
    url: "https://naveenreddu.vercel.app/",
    siteName: "Naveen Reddu",
    type: "website",
    
  },
  verification: {
    google: "7QRmWQgqF8s25SaaQjGuWRmojbvXnY6s81NSsWYvhUs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className={`${outfit.className} ${ovo.className} h-full antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >{children}</body>
    </html>
  );
}
