import project1 from "@/assets/projects_img/email.png";
import project2 from "@/assets/projects_img/netscan_pro.png";
import project3 from "@/assets/projects_img/password.png";
import project4 from "@/assets/projects_img/web_vuln.png";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Web Vulnerability Scanner",
    description:
      "Comprehensive toolkit for web application security testing featuring automated reconnaissance, vulnerability detection, and OWASP Top 10 testing using Burp Suite and custom scripts.",
    image: project4,
    github:"https://github.com/cyber-rohit-91",
    live:"https://github.com/cyber-rohit-91",
    tags: [
        "Burp Suite",
        "Python",
        "Bash",
        "OWASP Top 10 ",
        "Nmap",
        "HTTP",
    ],
  },
  {
    id: 2,
    title: "Password Strength Analyzer",
    description:
      "Security tool that evaluates password complexity, entropy, common password exposure, and generates strong password recommendations.",
    image: project3,
    github:"https://github.com/cyber-rohit-91",
    live:"https://github.com/cyber-rohit-91",
    tags: [
      "Python",
      "Regex",
      "Cryptography",
      "Security",
    ],
  },
  {
    id: 3,
    title: "NetScan-Pro",
    description:
      "Advanced network reconnaissance tool for host discovery, port scanning, service detection, and traceroute with automated reporting.",
    image: project2,
    github:"https://github.com/cyber-rohit-91",
    live:"https://github.com/cyber-rohit-91",
    tags: ["Linux", "Bash", "Networking", "Monitoring", "NMAP", "Scripting"],
  },
  {
    id: 4,
    title: "Email Phishing Detection System",
    description:
      "Machine learning–based phishing email detection system that analyzes URLs, headers, attachments, and email content to identify malicious messages.",
    image: project1,
    github:"https://github.com/cyber-rohit-91",
    live:"https://github.com/cyber-rohit-91",
    tags: [
          "Python",
          "Scikit-learn",
          "NLP",
          "Cyber Security",
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl text-cyan-400 font-bold mb-2">
          Featured Projects
        </h2>
<hr className="h-px border-0 bg-white/50 hover:bg-cyan-400/90 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] mt-0 mb-10" />

      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-lg  overflow-hidden backdrop-blur-sm h-full flex flex-col border border-cyan-400/70 p-1">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={600}
                height={300}
                className="w-full h-48 object-fit"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-green-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-red-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
