import {
  Footer,
  Hero,
  Projects,
  Skills,
  Testimonials,
  About
} from "./components/index"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}
