"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Desktop Quick Shutdown",
      description:
        "A professional C# .NET Windows Forms application that executes system shutdown when users click the mouse 4 times consecutively on the Desktop within 2 seconds. Features global mouse hook integration, system tray management, and administrator-level security.",
      tags: ["C#", ".NET", "Windows Forms", "Windows API", "P/Invoke", "System Tray"],
      liveUrl: "#",
      githubUrl: "https://github.com/BockusBuntin/DesktopQuickShutdown",
    },
    {
      title: "E-Commerce REST API",
      description:
        "A full-featured RESTful API for an e-commerce platform built with ASP.NET Core. Includes authentication with JWT, product management, order processing, and MySQL integration.",
      tags: ["ASP.NET Core", "C#", "MySQL", "JWT Auth", "Entity Framework"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Hospital Management System",
      description:
        "A backend system for managing hospital operations including patient records, doctor schedules, and appointments. Built using Clean Architecture with SQL Server.",
      tags: ["ASP.NET Core", "SQL Server", "Clean Architecture", "C#"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management API",
      description:
        "A RESTful API for task and project management with role-based authorization, user management, and real-time status tracking using ASP.NET Core and MySQL.",
      tags: ["ASP.NET Core", "MySQL", "REST API", "LINQ", "Repository Pattern"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Authentication & Authorization System",
      description:
        "A robust authentication system implementing JWT tokens, refresh tokens, role-based access control (RBAC), and secure password hashing with ASP.NET Core Identity.",
      tags: ["ASP.NET Core Identity", "JWT", "C#", "SQL Server", "RBAC"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Here are some of my backend projects built with .NET and C#. Each project highlights different
            aspects of server-side development, API design, and database management.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              {/* Color banner instead of image */}
              <div className="h-3 bg-gradient-to-r from-purple-600 to-blue-600" />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
