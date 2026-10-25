import { Link } from "react-router-dom";

import uwamoseLimitedLogo from "../../assets/brand/uwamose-limited-logo-png.png"

export default function Logo() {
  return (
    <li
      to="/"
      className="
        px-2
        py-1
        border
        border-transparent
        hover:border-grid-line
        hover:bg-surface-container-low
        transition-all
        duration-75
        active:translate-x-[2px]
        active:translate-y-[2px]
        active:shadow-none
        flex
        flex-row
        items-center
      "
    >
      <img src={uwamoseLimitedLogo} alt="uwamose_limited_logo" className="w-8 h-8" />
      <span className="font-display text-2xl font-bold text-primary">
          Uwamose Limited
      </span>
    </li>
  );
}