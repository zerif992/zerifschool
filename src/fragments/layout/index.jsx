// import { Footer } from "fragments/footer";
import { Footer } from "fragments/footer";
import { Header } from "fragments/header";
import { Helmet } from "react-helmet";
import { CgPhone } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";

export default function Layout({ children, title }) {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/994503316092", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <div className="min-h-[50vh]">{children}</div>
      <Footer />
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/994503316092"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
      >
        <FaWhatsapp size={32} />
      </a>
      <a
        href="tel:994503316092"
        className="fixed bottom-24 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center"
      >
        <CgPhone size={32} />
      </a>
    </>
  );
}

Layout.defaultProps = {
  title: "Zərif Sürücülük elimi",
  description: "robots",
  keywords: "noindex, nofollow",
};
