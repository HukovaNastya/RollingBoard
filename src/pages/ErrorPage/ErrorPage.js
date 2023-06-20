import React from "react";
import "../HomePage/HomePage.css";
import "../ErrorPage/ErrorPage.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main id="main">
        <section className="error-content full-height">
          <div className="container d-flex flex-direction-column align-items-center">
            <h1 className="title title-h1">Sorry! Page not found</h1>
            <p className="text text-large">
              Head homepage or use the search to find what you're looking for.
            </p>
            <button className="button-primary" onClick={() => navigate(`/`)}>
              Back to Homepage
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
