export function Header() {
  const sendEmail = () => {
    window.location.href = "mailto:business@kagan.tech";
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-main)" }}>
            Kagan<span className="text-gray-400 font-normal">Tech</span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-300" style={{ fontFamily: "var(--font-main)" }}>
            <button className="hover:text-white transition-colors">Home</button>
            <button className="hover:text-white transition-colors">About</button>
            <button className="hover:text-white transition-colors">Work</button>
          </nav>

          {/* Email Button */}
          <button
            onClick={sendEmail}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:border-white transition-all duration-200"
          >
            ✉️
          </button>
        </div>
      </div>
    </header>
  );
}
