"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PRIMARY_GRADIENT = "bg-gradient-to-r from-purple-600 to-blue-600";
const SECONDARY_BG = "bg-gray-800 hover:bg-gray-700";
const TEXT_PRIMARY = "text-white";
const TEXT_SECONDARY = "text-gray-300";
const TEXT_TERTIARY = "text-gray-400";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const roles = [
      "Backend .NET Developer",
      "ASP.NET Core Specialist",
      "MySQL & SQL Server Expert",
      ".NET Full Track",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      textElement.textContent = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1);

      charIndex += isDeleting ? -1 : 1;
      typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-32 lg:pt-0"
    >
      <div className="container px-4 md:px-6 z-10 w-full">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT — Text content */}
          <div className="flex-1 text-left max-w-xl">
            <span className={`px-4 py-1 mb-6 inline-block rounded-full text-sm font-medium ${SECONDARY_BG} ${TEXT_SECONDARY}`}>
              Welcome to my portfolio
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                Ahmed Kottb
              </span>
            </h2>

            <div className={`text-xl md:text-2xl ${TEXT_SECONDARY} mb-8 h-8`}>
              I'm a{" "}
              <span ref={textRef} className={`${TEXT_PRIMARY} font-medium`}></span>
            </div>

            <p className={`${TEXT_TERTIARY} mb-10 text-lg leading-relaxed`}>
              I build robust, scalable, and high-performance backend systems
              using ASP.NET Core, C#, MySQL, and SQL Server with clean architecture principles.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className={`px-6 py-3 rounded-lg ${PRIMARY_GRADIENT} ${TEXT_PRIMARY} font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:scale-105`}
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className={`px-6 py-3 rounded-lg ${SECONDARY_BG} ${TEXT_PRIMARY} font-medium transition-all hover:scale-105`}
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT — Illustration from public folder */}
          <div className="flex-shrink-0 w-full lg:w-[480px] xl:w-[520px] flex items-center justify-center">
            <Image
              src="/backend_illustration.png"
              alt="Backend Developer Illustration"
              width={520}
              height={420}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>

        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className={`${TEXT_TERTIARY} hover:${TEXT_PRIMARY} transition-colors`}>
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
