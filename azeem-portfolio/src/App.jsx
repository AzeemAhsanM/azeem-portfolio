import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, Phone, BookOpen } from 'lucide-react';

export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'FastAPI', icon: 'https://fastapi.tiangolo.com/img/favicon.png' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    // Grouped Text-Only Skills
    { name: 'JWT', icon: null },
    { name: 'OAuth', icon: null },
    { name: 'RestAPIs', icon: null },
    { name: 'Data Vis', icon: null },
    { name: 'AI Integration', icon: null }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-blue-600/40">
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.15), transparent 80%)`
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 py-20 overflow-hidden text-left">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight uppercase">
              Azeem <br /> <span className="text-blue-500">Ahsan</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-md border-l-2 border-blue-500 pl-6 leading-relaxed">
              Software Engineer specializing in production-ready backend and full-stack solutions. Expert in API optimization and AI integration.
            </p>
            <div className="flex gap-8 mt-10">
              <a href="https://github.com/AzeemAhsanM" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all scale-110"><Github /></a>
              <a href="https://linkedin.com/in/AzeemAhsan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all scale-110"><Linkedin /></a>
              <a href="mailto:azeemahsanm@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all scale-110"><Mail /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
            <div className="relative w-80 h-[450px] md:w-[400px] md:h-[550px] overflow-hidden rounded-3xl border border-white/10 group">
              <img src="/profile-bw.jpg" alt="Azeem Ahsan" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 text-left">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 text-white uppercase tracking-widest">
          <Cpu className="text-blue-500" /> Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group flex flex-col items-center justify-center gap-4 min-h-[140px]">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform brightness-90 group-hover:brightness-110" />
              ) : (
                <div className="text-blue-500 font-bold text-sm tracking-wider text-center uppercase">
                  {skill.name}
                </div>
              )}
              {skill.icon && <p className="text-xs font-semibold tracking-widest text-gray-400 group-hover:text-white uppercase text-center">{skill.name}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 max-w-5xl mx-auto px-6 text-white text-left">
        <h2 className="text-4xl font-bold mb-20 flex items-center gap-4 uppercase tracking-widest">
          <Terminal className="text-blue-500" /> Experience
        </h2>
        <div className="space-y-24">
          <ExperienceCard 
            title="Software Developer Intern" company="UCPro" date="Sep 2025 - Dec 2025"
            points={[
              "Collaborated in enhancing a business management platform by developing new modules for workflow automation and record tracking.",
              "Implemented dynamic input forms with conditional logic, improving data accuracy and process efficiency.",
              "Integrated automated   message notifications to streamline user communication and status updates.",
              "Designed a dashboard with sortable, color-coded status indicators for real-time activity tracking."
            ]}
          />
          <ExperienceCard 
            title="Web Developer" company="TEDx Farook College" date="Aug 2024 - Feb 2025"
            points={[
              "Developed responsive front-end components using HTML, CSS, and JavaScript, improving user experience.",
              "Redesigned content workflows, reducing turnaround time for website updates and announcements."
            ]}
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 max-w-5xl mx-auto px-6 text-white text-left border-t border-white/5">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 uppercase tracking-widest">
          <BookOpen className="text-blue-500" /> Education
        </h2>
        <div className="relative pl-12 border-l border-blue-500/30 group">
          <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-blue-500" />
          <h3 className="text-2xl font-bold text-white">Bachelor of Science in Computer Science</h3>
          <p className="text-blue-500 text-lg font-semibold mt-1">Farook College (Autonomous), University of Calicut</p>
          <p className="text-gray-500 font-mono text-sm uppercase mt-1">Graduation: 2025</p>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-2xl">
            Focused on core computer science principles including Data Structures, Algorithms, Software Engineering, and Database Management Systems.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-t border-white/5 text-white text-left">
        <div className="mb-20">
          <h2 className="text-4xl font-bold flex items-center gap-4 uppercase tracking-widest">
            <Code2 className="text-blue-500" /> Projects
          </h2>
          <p className="mt-4 text-gray-500 text-sm font-mono italic">
            // Note: Live demos may take a moment to load as they are hosted on free cloud services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <ProjectCard title="WealthFy" url="https://wealthfy.onrender.com/" desc="AI-Powered Personal Finance application featuring an advisory chatbot and transaction visualization." tags={["FastAPI", "React", "PostgreSQL", "AI"]} />
          <ProjectCard title="Loan Management System" url="https://loanmanagement-3-wrkl.onrender.com/" desc="Full-stack system for tracking repayment schedules, overdue detection, and borrower management." tags={["Django", "PostgreSQL", "ORM Optimization"]} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 text-center border-t border-white/5">
        <h2 className="text-4xl font-bold mb-10 text-white uppercase tracking-widest">Contact</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <a href="mailto:azeemahsanm@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl text-gray-400 hover:text-blue-500 transition-colors">
            <Mail /> azeemahsanm@gmail.com
          </a>
          <a href="https://wa.me/971503461776" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl text-gray-400 hover:text-green-500 transition-colors">
            <Phone /> +971 50 346 1776
          </a>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 bg-[#080808]">
        <p className="text-gray-500 text-sm tracking-widest uppercase font-mono">Azeem Ahsan — 2026 Portfolio</p>
      </footer>
    </div>
  );
}

function ExperienceCard({ title, company, date, points }) {
  return (
    <div className="relative pl-12 border-l border-blue-500/30 group text-left">
      <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-blue-500 transition-all" />
      <div className="flex flex-col md:flex-row md:justify-between mb-6">
        <h3 className="text-2xl font-bold uppercase">{title} <span className="text-blue-500">@ {company}</span></h3>
        <p className="text-gray-500 font-mono text-sm uppercase">{date}</p>
      </div>
      <ul className="space-y-4 text-gray-400">
        {points.map((p, i) => (<li key={i} className="leading-relaxed flex gap-3 text-left"><span className="text-blue-500">▹</span> {p}</li>))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, desc, tags, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-all group text-left">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors uppercase">{title}</h3>
        <ExternalLink className="text-gray-600 group-hover:text-white" size={20} />
      </div>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map(t => (<span key={t} className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-bold text-gray-400 border border-white/10 uppercase tracking-tighter">{t}</span>))}
      </div>
    </a>
  );
}