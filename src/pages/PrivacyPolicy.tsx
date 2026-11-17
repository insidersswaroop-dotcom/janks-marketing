import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <h1 className="text-4xl font-bold mb-6 text-foreground">
          Privacy Policy
        </h1>

        <p className="text-muted-foreground mb-6">
          Last updated: April 2026
        </p>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information such as your name, email address,
              phone number, and business details when you interact with our
              services, fill out forms, or book a consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to provide services, improve user
              experience, communicate updates, and run marketing campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              3. Data Protection
            </h2>
            <p>
              We implement strict security measures to protect your personal data
              and ensure it is not misused, accessed, or disclosed without
              authorization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              4. Third-Party Services
            </h2>
            <p>
              We may use third-party tools and services for analytics,
              advertising, and communication. These platforms have their own
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              5. Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience and
              analyze traffic patterns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or request deletion of your
              personal data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;