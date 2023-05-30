import { cw } from "@/utils/helpers";
import Image from "next/image";
import Button from "../common/Button";

type TopbarProps = {
  className?: string;
};

const Topbar: React.FC<TopbarProps> = ({ className }) => (
  <nav
    className={cw(
      "bg-[#282828] top-0 sticky w-full  flex items-center justify-between md:px-[5%] px-4 py-3"
    )}
  >
    <Image
      src="/images/logo-full.png"
      alt="hero"
      width={100}
      height={100}
      className="object-contain"
    />

    <div className="flex items-center gap-3">
      <Button
        type="button"
        size="md"
        text="buymeacoffe"
        onClick={() => alert("currently in Progress !!")}
        className="bg-[#464646] hover:bg-[#464646]/80 text-[#E7872C]"
      />

      <Button
        type="button"
        size="sm"
        text="Sign In"
        onClick={() => alert("currently in Progress !!")}
        className="bg-[#464646] hover:bg-[#464646]/80 text-gray-500"
      />
    </div>
  </nav>
);
export default Topbar;
