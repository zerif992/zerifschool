import Layout from "fragments/layout";
import { Hero } from "./components/hero";
import { TrustedBy } from "./components/stats";
import Testimonials from "./components/whatWeSay";
import { FAQs } from "./components/faq";
import StayOnTop from "./components/stayOnTop";
import LargeImage from "./components/large_image";
import CTA from "./components/cta";

export function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <TrustedBy />
      <LargeImage />
      <StayOnTop />
      <Testimonials />
      <FAQs />
      <CTA />
    </Layout>
  );
}
