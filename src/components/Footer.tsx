function Footer() {
  return (
    <footer className="w-full">
      {/* IMAGE SECTION (no cropping) */}
      <div
        className="relative w-full bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/footer.png')",
        }}
      >
        {/* Responsive height instead of aspect ratio */}
        <div className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px]" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-4 sm:-translate-y-6 text-white text-center px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
            Stay Connected
          </h2>

          <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-5 mt-2">
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition">
              Contact
            </button>

            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition">
              Social
            </button>

            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition">
              Licensing
            </button>
          </div>

          <p className="absolute bottom-4 text-xs sm:text-sm text-gray-200">
            © 2020 Varlakshmi Enterprises
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
