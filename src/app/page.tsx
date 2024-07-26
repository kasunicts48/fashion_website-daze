import Footer from "@/components/Footer";
import Gallery from "@/components/MainPage/Gallery";
import Section01 from "@/components/MainPage/Section01";
import Section02 from "@/components/MainPage/Section02";
import Section03 from "@/components/MainPage/Section03";
import Section04 from "@/components/MainPage/Section04";
import Section05 from "@/components/MainPage/Section05";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Section01 />
      <Section02 />
      {/* <Gallery /> */}
      <Section03 />
      <Section04 />
      <Section05 />
      <Footer />
    </>
  );
}
