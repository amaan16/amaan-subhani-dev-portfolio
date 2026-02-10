export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-emerald-500/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="font-mono text-sm tracking-[0.18em] text-emerald-200">
          ~/amaan
        </div>
        <div className="ml-auto flex items-center gap-8 text-base uppercase tracking-[0.2em] text-emerald-100">
          <a href="#home" className="hover:text-emerald-300">
            Home
          </a>
          <a href="#about" className="hover:text-emerald-300">
            About
          </a>
          <a href="#skills" className="hover:text-emerald-300">
            Skills
          </a>
          <a href="#projects" className="hover:text-emerald-300">
            Projects
          </a>
          <a href="#experience" className="hover:text-emerald-300">
            Experience
          </a>
          <a href="#contact" className="hover:text-emerald-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
