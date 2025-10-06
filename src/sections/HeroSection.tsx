export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-950 via-gray-950 to-black text-white text-center pt-20 md:pt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Intro */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-blue-400">Muhammad Bilal Ashraf</span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          A Software Engineer passionate about building modern web apps with{" "}
          <span className="font-semibold text-blue-300">React</span>,{" "}
          <span className="font-semibold text-blue-300">Node.js</span>, and
          scalable solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-800 transition font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
