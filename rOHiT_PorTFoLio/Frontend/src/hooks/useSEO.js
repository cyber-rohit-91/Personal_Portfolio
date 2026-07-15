import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://rk-portfolio-8.netlify.app/";

const PAGE_META = {
  "/": {
    title: "Rohit Kumar - Cyber Security Analyst | CEH v13 | VAPT & Web Security",
    description:
      "Rohit Kumar — Certified Ethical Hacker (CEH v13) and Cyber Security Analyst specializing in Web Application Security, VAPT, Penetration Testing, OWASP Top 10, and ethical hacking tools.",
  },

  "/about": {
    title: "About Rohit Kumar | CEH v13 | Cyber Security Analyst & Ethical Hacker",
    description:
      "Learn about Rohit Kumar — Certified Ethical Hacker (CEH v13) focused on Web Application Security, Vulnerability Assessment, Penetration Testing, security research, and ethical hacking methodologies.",
  },

  "/projects": {
    title: "Projects - Rohit Kumar | Cyber Security Projects & Penetration Testing Labs",
    description:
      "Explore cybersecurity projects by Rohit Kumar including web application penetration testing, vulnerability assessments, OWASP Top 10 testing, security labs, and professional security reports.",
  },

  "/skills": {
    title: "Skills - Rohit Kumar | CEH v13, VAPT, Web Application Security & Ethical Hacking",
    description:
      "Technical skills of Rohit Kumar including CEH v13, OWASP Top 10, Burp Suite, Kali Linux, Nmap, Metasploit, Wireshark, SQL Injection, XSS, vulnerability assessment, and penetration testing.",
  },

  "/experience": {
    title: "Experience - Rohit Kumar | Cyber Security Analyst | VAPT Engineer",
    description:
      "Cyber security experience of Rohit Kumar including ethical hacking labs, web application security testing, vulnerability assessments, penetration testing practices, and security analysis.",
  },

  "/education": {
    title: "Education - Rohit Kumar | B.Com Graduate | CEH v13 Cyber Security",
    description:
      "Educational background of Rohit Kumar including Bachelor of Commerce (B.Com) and Certified Ethical Hacker (CEH v13) cybersecurity certification.",
  },

  "/certificates": {
    title: "Certificates - Rohit Kumar | CEH v13 & Cyber Security Certifications",
    description:
      "Cyber security certifications and achievements of Rohit Kumar including Certified Ethical Hacker (CEH v13) and professional security training credentials.",
  },

  "/contact": {
    title: "Contact Rohit Kumar | Cyber Security Analyst | VAPT Engineer",
    description:
      "Get in touch with Rohit Kumar for Cyber Security Analyst, VAPT Engineer, Web Application Security, penetration testing opportunities, and security collaborations.",
  },
};

const FALLBACK_META = {
  title: "Rohit Kumar - Cyber Security Analyst | CEH v13 | Ethical Hacker",
  description:
    "Portfolio of Rohit Kumar — Certified Ethical Hacker (CEH v13) specializing in Web Application Security, VAPT, Penetration Testing, Vulnerability Assessment, and Cyber Security.",
};



export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
