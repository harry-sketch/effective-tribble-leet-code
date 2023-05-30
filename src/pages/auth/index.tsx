import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

type authProps = {};

const Auth: React.FC<authProps> = () => (
  <section className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
    <Navbar />

    <Image
      src="/images/hero.png"
      alt="hero-img"
      width={500}
      height={500}
      className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  </section>
);
export default Auth;
