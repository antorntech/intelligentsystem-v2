import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <div className="privacy-policy">
        <section className="section-content">
          <div className="container">
            <h4>1. Information We Collect</h4>
            <p>
              We collect information to provide better services to all our
              users. This includes:
            </p>
            <ul className="mt-4">
              <div className="d-flex align-items-start mb-2">
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#30c9e8"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
                <li className="m-0 ml-2">
                  Information you give us. For example, a name, email address,
                  or other details.
                </li>
              </div>
              <div className="d-flex align-items-start mb-2">
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#30c9e8"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
                <li className="m-0 ml-2">
                  Information we get from your use of our services. For example,
                  device information, location, and browsing history.
                </li>
              </div>
            </ul>

            <h4 className="mt-4">2. How We Use Information</h4>
            <p>The information we collect is used to:</p>
            <ul className="mt-4">
              <div className="d-flex align-items-start mb-2">
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#30c9e8"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
                <li className="m-0 ml-2">
                  Provide, maintain, and improve our services.
                </li>
              </div>
              <div className="d-flex align-items-start mb-2">
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#30c9e8"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
                <li className="m-0 ml-2">Offer personalized content.</li>
              </div>
              <div className="d-flex align-items-start mb-2">
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#30c9e8"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
                <li className="m-0 ml-2">
                  Communicate with you about updates and other services.
                </li>
              </div>
            </ul>

            <h4 className="mt-4">3. Information Sharing</h4>
            <p>
              We do not share personal information with companies,
              organizations, or individuals outside of our company unless one of
              the following circumstances applies:
            </p>
            <ul className="mt-4">
              <div className="d-flex align-items-start mb-2">
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#30c9e8"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
                <li className="m-0 ml-2">With your consent.</li>
              </div>
              <div className="d-flex align-items-start mb-2">
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#30c9e8"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
                <li className="m-0 ml-2">
                  For external processing by trusted businesses or persons.
                </li>
              </div>
              <div className="d-flex align-items-start mb-2">
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#30c9e8"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
                <li className="m-0 ml-2">For legal reasons.</li>
              </div>
            </ul>

            <h4 className="mt-4">4. Your Rights</h4>
            <p>
              You have the right to access, update, or delete your personal
              information. To exercise these rights, please contact us at [email
              address].
            </p>

            <h4 className="mt-4">5. Changes to This Policy</h4>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page.
            </p>

            <h4 className="mt-4">6. Contact Us</h4>
            <p>
              If you have any questions or concerns about this privacy policy,
              please{" "}
              <Link to="/contact" className="text-primary">
                contact us.
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
