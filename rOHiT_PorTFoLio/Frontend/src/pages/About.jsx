import cvPdf from "@/assets/files/cv_pdf/RoHiT_KuMAR_Cv_Fresher.pdf";
import profileImg from "@/assets/profile/profile.png";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Briefcase, Code2, Globe, GraduationCap , FlaskConical,ShieldCheck,ScanSearch,FileSearch, } from "lucide-react";
import { Link } from "react-router-dom";
import {FlaskConicalLogo,ShieldCheckLogo,ScanSearchLogo,FileSearchLogo,EthicalHackingLogo,WebAppSecurityLogo,PenetrationTestingLogo,VAPTLogo,} from "@/components/TechLogos";


const achievements = [

  {
  icon: <FlaskConical className="w-6 h-6" />,
  title: "30+ Security Labs",
  description: "Hands-on practice in web application security and penetration testing.",
  },

  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "15+ Security Tools",
    description: "Practical experience with industry-standard cybersecurity tools.",
  },
  {
    icon: <ScanSearch className="w-6 h-6" />,
    title: "OWASP Top 10",
    description: "Hands-on testing and exploitation of common web vulnerabilities",
  },

 {
    icon: <FileSearch className="w-6 h-6" />,
    title: "Security Reports",
    description: "Documented findings with risk assessment and remediation guidance.",
  },


];

const interests = [
  
    "Ethical Hacking", 
    "Web Application Security", 
    "Penetration Testing", 
    "Vulnerability Assessment (VAPT)", 
];

const quickFacts = [
    " Based in Mathura, Uttar Pradesh, India" , 
    " Certified Ethical Hacker (CEH v13)" , 
    " Web Application Security " , 
    " Penetration Testing" , 
    " Cyber Security Analyst | VAPT Engineer" , 
    " Bachelor of Commerce (B.Com.)" , 

];

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-0 text-cyan-400">
          About Me
        </motion.h2>
<hr className="h-px border-0 bg-white/40 hover:bg-cyan-400/90 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] mb-6" />
      </ScrollAnimation>


      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt="Rohit Kumar"
              width={600}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
                I'm a  Certified Ethical Hacker (CEH v13)  and aspiring  Cyber Security Analyst  passionate about  Web Application Security, Vulnerability Assessment (VAPT), and Penetration Testing .
            </p>
<hr className="h-px border-0 bg-white/10 hover:bg-cyan-400/90 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] my-6" />

            <p className="text-gray-300 leading-relaxed">
                  With hands-on experience in  OWASP Top 10 ,  Burp Suite ,  Nmap ,  Wireshark ,  Metasploit ,  SQLMap , and  Kali Linux , I focus on identifying vulnerabilities, assessing security risks, and improving the security of web applications.
            </p>
<hr className="h-px border-0 bg-white/10 hover:bg-cyan-400/90 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] my-6" />

            <p className="text-gray-300 leading-relaxed">
                I'm continuously enhancing my skills through security labs, CTF challenges, and practical penetration testing, with the goal of building a successful career in cybersecurity.
            </p>
<hr className="h-px border-0 bg-white/10 hover:bg-cyan-400/90 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] my-6" />

          </div>

          <div className="pt-4">
            <h3 className="text-2xl text-yellow-400  font-semibold mb-4">
              Quick Facts              
            </h3>
<hr className="w-80 mx-0 border-0 h-px bg-white/40 transition-all duration-300 mt-2 mb-7" />

            <ul className="list-none space-y-3">
              {quickFacts.map((fact) => (
                <motion.li
                  key={fact}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start space-x-4">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Download CV
            </a>
            <Link
              to="/skills"
              className="px-6 py-3 hover:bg-white/10 border border-cyan-400  transition-all duration-300 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              My Skills
            </Link>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-0 text-yellow-400 ">
            Achievements
          </h3>
<hr className="w-80 mx-0 border-0 h-px bg-white/40 transition-all duration-300 mt-2 mb-7" />

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.title}className="bg-white/5 p-6 rounded-xl backdrop-blur-sm  hover:bg-white/10  border border-cyan-400  transition-all duration-300">
                <div className="text-white mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-0 text-yellow-400 ">
            Areas of Interest
          </h3>
<hr className="w-80 mx-0 border-0 h-px bg-white/40 transition-all duration-300 mt-2 mb-7" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3 border-cyan-400 border transition-all duration-300 "
                // className="bg-white/5  "
              >
                {/* <Globe className="w-5 h-5 text-gray-400" /> */}
                <span className="text-green-400 ">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
