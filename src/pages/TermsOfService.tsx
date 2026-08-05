import LegalPageLayout from "@/components/LegalPageLayout";

const TermsOfService = () => (
  <LegalPageLayout
    title="Terms of Service"
    description="The terms that govern your use of the WildCamp Adventures website and bookings."
  >
    <section>
      <h2>1. Acceptance of Terms</h2>
      <p>
        [Placeholder] By accessing this website or booking with WildCamp Adventures, you agree to these Terms of
        Service. Replace with your finalized terms.
      </p>
    </section>
    <section>
      <h2>2. Use of the Website</h2>
      <ul>
        <li>Use the site only for lawful purposes and in line with these terms.</li>
        <li>Do not attempt to disrupt, scrape, or gain unauthorized access to the site.</li>
        <li>Provide accurate information when submitting enquiries or bookings.</li>
      </ul>
    </section>
    <section>
      <h2>3. Bookings and Payments</h2>
      <p>
        [Placeholder] Describe reservation confirmation, deposits, accepted payment methods, and pricing terms.
      </p>
    </section>
    <section>
      <h2>4. Cancellations and Refunds</h2>
      <p>[Placeholder] Outline your cancellation windows, refund conditions, and change fees.</p>
    </section>
    <section>
      <h2>5. Site Rules and Guest Conduct</h2>
      <p>
        [Placeholder] Summarize campground rules, quiet hours, fire safety, pet policies, and the consequences of
        breaching them.
      </p>
    </section>
    <section>
      <h2>6. Limitation of Liability</h2>
      <p>
        [Placeholder] Outdoor activities carry inherent risk. Add your reviewed liability and assumption-of-risk
        wording here.
      </p>
    </section>
    <section>
      <h2>7. Changes to These Terms</h2>
      <p>
        [Placeholder] We may update these terms from time to time. The date at the top of this page shows the most
        recent revision.
      </p>
    </section>
    <section>
      <h2>8. Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:legal@wildcamp.com" className="text-primary hover:underline">legal@wildcamp.com</a>.
      </p>
    </section>
  </LegalPageLayout>
);

export default TermsOfService;
