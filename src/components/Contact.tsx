"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Save the form reference before the async request
    const form = event.currentTarget;

    setIsSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        "service_b580lyi",
        "template_4mwvui8",
        form,
        "L51Ncvs8VrYuySAqr"
      );

      // Email sent successfully
      setStatus("success");

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      {/* Heading */}
      <div className="contact-heading">
        <span className="contact-eyebrow">Get In Touch</span>

        <h2 className="section-title">Let’s Work Together</h2>

        <p className="contact-intro">
          Have a project idea, a question, or simply want to connect?
          Feel free to reach out. I’m always open to discussing new
          opportunities and interesting ideas.
        </p>
      </div>

      <div className="contact-container">
        {/* ================================
            CONTACT INFORMATION
        ================================= */}
        <div className="contact-info">
          <div className="contact-info-header">
            <span className="contact-icon">✦</span>

            <div>
              <h3>Let’s talk</h3>

              <p>
                I’d love to hear what you’re working on.
              </p>
            </div>
          </div>

          <div className="contact-details">
            {/* Email */}
            <a
              href="mailto:jahidnahid19@gmail.com"
              className="contact-detail"
            >
              <div className="contact-detail-icon">✉</div>

              <div>
                <span>Email</span>

                <strong>
                  jahidnahid19@gmail.com
                </strong>
              </div>
            </a>

            {/* Location */}
            <div className="contact-detail">
              <div className="contact-detail-icon">⌖</div>

              <div>
                <span>Location</span>

                <strong>
                  Dhaka, Bangladesh
                </strong>
              </div>
            </div>

            {/* Availability */}
            <div className="contact-detail">
              <div className="contact-detail-icon">✓</div>

              <div>
                <span>Availability</span>

                <strong className="contact-available">
                  <i></i>
                  Open to Work
                </strong>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-social">
            <span>Find me online</span>

            <div className="social-links">
              <a
                href="https://github.com/Nahid-Akand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nahid-akand-9b9847226/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href="https://www.facebook.com/nahid.akand.33"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* ================================
            CONTACT FORM
        ================================= */}
        <div className="contact-form-wrapper">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* Name + Email */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  minLength={2}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to talk about?"
                required
                minLength={3}
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me a little about your project or idea..."
                required
                minLength={10}
              ></textarea>
            </div>

            {/* Success Message */}
            {status === "success" && (
              <div className="contact-message success">
                ✓ Your message has been sent successfully!
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="contact-message error">
                Something went wrong. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              {isSending ? (
                <>
                  Sending...
                  <span>⌛</span>
                </>
              ) : (
                <>
                  Send Message
                  <span>↗</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}