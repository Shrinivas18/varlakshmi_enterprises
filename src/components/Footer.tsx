function Footer() {
  return (
    <footer className="mt-auto">
      <div
        className="h-80 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/footer.png')",
        }}
      >
        <h2 className="text-2xl font-semibold mb-6">
          Stay Connected
        </h2>

        <div className="flex gap-6">
          <button className="px-4 py-2 bg-black/50 rounded">
            Contact
          </button>
          <button className="px-4 py-2 bg-black/50 rounded">
            Social
          </button>
          <button className="px-4 py-2 bg-black/50 rounded">
            Licensing
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
