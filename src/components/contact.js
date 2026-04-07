function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form action="https://formspree.io/f/your-form-id" method="POST">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;