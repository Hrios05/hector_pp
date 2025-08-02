"use client";

import Image from "next/image";
import { Home as HomeIcon, Github, Linkedin, Mail, Code, Database, Cpu, Server, Map, BarChart, Layers } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const bubbleContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = bubbleContainerRef.current;
    if (!container) return;

    const bubbles = Array.from(container.children) as HTMLElement[];

    // Initialize positions
    // Updated logic to make bubbles squished with sides touching and add hover effect
    bubbles.forEach((bubble, index) => {
      bubble.style.position = "absolute";
      bubble.style.width = "100px"; // Ensured size remains large
      bubble.style.height = "100px"; // Ensured size remains large
      bubble.style.borderRadius = "50%"; // Ensured perfect circular shape
      bubble.style.transition = "all 0.3s ease"; // Smooth transition for hover effect

      // Arrange bubbles in a squished layout with sides touching
      const row = Math.floor(index / 5); // Assuming 5 bubbles per row
      const col = index % 5;
      const spacing = 100; // Reduced spacing to make sides touch

      bubble.style.left = `${col * spacing}px`;
      bubble.style.top = `${row * spacing}px`;

      // Add slight wobble animation
      bubble.style.animation = `wobble 2s infinite ease-in-out`; // Reduced duration for more frequent wobble

      // Add hover effect for color change and glow
      bubble.addEventListener("mouseover", () => {
        bubble.style.backgroundColor = "#ff69b4"; // Change to pink
        bubble.style.boxShadow = "0 0 15px #ff69b4"; // Add glow effect
      });

      bubble.addEventListener("mouseout", () => {
        bubble.style.backgroundColor = ""; // Reset color
        bubble.style.boxShadow = ""; // Remove glow effect
      });
    });

    // Add wobble keyframes to the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes wobble {
        0%, 100% {
          transform: translate(0, 0);
        }
        25% {
          transform: translate(3px, -3px); // Increased translation values
        }
        50% {
          transform: translate(-3px, 3px); // Increased translation values
        }
        75% {
          transform: translate(3px, 3px); // Increased translation values
        }
      }
    `, styleSheet.cssRules.length);
  }, []);

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 text-[rgb(24_24_27/var(--tw-text-opacity,1))]">
      <header style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} className="flex justify-center items-center gap-4 w-full max-w-4xl fixed top-0 z-10 backdrop-blur">
        <HomeIcon size={24} strokeWidth={1.5} className="hover:text-gray-500 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        <span className="divider">|</span>
        <Github size={24} strokeWidth={1.5} className="hover:text-gray-500 cursor-pointer" onClick={() => window.open('https://github.com/Hrios05', '_blank')} />
        <Linkedin size={24} strokeWidth={1.5} className="hover:text-gray-500 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/hectorrios05/', '_blank')} />
        <Mail size={24} strokeWidth={1.5} className="hover:text-gray-500 cursor-pointer" onClick={() => window.location.href = 'mailto:hectorrios.tech@gmail.com'} />
        <span className="divider">|</span>
        <button id="Contact Me" className="rounded-full bg-zinc-900 text-white px-4 py-2 hover:bg-gray-900" onClick={() => {
          const profilePicture = document.querySelector('#send-email-section .flex.justify-center');
          if (profilePicture) {
            profilePicture.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          Contact Me
        </button>
      </header>

      <main className="text-center mt-16">
        <Image
          src="/blackcat.png"
          alt="Profile picture"
          width={200}
          height={200}
          className="rounded-full w-28 h-28 object-cover mt-16"
        />
        <h1 className="text-5xl font-bold mt-4">
          Hey, I&#39;m Hector. <br /> Leader & Engineer.
        </h1>
        <p className="text-lg mt-2">
          I thrive at the intersection of creativity and logic, crafting solutions
          that are as enjoyable as they are effective. Spending my years of learning computer science has been a journey of turning
          challenges into opportunities.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="/HectorRiosResume.pdf" download className="rounded-full bg-zinc-900 text-white px-4 py-1 text-sm hover:bg-gray-700 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Resume
          </a>
          <button id="open-opportunities" className="rounded-full bg-green-500 text-white px-4 py-1 text-sm hover:bg-green-500">
            Open to Opportunities
          </button>
        </div>

        <section className="mt-32">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-6">
            Passionate about technology and innovation, I specialize in creating impactful solutions that bridge the gap between technical and human needs. With a strong foundation in computer science and hands-on experience in AI, software engineering, and leadership, I thrive in dynamic environments that challenge me to grow and contribute.
          </p>

          <hr className="my-8 border-t border-gray-300" />

          {/* Programming Languages */}
          <div className="flex items-center gap-2 mb-4">
            <Code size={24} strokeWidth={1.5} className="text-blue-500" />
            <h3 className="text-2xl font-semibold">Programming Languages</h3>
          </div>
          <div className="relative grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {['Java', 'Swift', 'Python', 'JavaScript', 'C++', 'C', 'TypeScript'].map((lang, index) => (
              <span
                key={index}
                className={`flex items-center gap-1 px-2 py-1 rounded-full shadow-lg w-fit text-xs text-white ${['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500', 'bg-gray-500', 'bg-cyan-500'][index]}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <i className={`devicon-${lang.toLowerCase()}-plain text-sm`}></i> {lang}
              </span>
            ))}
          </div>

          {/* Software & Technologies */}
          <div className="flex items-center gap-2 mb-4">
            <Cpu size={24} strokeWidth={1.5} className="text-green-500" />
            <h3 className="text-2xl font-semibold">Software & Technologies</h3>
          </div>
          <div className="relative grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {['React', 'Springboot', 'MongoDB', 'Express JS', 'Node.JS', 'Pandas', 'TensorFlow', 'Jupyter Notebooks', 'AWS', 'scikit-learn', 'Docker'].map((tech, index) => (
              <span
                key={index}
                className={`flex items-center gap-1 px-2 py-1 rounded-full shadow-lg w-fit text-xs text-white ${['bg-indigo-500', 'bg-teal-500', 'bg-pink-500', 'bg-orange-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-gray-500', 'bg-purple-500', 'bg-cyan-500', 'bg-amber-500', 'bg-lime-500'][index]}`}
                style={{ height: '32px', borderRadius: '9999px' }}
              >
                <i className={`devicon-${tech.toLowerCase().replace(/ /g, '')}-plain text-sm`}></i> {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-38">
          <h2 className="text-3xl font-bold mb-8 text-left">Work Experience</h2>

          <div className="space-y-8">
            {/* Entry Template */}
            <div className="grid grid-cols-12 items-center gap-6">
              <div className="col-span-3">
                <p className="text-sm text-gray-400">Jan 2025 – Present</p>
              </div>
              <div className="col-span-9 text-right">
                <p className="text-lg font-medium text-black">MLT Fellow</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-md shadow-sm">
                  👤 MLT
                </span>
              </div>
            </div>

            <div className="grid grid-cols-12 items-center gap-6">
              <div className="col-span-3">
                <p className="text-sm text-gray-400">Feb 2025 – Present</p>
              </div>
              <div className="col-span-9 text-right">
                <p className="text-lg font-medium text-black">ML/AI Fellow</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-md shadow-sm">
                  📚 Break Through Tech
                </span>
              </div>
            </div>

            <div className="grid grid-cols-12 items-center gap-6">
              <div className="col-span-3">
                <p className="text-sm text-gray-400">Jan 2025 – Mar 2025</p>
              </div>
              <div className="col-span-9 text-right">
                <p className="text-lg font-medium text-black">SWE Intern</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md shadow-sm">
                  💻 CodeDay
                </span>
              </div>
            </div>

            <div className="grid grid-cols-12 items-center gap-6">
              <div className="col-span-3">
                <p className="text-sm text-gray-400">Oct 2024 – Jan 2025</p>
              </div>
              <div className="col-span-9 text-right">
                <p className="text-lg font-medium text-black">UG Research</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md shadow-sm">
                  🧪 SJSU
                </span>
              </div>
            </div>

            <div className="grid grid-cols-12 items-center gap-6">
              <div className="col-span-3">
                <p className="text-sm text-gray-400">Sep 2023 – May 2024</p>
              </div>
              <div className="col-span-9 text-right">
                <p className="text-lg font-medium text-black">ML Intern</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-md shadow-sm">
                  🤖 SJSU
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-48">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="flex flex-col gap-12">
            {/* SafeRoute Card */}
            <a href="https://github.com/Hrios05/SafeRouteSJ" target="_blank" rel="noopener noreferrer" className="block p-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-4 border-transparent hover:border-green-300">
              <h3 className="text-xl font-semibold mb-4 text-white">SafeRoute</h3>
              <p className="text-sm text-gray-200 mb-6">Provides the safest route using crime reports and datasets.</p>
              <div className="flex items-center gap-4 text-sm text-gray-100 font-semibold">
                <Code size={16} /> JavaScript
                <Server size={16} /> Node.js
                <Map size={16} /> Google Maps API
              </div>
              <p className="text-xs text-gray-300 italic mt-4">Click to view the GitHub repository</p>
            </a>

            {/* CensusIncomeClassification Card */}
            <a href="https://github.com/Hrios05/CensusML" target="_blank" rel="noopener noreferrer" className="block p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-4 border-transparent hover:border-orange-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Census Income Classification</h3>
              <p className="text-sm text-gray-200 mb-6">Predicts income levels using the 1994 Census Income Dataset with machine learning models.</p>
              <div className="flex items-center gap-4 text-sm text-gray-100 font-semibold">
                <Cpu size={16} /> Python
                <BarChart size={16} /> scikit-learn
                <Layers size={16} /> TensorFlow
              </div>
              <p className="text-xs text-gray-300 italic mt-4">Click to view the GitHub repository</p>
            </a>

            {/* EquiBot Card */}
            <a href="https://github.com/Hrios05/EquiBot" target="_blank" rel="noopener noreferrer" className="block p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-4 border-transparent hover:border-blue-300">
              <h3 className="text-xl font-semibold mb-4 text-white">EquiBot</h3>
              <p className="text-sm text-gray-200 mb-6">An iOS app simplifying California law navigation with a chatbot interface.</p>
              <div className="flex items-center gap-4 text-sm text-gray-100 font-semibold">
                <Code size={16} /> Swift
                <Database size={16} /> Firebase
                <Cpu size={16} /> Python
              </div>
              <p className="text-xs text-gray-300 italic mt-4">Click to view the GitHub repository</p>
            </a>
          </div>
        </section>

        <section id="send-email-section" className="mt-48 w-full max-w-6xl mx-auto grid grid-cols-12 gap-8 items-center">
          {/* Profile Picture */}
          <div className="col-span-4 flex justify-center">
            <Image
              src="/hector.png"
              alt="Profile picture"
              width={200}
              height={200}
              className="rounded-full w-38 h-38 object-cover"
            />
          </div>

          {/* Email Form */}
          <div className="col-span-8">
            <h2 className="text-4xl font-bold mb-6">Send Me an Email</h2>
            <form
              action="https://formspree.io/f/xovlnwop"
              method="POST"
            >
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Your email:
                <input
                  type="email"
                  name="email"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                />
              </label>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Your message:
                <textarea
                  name="message"
                  rows={6}
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                ></textarea>
              </label>
              <button
                id="send-email-button"
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold"
              >
                Send
              </button>
            </form>
          </div>
        </section>

      </main>

      <footer className="mt-16">
        <p className="text-sm">© 2025 Hector. All rights reserved.</p>
      </footer>
    </div>
  );
}
