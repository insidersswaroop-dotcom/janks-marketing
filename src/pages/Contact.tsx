import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, PhoneInput } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import ContactHero from "@/components/ContactPage/Hero";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { error } from "console";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    {
      Icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/janksmarketing",
    },
    {
      Icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/janksmarketing/",
    },
    {
      Icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      mobile: "",
      countryCode: "+91",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      mobile: Yup.string()
        .required("Mobile number is required")
        .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const payload = {
          ...values,
          mobile: `${values.countryCode}${values.mobile}`, // combine
        };

        await axios.post("https://api.janksmarketing.com/api/contact", payload);
        // await axios.post("http://localhost:5001/api/contact", payload);


        setSubmitted(true);
        toast.success("Message sent! We'll get back to you within 24 hours.");
        resetForm();
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });



  return (
    <main className="pt-20">
      <ContactHero />

      <section className="py-10 lg:py-0" id="contact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* LEFT SIDE */}
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-primary/5 text-primary">
                Get In Touch
              </span>

              <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-foreground mb-6">
                Let's Start a Conversation
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Have a question or ready to grow your brand? Reach out and our
                team will respond within 24 hours.
              </p>

              {/* Contact Info */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Email Us</p>
                    <p className="text-muted-foreground text-sm">
                      info@janksmarketing.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Call Us</p>
                    <p className="text-muted-foreground text-sm">
                      +91-9315879401, +91-9217139402
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Location</p>
                    <p className="text-muted-foreground text-sm">
                      A3/237, Rohini Sec-7, New Delhi-110085
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="pb-10">
                <p className="text-sm font-semibold mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((link, i) => {
                    const Icon = link.Icon;
                    return (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT SIDE (FORM) */}
            <AnimatedSection direction="right">
              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2
                      className="text-primary mx-auto mb-4"
                      size={40}
                    />
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={formik.handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Input
                          name="firstName"
                          placeholder="First Name"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.firstName &&
                          formik.errors.firstName && (
                            <p className="text-red-500 text-xs py-2">
                              {formik.errors.firstName}
                            </p>
                          )}
                      </div>

                      <div>
                        <Input
                          name="lastName"
                          placeholder="Last Name"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.lastName && formik.errors.lastName && (
                          <p className="text-red-500 text-xs py-2">
                            {formik.errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    <div>
                      <PhoneInput
                        value={formik.values.mobile}
                        countryCode={formik.values.countryCode}
                        onChange={({ countryCode, mobile }) => {
                          formik.setFieldValue("countryCode", countryCode);
                          formik.setFieldValue("mobile", mobile);
                        }}
                      />
                      {formik.touched.mobile && formik.errors.mobile && (
                        <p className="text-red-500 text-xs py-2">
                          {formik.errors.mobile}
                        </p>
                      )}
                    </div>

                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    <Textarea
                      name="message"
                      placeholder="Message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    <Button type="submit" className="w-full">
                      {formik.isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={16} />
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
