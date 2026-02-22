"use client"

import { useRef, useEffect, useState } from "react"
import {
  Server,
  ShieldCheck,
  Layers,
  Code2,
  Database,
  GitBranch,
  Terminal,
  Cpu,
  Lock,
  Workflow,
  Boxes,
  SquareCode,
  Container,
  Network,
} from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  const skills = [
    { name: "C#", icon: <SquareCode className="text-[#239120]" size={36} /> },
    { name: "ASP.NET Core", icon: <Server className="text-[#512BD4]" size={36} /> },
    { name: "MySQL", icon: <Database className="text-[#4479A1]" size={36} /> },
    { name: "SQL Server", icon: <Database className="text-[#CC2927]" size={36} /> },
    { name: "REST APIs", icon: <Network className="text-purple-400" size={36} /> },
    { name: "Clean Architecture", icon: <Layers className="text-blue-400" size={36} /> },
    { name: "OOP & SOLID", icon: <Code2 className="text-green-400" size={36} /> },
    { name: "Authentication", icon: <ShieldCheck className="text-yellow-400" size={36} /> },
  ]

  const technologies = [
    { name: "Git", icon: <GitBranch className="text-[#F05032]" size={24} /> },
    { name: "GitHub", icon: <Boxes className="text-white" size={24} /> },
    { name: "Postman", icon: <Workflow className="text-[#FF6C37]" size={24} /> },
    { name: "Swagger", icon: <Code2 className="text-[#85EA2D]" size={24} /> },
    { name: "Entity Framework", icon: <Cpu className="text-[#512BD4]" size={24} /> },
    { name: "Docker", icon: <Container className="text-[#2496ED]" size={24} /> },
    { name: "LINQ", icon: <Terminal className="text-purple-400" size={24} /> },
    { name: "JWT & Security", icon: <Lock className="text-yellow-400" size={24} /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I specialize in backend development with .NET and C#. Here's an overview of my technical
            skills, tools, and technologies I work with daily.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Core Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">Core Competencies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="font-medium text-center">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
