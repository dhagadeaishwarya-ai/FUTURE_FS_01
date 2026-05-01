import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        const message = data?.error || "Failed to send";
        alert(message);
        return;
      }

      alert("Message saved!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact submit failed:", err);
      alert("Server error ❌");
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}