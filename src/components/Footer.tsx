export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-500">Muhammad Bilal Ashraf</span>. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex gap-4 text-sm">
          <a
            href="#about"
            className="hover:text-blue-500 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}