import {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  Wrench,
  Monitor,
  ShieldCheck,
  Bug,
  Users,
} from "lucide-react";


import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  ReactLogo,
  TypeScriptLogo,
  NodeJSLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  ApacheLogo,
  GitHubLogo,
  TailwindLogo,
  NextjsLogo,
  VercelLogo,
  NetlifyLogo,
  PythonLogo,
  ReduxLogo,
  ExpressLogo,
  BcryptLogo,
  JWTLogo,
  AWSLogo,
  RenderLogo,
  PostmanLogo,
  BashLogo,
  // WindowsLogo,
  // UbuntuLogo,
  // LinuxLogo,
  HTMLLogo,
  CSSLogo,
  JavaScriptLogo,
  BootstrapLogo,
  PowerShellLogo,
  MySQLLogo,
  TeamworkLogo,
  CommunicationLogo,
  DebuggingLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
  TryHackMeLogo,
  PortSwiggerLogo,
  SecurityLabsLogo,
  CyberSecurityLogo,
  WebSecurityLogo,
  NetworkingLogo,
  CEHLogo,
  MobileSecurityLogo,
  SQLLogo,
  WindowsServerLogo,
  PentestingLogo,
  AWSSecurityLogo,
  
NmapLogo,
WiresharkLogo,
NetcatLogo,
ZenmapLogo,
BurpSuiteLogo,
OWASPLogo,
SQLMapLogo,
NiktoLogo,
GobusterLogo,
WappalyzerLogo,
DVWALogo,
MetasploitableLogo,
MSFVenomLogo,
HydraLogo,
HashcatLogo,
MetasploitLogo,
JohnLogo,



} from "@/components/TechLogos";

const skills = [



  {
    category: "Networking Security",
    icon: <ShieldCheck className="w-6 h-6" />,
    items: [
      { name: "Networking", icon: <NetworkingLogo /> },
    ],
  },


  {
    category: "Operating Systems",
    icon: <Monitor className="w-6 h-6" />,
    items: [
      { name: "Windows", icon: <WindowsLogo /> },
      { name: "Ubuntu", icon: <UbuntuLogo /> },
      { name: "Linux", icon: <LinuxLogo /> },
      { name: "Windows Server", icon: <WindowsServerLogo /> },

    ],
  },


    {
    category: "Cyber Security",
    icon: <ShieldCheck className="w-6 h-6" />,
    items: [
      { name: "Fundamentals", icon: <CyberSecurityLogo /> },
      { name: "Web Application Security", icon: <WebSecurityLogo /> },
      { name: "Penetration Testing", icon: <PentestingLogo /> },
      { name: "CEH v13", icon: <CEHLogo /> },
      { name: "Mobile Application Security", icon: <MobileSecurityLogo /> },
      { name: "AWS Security", icon: <AWSSecurityLogo /> },
    ],
  },


   {
    category: "Programming & Scripting Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "Python", icon: <PythonLogo /> },
      { name: "Bash", icon: <BashLogo /> },
      { name: "PowerShell", icon: <PowerShellLogo /> },
      { name: "SQL", icon: <SQLLogo /> },
    ],
  },

 

{
    category: "Networking Security Tools ",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "Nmap", icon: <NmapLogo /> },
      { name: "Wireshark", icon: <WiresharkLogo /> },
      { name: "Netcat", icon: <NetcatLogo /> },
      { name: "Zenmap", icon: <ZenmapLogo /> },

    ],
  },

      {
    category: "Web Security Tools ",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "Burp", icon: <BurpSuiteLogo /> },
      { name: "OWASP", icon: <OWASPLogo /> },
      { name: "SQLMap", icon: <SQLMapLogo /> },
      { name: "Nikto", icon: <NiktoLogo /> },
      { name: "Gobuster", icon: <GobusterLogo /> },
      { name: "Wappalyzer", icon: <WappalyzerLogo /> },
      { name: "DVWA", icon: <DVWALogo /> },
      { name: "Metasploitable2", icon: <MetasploitableLogo /> },

    ],
  },


     {
    category: "Penetration Testing Tools ",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "msfvenom", icon: <MSFVenomLogo /> },
      { name: "Hydra", icon: <HydraLogo /> },
      { name: "Hashcat", icon: <HashcatLogo /> },
      { name: "Metasploit Framework", icon: <MetasploitLogo /> },
      { name: "John the Ripper", icon: <JohnLogo /> },
    ],
  },

  

  {
    category: "Web Fundamentals",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "HTML", icon: <HTMLLogo /> },
      { name: "CSS", icon: <CSSLogo /> },
      // { name: "Bootstrap", icon: <BootstrapLogo /> },
      // { name: "Tailwind CSS", icon: <TailwindLogo /> },
      { name: "React.js", icon: <ReactLogo /> },
      // { name: "Node.js", icon: <NodeJSLogo /> },
      // { name: "Express.js", icon: <ExpressLogo /> },
      // { name: "MongoDB", icon: <MongoDBLogo /> },
      { name: "MySQL", icon: <MySQLLogo /> },

    ],
  },


  {
    category: "Version Control & Deployment",
    icon: <GitBranch className="w-6 h-6" />,
    items: [
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitHubLogo /> },
      { name: "Netlify", icon: <NetlifyLogo /> },
    ],
  },

  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Postman", icon: <PostmanLogo /> },
      { name: "Apache", icon: <ApacheLogo /> },
    ],
  },

  

  {
    category: "Cyber Security Labs",
    icon: <Bug className="w-6 h-6" />,
    items: [
      { name: "TryHackMe", icon: <TryHackMeLogo /> },
      { name: "PortSwigger Academy", icon: <PortSwiggerLogo /> },
      { name: "Security Labs", icon: <SecurityLabsLogo /> },
    ],
  },

  {
    category: "Soft Skills",
    icon: <Users className="w-6 h-6" />,
    items: [
      { name: "Teamwork", icon: <TeamworkLogo /> },
      { name: "Communication", icon: <CommunicationLogo /> },
      { name: "Debugging", icon: <DebuggingLogo /> },
    ],
  },


  
  
];



const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-1 text-cyan-400">
          Technical Skills
        </h2>
<hr className="h-px border-0 bg-white/40 hover:bg-cyan-400/90 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] mt-0 mb-7" />

      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Hands-on expertise in Web Application Security, Vulnerability Assessment, Penetration Testing, and Cyber Security tools.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-400  backdrop-blur-sm hover:bg-gray-800/70 transition-all">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;






