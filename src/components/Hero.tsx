import heroImage from "../assets/hero.jpg";

export function Hero() {
  return (
    <section
      className="relative h-screen w-screen overflow-hidden"
      style={{ fontFamily: "var(--font-main)" }}
    >
      {/* FULLSCREEN IMAGE */}
      <img
        src={heroImage}
        alt="Kagan"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Fade Overlay (makes text readable) */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Text Layer */}
      <div className="relative max-w-6xl mx-auto h-full flex flex-col justify-center px-6 space-y-8">
        <h1 className="text-6xl font-semibold leading-tight tracking-tight">
          Hello, I’m <span className="text-gray-300">Kagan.</span>
        </h1>

        <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
          I create tech-focused reviews, product storytelling, and mobile
          content built for audiences who appreciate clean design, clarity, and good tech.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="#"
            className="px-6 py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all duration-200"
          >
            Visit Channel
          </a>

          <button
            onClick={() => (window.location.href = "mailto:business@kagan.tech")}
            className="px-6 py-3 rounded-lg border border-gray-400 text-sm text-gray-200 hover:border-white hover:text-white transition-all duration-200"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
