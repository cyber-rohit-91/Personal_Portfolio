// import CEH_v13_Pdf from "@/assets/files/certificates_pdf/CEH_v13_Pdf.pdf";
// import Web_Security_Pdf from "@/assets/files/certificates_pdf/Web_Security_Pdf.pdf";
// import Comming_Soon_Pdf from "@/assets/files/certificates_pdf/Comming_Soon_Pdf.pdf";

import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [

   {
    id: 1,
    title: "Certified Ethical Hacker (CEH v13)",
    issuer: "EC-Council",
    date: "Issued: 15 June 2026",
    // link: CEH_v13_Pdf,
    description:
      "Covers ethical hacking, penetration testing, vulnerability assessment, network security, web application security, reconnaissance, exploitation, and security testing.",
    skills: [
      "Nmap",
      "Wireshark",
      "Metasploit",
      "Kali Linux",
      "Windows Security",
    ],
  },

   {
    id: 2,
    title: "Web Application Penetration Testing",
    issuer: "PortSwigger Academy",
    date: "Issued: Coming Soon",
    // link: Web_Security_Pdf,
    description:
      "Covers web application security, OWASP Top 10, vulnerability assessment, authentication and session testing, API security, and hands-on penetration testing using Burp Suite.",
    skills: [
      "OWASP Top 10",
      "Burp Suite",
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "CSRF",
      "HTTP/HTTPS",
    ],
  },

 {
    id: 3,
    title: "Featured Certification",
    issuer: "Coming Soon",
    date: "Coming Soon",
    // link: Coming_Soon_Pdf,
    description: "Coming Soon...",
    skills: ["Coming Soon"],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-2 text-cyan-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold text-cyan-400">Certificates</h2>

        </motion.div>
<hr className="h-px border-0 bg-white/50 hover:bg-cyan-400/90 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] mt-0 mb-10" />

      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6 ">
        {certificates.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-400 backdrop-blur-sm hover:bg-gray-800/70 transition-all group  h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{cert.title}</h3>
              <div className="text-gray-400 space-y-2 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  

                  {cert.skills.map((skill, index) => (
                        <span
                          key={`${cert.id}-${skill}-${index}`}
                          className="px-2 py-1 text-sm bg-white/10 rounded-full"
                        >
                          {skill}
                        </span>
                    ))}

                </div>
                <div className="mt-auto pt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-blue-300 group-hover:translate-x-2 transition-transform"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
