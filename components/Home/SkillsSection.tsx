

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaNpm } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiWebpack,
  SiVercel,
  SiSass,
} from "react-icons/si"
import { MdDesignServices } from "react-icons/md"

export default function SkillsSection() {


  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={36} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={36} /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={36} /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" size={36} /> },
    { name: "Next.js", icon: <SiNextdotjs size={36} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={36} /> },
    { name: "UI/UX Design", icon: <MdDesignServices className="text-purple-500" size={36} /> },
  ]

  const technologies = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={24} /> },
    { name: "GitHub", icon: <FaGithub size={24} /> },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" size={24} /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" size={24} /> },
    { name: "Webpack", icon: <SiWebpack className="text-[#8DD6F9]" size={24} /> },
    { name: "npm", icon: <FaNpm className="text-[#CB3837]" size={24} /> },
    { name: "Vercel", icon: <SiVercel size={24} /> },
    { name: "SASS/SCSS", icon: <SiSass className="text-[#CC6699]" size={24} /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-delay="100">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto " data-aos="fade-left" data-aos-delay="100">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills and expertise.
          </p>
        </div>

        <div

          className={`grid grid-cols-1 gap-12 transition-all duration-1000 `}
        >
          {/* Core Skills with icons */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center  text-white" data-aos="fade-down" data-aos-delay="100">Core Competencies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill: any, index: any) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer"
                  data-aos={index % 2 === 0 ? "fade-down-right" : "fade-down-left"} data-aos-delay="100"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="font-medium text-center  text-white">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Other technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center  text-white" data-aos="fade-down" data-aos-delay="100">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies.map((tech: any, index: any) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer"
                  data-aos={index % 2 === 0 ? "fade-up-left" : "fade-up-right"} data-aos-delay="100"

                >
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-sm text-center  text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

