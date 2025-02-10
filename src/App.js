import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ScrollToTop } from "utils/scrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material";
// Pages
import { Home } from "pages/home";
import { SignIn } from "pages/auth/signin";
import { SignUp } from "pages/auth/signup";
import { Listing } from "pages/listings";
import { Contact } from "pages/contact";
import { NotFound } from "pages/404";
import { ListingDetails } from "pages/listings/listingDetails";
import { theme } from "utils/mui_theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/listings" element={<Listing />} />
            <Route path="/listings/:id" element={<ListingDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer hideProgressBar="true" />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
