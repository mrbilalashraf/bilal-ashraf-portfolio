import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-900 px-6 py-16"
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-10">
          Have a question, collaboration idea, or just want to say hello?  
          I’d love to hear from you — let’s connect!
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mnngzllw"
          method="POST"
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-8 text-left space-y-6"
        >
          <div>
            <label className="block text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Centered Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="mailto:bilalashrafme@gmail.com"
            className="text-gray-500 hover:text-blue-500 transition"
            aria-label="Email"
          >
            <Mail size={26} />
          </a>
          <a
            href="https://github.com/mrbilalashraf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <Github size={26} />
          </a>
          <a
            href="https://linkedin.com/in/bilalashrafme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={26} />
          </a>
          <a
            href="https://twitter.com/BilalAshrafme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition"
            aria-label="Twitter"
          >
            <Twitter size={26} />
          </a>
        </div>
      </div>
    </section>
  )
}
