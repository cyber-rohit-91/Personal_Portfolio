import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  FileText,
  ExternalLink,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

import collegeImg from "@/assets/education/college_img.jpeg";
import schoolImg from "@/assets/education/school_img.png";
// import bTechPdf from "@/assets/files/education_pdf/B Tech.pdf";
// import hsMarkSheetPdf from "@/assets/files/education_pdf/HS MARK SHEET.pdf";

const educationData = [
  {
    id: 1,
    school: "Dr. Bhimrao Ambedkar University (DBRAU) Agra",
    location: "Agra, Uttar Pradesh, India",
    duration: "July 2023 - June 2026",
    degree: "Bachelor of Commerce (B.Com.)",
    grade: "CGPA: ... (..%)",
    image: collegeImg,
    // resultUrl: bTechPdf,
    coursework: [
      "Accounting",
    ],
    description:
      "Completed a Bachelor of Commerce while independently developing practical skills in cybersecurity, ethical hacking, penetration testing, and web application security through professional certifications, hands-on labs, and self-directed learning."
  },
  {
    id: 2,
    school: " Chaudhary RajVeer Singh College",
    location: "Mathura, Up, India",
    duration: "June 2019 - July 2021",
    degree: "Higher Secondary ",
    grade: "Percentage: 72%",
    image: schoolImg,
    // resultUrl: hsMarkSheetPdf,
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "hindi",
      "English",
    ],
    description:
       "Built a strong foundation in mathematics, science, and analytical thinking, "
    },
];

const Education = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-1 "
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8 text-cyan-400 " />
          <h2 className="text-4xl font-bold text-cyan-400 ">Education</h2>
        </motion.div>
<hr className="h-px border-0 bg-white/50 hover:bg-cyan-400/90 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] mt-0 mb-10" />

      </ScrollAnimation>

      <div className="space-y-12  ">
        {educationData.map((edu) => (
          <ScrollAnimation key={edu.id}>
            <div className="relative bg-gray-800/50 border border-cyan-400 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all">
              <div className="absolute top-0 right-0 z-50 bg-slate-950 border-b border-l border-cyan-400  backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-300 " />
                <span className="text-gray-300 text-green-300 ">{edu.duration}</span>
              </div>

              <div className="grid md:grid-cols-[350px,1fr] ">
                <div className="relative h-96 md:h-full overflow-hidden p-2 ">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    loading="lazy"
                    width={350}
                    height={400}
                    className="w-full h-full object-fit rounded border "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                      <div className="flex items-center gap-2  mb-1">
                        <MapPin className="w-4 h-4  " />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Award className="w-4 h-4 " />
                        <span className="">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-l border-cyan-400">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <h4 className="text-lg font-semibold text-yellow-400">{edu.degree}</h4>
                  </div>

                  <div className="flex items-start gap-2 text-gray-300 mb-6">
                    <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed ">{edu.description}</p>
                  </div>

                  {edu.coursework && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 ">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm "
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.subjects && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 ">
                        {edu.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <motion.a
                    href={edu.resultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-cyan-400 text-green-300 items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Result
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Education;
