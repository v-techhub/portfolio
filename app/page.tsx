import {
  Contact,
  Footer,
  Hero,
  Projects,
  Skills,
  Testimonials
} from "./components/index"

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
