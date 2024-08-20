import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const TermsCondition = () => {
  return (
    <>
      <PageHeader title="Terms & Conditions" />
      <section className="terms-condition animate__animated animate__fadeIn">
        <div className="container">
          <div>
            <p>
              Welcome to Intelligent-System! These terms and conditions outline
              the rules and regulations for the use of our Software Development
              and IT Training Institute's website.
            </p>

            <h4 className="mt-4">1. Introduction</h4>
            <p>
              By accessing this website, you agree to comply with and be bound
              by the following terms and conditions of use, which together with
              our privacy policy govern Intelligent-System's relationship with
              you in relation to this website.
            </p>

            <h4 className="mt-4">2. Use of the Website</h4>
            <p>
              The content of this website is for your general information and
              use only. It is subject to change without notice. Neither we nor
              any third parties provide any warranty or guarantee as to the
              accuracy, timeliness, performance, completeness, or suitability of
              the information and materials found or offered on this website for
              any particular purpose.
            </p>

            <h4 className="mt-4">3. Intellectual Property</h4>
            <p>
              All intellectual property rights in the content and materials on
              this website are owned by or licensed to Intelligent-System. You
              may view, download, and print pages from the website for your own
              personal use, subject to the restrictions set out below.
            </p>
            <ul className="mt-4">
              <div className="d-flex align-items-start mb-2">
                <img src="/images/icons/checked.png" alt="" className="mr-2" />
                <li className="m-0">
                  You must not republish material from this website.
                </li>
              </div>
              <div className="d-flex align-items-start mb-2">
                <img src="/images/icons/checked.png" alt="" className="mr-2" />
                <li className="m-0">
                  You must not sell, rent, or sub-license material from this
                  website.
                </li>
              </div>
              <div className="d-flex align-items-start mb-2">
                <img src="/images/icons/checked.png" alt="" className="mr-2" />
                <li className="m-0">
                  You must not reproduce, duplicate, copy, or otherwise exploit
                  material on this website for commercial purposes.
                </li>
              </div>
            </ul>

            <h4 className="mt-4">4. Enrollment and Payment</h4>
            <p>
              By enrolling in our courses, you agree to pay the specified fees.
              Payment must be made in full prior to the commencement of the
              course. Refunds will only be provided under certain conditions, as
              outlined in our refund policy.
            </p>

            <h4 className="mt-4">5. Limitation of Liability</h4>
            <p>
              Intelligent-System will not be liable for any loss or damage,
              including without limitation, indirect or consequential loss or
              damage, or any loss or damage whatsoever arising from loss of data
              or profits arising out of, or in connection with, the use of this
              website.
            </p>

            <h4 className="mt-4">6. Governing Law</h4>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of [Your Jurisdiction], and you
              irrevocably submit to the exclusive jurisdiction of the courts in
              that State or location.
            </p>

            <h4 className="mt-4">7. Changes to the Terms</h4>
            <p>
              We may revise these terms and conditions from time to time. The
              revised terms and conditions will apply to the use of our website
              from the date of publication on the website.
            </p>

            <p className="text-center mt-4">
              If you have any questions about our Terms and Conditions, please{" "}
              <Link to="/contact" className="text-primary">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsCondition;
