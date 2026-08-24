import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { club } from "../data/content";

const buttonClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-brand transition-transform duration-300 ease-out hover:scale-110";

const iconClass = "h-5 w-5";

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-3">
      <a
        href={`mailto:${club.email}`}
        aria-label="Email Tonedeaf"
        className={buttonClass}
      >
        <FaEnvelope className={iconClass} />
      </a>
      <a
        href={club.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tonedeaf Instagram"
        className={buttonClass}
      >
        <FaInstagram className={iconClass} />
      </a>
      <a
        href={club.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join the Tonedeaf WhatsApp group"
        className={buttonClass}
      >
        <FaWhatsapp className={iconClass} />
      </a>
    </div>
  );
}
