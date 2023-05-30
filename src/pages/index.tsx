// Components
import Topbar from "@/components/Navbar/Topbar";
import Problems from "@/components/Problems/Problems";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#1A1A1A]">
      <Topbar />
      <Problems />
    </main>
  );
}
