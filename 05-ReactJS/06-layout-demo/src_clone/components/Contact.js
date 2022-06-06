import React from "react";

const Contact = () => {
  return (
    <article className="contact" id="contact">
      <div className="art-title">
        <h2>Contact</h2>
      </div>
      <div className="art-content">
        <p>
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste. Do not hesitate to
          contact us.
        </p>
        <p className="addr">Catering Service, 42nd Living St, 43043 New York, NY</p>
        <p>
          You can also contact us by phone 00553123-2323 or email
          catering@catering.com, or you can send us a message here:
        </p>
      </div>

      <form action="#" method="get">
        <input type="text" placeholder="Name" required />
        <input type="number" placeholder="How many people" required />
        <input
          type="datetime-local"
          placeholder="Date and time"
          value="2020-11-16"
          required
        />
        <input
          type="text"
          placeholder="Message / Special requirements"
          required
        />
        <button type="submit" id="submit">
          SEND MESSAGE
        </button>
      </form>

    </article>
  );
};

export default Contact;
