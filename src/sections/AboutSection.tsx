import profilePic from "../assets/profile.png" // Make sure the image is in assets folder

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 bg-white"
    >
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={profilePic}
          alt="Profile picture"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-primary object-cover object-top"
        />
      </div>

      {/* About Text */}
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I’m <span className="font-semibold text-primary">Muhammad Bilal Ashraf</span>, 
          a Software Engineer passionate about creating scalable, modern web
          applications. I enjoy working across the stack with{" "}
          <span className="font-semibold text-secondary">
            React, Node.js, and TypeScript
          </span>
          , focusing on performance, clean code, and user-friendly design.
        </p>

        {/* Skills Highlights */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {["React", "TypeScript", "Node.js", "TailwindCSS", "MongoDB"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-300 hover:text-white transition-colors"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
