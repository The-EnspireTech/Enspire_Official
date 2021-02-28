const Contact = () => {
  return (
    <section className="contact-section">
      <div className="wrapper">
        <div className="inner">
          <form action="">
            <h3>Contact Us</h3>
            <p>
              Enspire tech support is available for 24/7. So, if any queries
              feel free to contact enspiretech.
            </p>
            <label className="form-group">
              <input type="text" class="form-control" required />
              <span>Your Name</span>
              <span className="border"></span>
            </label>
            <label className="form-group">
              <input type="email" class="form-control" required />
              <span>Your Mail</span>
              <span className="border"></span>
            </label>
            <label class="form-group">
              <textarea name="" id="" class="form-control" required></textarea>
              <span>Your Message</span>
              <span className="border"></span>
            </label>
            <button>
              Submit
              <i class="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
