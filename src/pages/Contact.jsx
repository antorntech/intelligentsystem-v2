import React, { useState } from "react";
import PageHeader from "../shared/PageHeader";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., API call)
    try {
      // Example API call (uncomment and replace with your actual endpoint)
      /*
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Message sent successfully", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormMessage("There was an error sending your message. Please try again.");
      }
      */

      console.log("Form submitted:", formData); // Just for testing, remove this in production
      toast.success("Message sent successfully", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <PageHeader title="Contact" />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="main-title">Get In Touch</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="contact-boxes">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="contact-box d-flex align-items-center">
                      <div className="icon-box">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                      <div className="content-box">
                        <h5>Mail</h5>
                        <p>support@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="contact-box d-flex align-items-center orange">
                      <div className="icon-box">
                        <i className="fa fa-whatsapp"></i>
                      </div>
                      <div className="content-box">
                        <h5>Support</h5>
                        <p>+88016 0808 1907</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="contact-box d-flex align-items-center purble">
                      <div className="icon-box">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="content-box">
                        <h5>Office</h5>
                        <p>Dhanmondi, Dhaka</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className="contact-btn main-btn" type="submit">
                  <i className="fa fa-send"></i> <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
