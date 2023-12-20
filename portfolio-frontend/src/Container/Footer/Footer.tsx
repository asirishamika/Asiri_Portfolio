import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { images } from "../../Constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";
import "./Footer.scss";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

type FormData = z.infer<typeof schema>;

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: FormData) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: data.name,
      email: data.email,
      message: data.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a
            href="mailto:asirishamika99@gmail.com"
            className="p-text"
            aria-required
          >
            asirishamika99@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+94 (77) 193-2585" className="p-text">
            +94 (77) 193-2585
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              {...register("name")}
              className="p-text"
              type="text"
              placeholder="Your Name"
            />
          </div>
          {errors.name && errors.name.message && (
            <p style={{ color: "#B80000" }}>{errors.name.message}</p>
          )}
          <div className="app__flex">
            <input
              {...register("email")}
              className="p-text"
              type="email"
              placeholder="Your Email"
            />
          </div>
          {errors.email && errors.email.message && (
            <p style={{ color: "#B80000" }}>{errors.email.message}</p>
          )}
          <div>
            <textarea
              {...register("message")}
              className="p-text"
              placeholder="Your Message"
            />
          </div>
          {errors.message && errors.message.message && (
            <p style={{ color: "#B80000" }}>{errors.message.message}</p>
          )}
          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
