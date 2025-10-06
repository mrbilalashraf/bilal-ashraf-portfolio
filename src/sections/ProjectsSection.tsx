import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "✍️ WritEra",
    description:
      "A full-featured blog platform with a rich text editor, image upload, and category-based browsing — designed for an elegant writing experience.",
    tech: "React · React Quill · LocalStorage · Responsive UI",
    github: "https://github.com/mrbilalashraf/blogs-site",
    demo: "https://blogs-site-rm7vroqi2-bilal-ashrafs-projects-42c82465.vercel.app/",
  },
  {
    title: "🛍️ E-Commerce App",
    description:
      "A modern e-commerce website with dynamic cart functionality, localStorage authentication, and a responsive product showcase.",
    tech: "React · JavaScript · LocalStorage · CSS",
    github: "https://github.com/mrbilalashraf/ecommerce-site",
    demo: "https://mockmart.netlify.app/",
  },
  {
    title: "🛒 MockMart",
    description:
      "A responsive React-based store using Fake Store API — complete with product browsing, cart, and user auth pages for learning and prototyping.",
    tech: "React · Fake Store API · React Router · Tailwind",
    github: "https://github.com/mrbilalashraf/mockmart",
    demo: "https://mockmart-chi.vercel.app/",
  },
  {
    title: "💬 WebChat",
    description:
      "A real-time chat app with Google Sign-In, anonymous chat rooms, and Neumorphic UI built on Firebase Firestore.",
    tech: "React · Firebase · Firestore · CSS · date-fns",
    github: "https://github.com/mrbilalashraf/webchat",
    demo: "https://webchaat.netlify.app/",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🚀 Projects
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          A collection of my recent work — blending creativity, clean design, and
          technical depth.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-xs text-blue-400 mb-6">{project.tech}</p>
              </div>

              <div className="flex gap-4 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
                >
                  <ExternalLink size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/mrbilalashraf?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            <Github size={20} />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;