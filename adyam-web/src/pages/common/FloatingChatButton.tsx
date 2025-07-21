import React, {useState} from 'react';

import {PhoneIcon, XMarkIcon, ChatBubbleLeftRightIcon, ChatBubbleLeftIcon} from '@heroicons/react/24/outline';


const adminPhone = "+251123456789";
const adminEmail = "info@adyamengineering.com";


const FloatingChatButton: React.FC = ({contacts}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Simple contact form state
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const openContactForm = () => {
        setShowContactForm(true);
        // Logic to open chat popup can be added here
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowContactForm(false);
      setForm({ name: '', phone: '', email: '', message: '' });
      setIsOpen(false);
    }, 2000);
  };

    // Render the floating chat button and popup
  return (
    <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        border: 'none',
    }}>
        {/* Floating Chat Button */}
        {isOpen ? (
            <div className="chat-popup" style={{
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          padding: "1.5rem",
          minWidth: "240px",
          marginBottom: "0.5rem",
        }}>
            <button
                className="chat-button"
            onClick={() => {
                setIsOpen(false);
                setShowContactForm(false);
            }}
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Close"
          >
            <XMarkIcon width={22} />
          </button>

          {!showContactForm ? (
            <>
            <h4 style={{margin: "0 0 1rem 0"}}>Contact Us</h4>
          <a
            href={`tel:${adminPhone}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
              color: "#2196f3",
              textDecoration: "none",
              fontWeight: 500,
            }}

          >
            <PhoneIcon width={20} /> Call: {contacts.phone}
          </a>
          <a
            href={`mailto:${contacts.email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#2196f3",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            <ChatBubbleLeftRightIcon width={20} /> EMail: {contacts.email}
          </a>

          <button
            onClick={openContactForm}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                position: "relative",
                top: 8,
                right: 8,
                border: "none",
                borderRadius: "1rem",
                cursor: "pointer",
                background: "#2196f3",
                color: "#fff",
                padding: "0.5rem 1rem",
                fontWeight: 500,
            }}
            aria-label="Chat"
          >
            <ChatBubbleLeftIcon width={20} /> Leave us a message
          </button>
        </>
          ):(
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h4 style={{ margin: "0 0 0.5rem 0" }}>Contact Us</h4>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleInputChange}
                required
                style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
              />
              <input
                type="text"
                name="phone"
                placeholder="Your phone Number"
                value={form.phone}
                onChange={handleInputChange}
                required
                style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleInputChange}
                required
                style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleInputChange}
                required
                rows={3}
                style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
              />
              <button
                type="submit"
                style={{
                  background: "#2196f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 1rem",
                  fontWeight: 500,
                  cursor: "pointer"
                }}
                disabled={submitted}
              >
                {submitted ? "Sent!" : "Send"}
              </button>

              <button
                type="button"
                onClick={() => setShowContactForm(false)}
                style={{
                  background: "none",
                  color: "#2196f3",
                  border: "none",
                  marginTop: "0.5rem",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
              >
                Back
              </button>
            </form>
          )}
        </div>
        ): null}

      <div>
        <span className="flex text-green-600 space-x-3">
          <PhoneIcon width={20} color='green' /> {contacts.phone}
        </span>
        <button
          onClick={() => setIsOpen((v) => !v)}
          style={{
            background: "#2196f3",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: 56,
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(33,150,243,0.2)",
            cursor: "pointer",
          }}
          aria-label="Contact Admin"
        >
          <ChatBubbleLeftRightIcon width={28} />
        </button>
      </div>
      
    </div>
  );
}

export default FloatingChatButton;