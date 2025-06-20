"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 text-black dark:text-white px-6 py-12 transition-colors duration-300">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 px-3 py-2 bg-gray-200 dark:bg-gray-800 text-sm rounded-md shadow-md hover:scale-105 flex items-center gap-2"
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Header */}
        <section className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold">Amar Havinal</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Electronics and Communication Graduate</p>
          <p className="text-base max-w-2xl mx-auto">
            Engineering graduate seeking an entry-level role in embedded systems to apply
            skills in C, C++, microcontroller programming, DSA and Linux, with a passion
            for building efficient and reliable solutions.
          </p>
        </section>

        {/* About */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            I am Amar Havinal, an Electronics and Communication Engineering graduate with a
            CGPA of 7.5 and hands-on training at Emertxe in embedded systems. My technical
            interests lie in advanced C programming, microcontroller interfacing, Linux
            internals, and embedded communication protocols like UART, SPI, and I2C. I’ve
            built practical projects such as an LSB Steganography system, Car Black Box,
            and an Automatic Gas Cut-off system, showcasing real-time embedded development
            skills. My career objective is to secure an entry-level role where I can
            contribute to innovative embedded solutions and grow professionally. I stand
            out through my project-driven learning, strong grasp of low-level programming,
            and eagerness for continuous improvement. Winning a circuit debugging
            competition further highlights my problem-solving capabilities.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-800 dark:text-gray-300">
            <div>
              <h3 className="font-semibold text-black dark:text-white">Languages</h3>
              <ul className="list-disc ml-4">
                <li>C</li>
                <li>Embedded C</li>
                <li>C++</li>
                <li>DSA (Basics)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white">Tools/Platforms</h3>
              <ul className="list-disc ml-4">
                <li>Linux</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>MPLAB X IDE</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white">Hardware</h3>
              <ul className="list-disc ml-4">
                <li>PIC18F4580</li>
                <li>Arduino</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white">Other Skills</h3>
              <ul className="list-disc ml-4">
                <li>Linux Internals</li>
                <li>Microcontroller Programming</li>
                <li>UART, SPI, I2C</li>
                <li>Timers, ADC, DAC, PWM</li>
                <li>Debugging, RT Monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "LSB Steganography",
                tech: "C",
                desc: "Embed secret data in images using LSB.",
                details: "Developed a secure data hiding method using Least Significant Bit encoding in C. Ensured no loss of image fidelity. Focused on reversible encoding/decoding logic.",
                github: "https://github.com/yourusername/lsb-steganography",
                image: "/images/steganography.png"
              },
              {
                title: "Address Book",
                tech: "C, File I/O",
                desc: "Store and manage contact info.",
                details: "Built a CLI address book in C with structures and file I/O for persistent contact management. Included features to add, search, delete, and update entries.",
                github: "https://github.com/yourusername/address-book",
                image: "/images/addressbook.png"
              },
              {
                title: "Car Black Box",
                tech: "Embedded C, PIC18F4580",
                desc: "Monitor and log car events.",
                details: "Designed an event logger for cars using sensors and microcontrollers to record speed violations, impact, and driver behavior. Ideal for fleet tracking.",
                github: "https://github.com/yourusername/car-black-box",
                image: "/images/carblackbox.png"
              },
              {
                title: "Gas Cut-off System",
                tech: "C, Arduino",
                desc: "Detect gas leaks and shut valve.",
                details: "Used gas sensors and Arduino to shut off LPG gas in case of leaks. Enhanced kitchen safety with auto shut-off relay control.",
                github: "https://github.com/yourusername/gas-safety",
                image: "/images/gascutoff.png"
              }
            ].map((project, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <Card className="bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform cursor-pointer">
                    <CardContent className="p-4 space-y-2">
                      <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tech Stack: {project.tech}</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{project.desc}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">Tech Stack: {project.tech}</p>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 transition duration-300 hover:scale-105"
                    />
                  )}
                  <p className="text-gray-200 text-sm mb-4">{project.details}</p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition"
                    >
                      View on GitHub
                    </a>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc ml-6 text-gray-800 dark:text-gray-300">
            <li>
              <span className="font-medium text-black dark:text-white">Emertxe Certified Embedded Professional (ECEP)</span> – Emertxe Information Technologies, May 2025. [<a href="https://certificate.emertxe.com/?id=24018_023" target="_blank" className="underline text-blue-400">Certificate</a>]
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p>Email: <a href="mailto:amarhavinal@gmail.com" className="underline text-blue-400">amarhavinal@gmail.com</a></p>
          <p>Phone: 8660737256</p>
          <div className="flex justify-center gap-6 text-gray-800 dark:text-gray-300 mt-2">
            <a href="https://www.linkedin.com/in/amar-havinal-71564535b" target="_blank"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:amarhavinal@gmail.com"><Mail className="w-6 h-6" /></a>
          </div>
          <div className="mt-4">
            <Button asChild>
              <a
                href="https://drive.google.com/file/d/1mmHHFZPNE9aGz4PUBheirvrbgRZ5hPqD/view"
                target="_blank"
              >
                View Resume
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}