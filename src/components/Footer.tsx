import React from "react";
import DialogBox from "./Dialog";

function Footer() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState<"contact" | "social" | "licensing" | "">("");

  const handleOpen = (t: "contact" | "social" | "licensing") => {
    setType(t);
    setOpen(true);
  };

  return (
    <footer className="w-full bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto py-8 sm:py-10 md:py-12 flex flex-col items-center text-center px-4">

        <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80">
          Stay Connected
        </h2>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-5 mt-5 overflow-x-auto no-scrollbar">
          <button className="footer-btn" onClick={() => handleOpen("contact")}>
            Contact
          </button>
          <button className="footer-btn" onClick={() => handleOpen("social")}>
            Social
          </button>
          <button className="footer-btn" onClick={() => handleOpen("licensing")}>
            Licensing
          </button>
        </div>

        <h2 className="brand-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
          VARLAKSHMI ENTERPRISES
        </h2>

        <div className="w-20 h-[1px] bg-cyan-400/40 mt-4"></div>

        <p className="mt-4 text-sm sm:text-base text-gray-400">
          © 2020 Varlaxmi Enterprises
        </p>

      </div>

      <DialogBox open={open} onClose={() => setOpen(false)} type={type} />
    </footer>
  );
}

export default Footer;