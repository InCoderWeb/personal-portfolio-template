import HomeSection from "@/app/components/HomeSection/page";
import ScrollToTop from "@/app/components/ScrollToTop/page";
import About from "@/app/components/About/page";
import Services from "@/app/components/Services/page";
import Projects from "@/app/components/Projects/page";
import Blogs from "@/app/components/Blogs/page";
import Contact from "@/app/components/Contact/page";

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      {/* <Services /> */}
      <Projects />
      <Blogs />
      <Contact />
      <ScrollToTop />
    </>
  );
}