// import { Footer } from "fragments/footer";
import { Footer } from "fragments/footer";
import { Header } from "fragments/header";
import { Helmet } from "react-helmet";

export default function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <div className="min-h-[50vh]">{children}</div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Stelios",
  description: "robots",
  keywords: "noindex, nofollow",
};
