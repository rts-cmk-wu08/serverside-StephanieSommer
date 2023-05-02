const Contact = () => {
  return (
    <main>
      <div>
        <h2>Contact Info</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          perferendis!
        </p>
      </div>
      <div>
        <h3>Office</h3>
        <p>730 Glenstone Ave 65802, Springfield, US</p>
        <p>+123 222 333 44</p>
        <p>+123 666 777 88</p>
        <p>swanky@yourinfo.com</p>
      </div>
      <div>
        <h3>Management</h3>
        <p>730 Glenstone Ave 65802, Springfield, US</p>
        <p>+123 222 333 44</p>
        <p>+123 666 777 88</p>
        <p>swanky@yourinfo.com</p>
      </div>
      <div>
        <h2>Any Questions?</h2>
        <p>Use the form below to get in touch with us.</p>
        <form action="">
          <input
            type="text"
            id="name"
            placeholder="Write Your Full Name Here"
          />
          <input
            type="email"
            id="email"
            placeholder="Write Your Email Here *"
          />
          <input type="number" id="number" placeholder="Phone Number" />
          <input
            type="text"
            id="subject"
            placeholder="Write Your Subject Here"
          />
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Write Your Message Here"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
      <section>
        <h2>Our Stores</h2>
        <p>You can also directly buy products from our stores.</p>
        <div>
          <h3>usa</h3>
          <p>730 Glenstone Ave 65802, Springfield, US</p>
          <p>+123 222 333 44</p>
          <p>+123 666 777 88</p>
          <p>swanky@yourinfo.com</p>
        </div>
        <div>
          <h3>France</h3>
          <p>13 Rue Montmartre 75001, Paris, France</p>
          <p>+123 222 333 44</p>
          <p>+123 666 777 88</p>
          <p>swanky@yourinfo.com</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
