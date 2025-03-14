import React from "react";

function SocialIcons() {
  return (
    <nav className="flex absolute top-5 left-5 gap-5 z-[2] max-sm:top-2.5 max-sm:left-2.5">
      <a href="#" aria-label="Instagram">
        <i className="ti ti-brand-instagram text-2xl cursor-pointer text-white max-sm:text-xl" />
      </a>
      <a href="#" aria-label="LinkedIn">
        <i className="ti ti-brand-linkedin text-2xl cursor-pointer text-white max-sm:text-xl" />
      </a>
    </nav>
  );
}

export default SocialIcons;
