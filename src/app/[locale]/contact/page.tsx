import Footer from "@/components/layout/Footer/footer";
import Navbar from "@/components/layout/Navbar/navbar";

export default function ContactPage() {
  return (
    <main className="bg-white font-sora">
      <div className="border-3 lg:mx-10 mx-4 lg:my-8 my-4 bg-background flex flex-col gap-10 lg:gap-14 overflow-hidden">
        <Navbar />
        <Footer />
      </div>
    </main>
  );
}
