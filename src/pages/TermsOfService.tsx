import React from "react";

const TermsOfService = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        <h1 className="text-4xl font-bold mb-6 text-foreground">
          Terms of Service
        </h1>

        <p className="text-muted-foreground mb-6">
          Last updated: April 2026
        </p>

        <div className="space-y-6 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using our services, you agree to comply with these
              terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              2. Services
            </h2>
            <p>
              We provide digital marketing, ecommerce management, content
              creation, and software development services as outlined on our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              3. Payments
            </h2>
            <p>
              All payments must be made as per agreed terms. Failure to pay may
              result in service suspension or termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All content, designs, and materials created by us remain our
              intellectual property unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              We are not liable for any indirect, incidental, or consequential
              damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              6. Termination
            </h2>
            <p>
              We reserve the right to terminate services if terms are violated or
              misuse is detected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              7. Changes to Terms
            </h2>
            <p>
              We may update these terms at any time. Continued use of services
              implies acceptance of updated terms.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default TermsOfService;