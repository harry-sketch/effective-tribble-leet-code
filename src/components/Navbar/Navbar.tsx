import Image from "next/image";

// Common Components
import Button from "../common/Button";

// Helpers
import { cw } from "@/utils/helpers";

// Types & Interfaces
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => (
  <header className="top-0 sticky w-full max-w-6xl mx-auto flex items-center justify-between px-4 md:px-0">
    <Image
      src="/images/logo.png"
      alt="logo"
      width={200}
      height={200}
      quality={100}
      priority
      className="object-contain"
    />
    <Button
      type="button"
      text="Sign In"
      size="md"
      className="bg-[#fea017] hover:bg-[#fea017]/80 text-slate-50"
      onClick={() => alert("todo")}
    />
  </header>
);
export default Navbar;
