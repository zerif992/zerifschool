import Layout from "fragments/layout";
import { Hero } from "./components/hero";
import { TrustedBy } from "./components/stats";
import Testimonials from "./components/whatWeSay";
import { FAQs } from "./components/faq";
import StayOnTop from "./components/stayOnTop";
import LargeImage from "./components/large_image";
import CTA from "./components/cta";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function Home() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("v"); // Get the 'v' parameter from URL
    if (query) {
      // Delay to ensure component is mounted
      const element = document.getElementById(query);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [searchParams]);

  return (
    <Layout title="Home">
      <Hero id="hero" />
      <TrustedBy />
      <LargeImage />
      <StayOnTop id="features" />
      <Testimonials id="testimonials" />
      <FAQs id="faqs" />
      <CTA />
    </Layout>
  );
}
