import LegalPageLayout from "@/components/LegalPageLayout";

const PrivacyPolicy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    description="How WildCamp Adventures collects, uses, and protects your personal information."
  >
    <section>
      <h2>1. Introduction</h2>
      <p>
        [Placeholder] This Privacy Policy explains how WildCamp Adventures ("we", "us") handles information
        about visitors to our website and guests who book our campsites and RV parks. Replace this section with
        your finalized policy language.
      </p>
    </section>
    <section>
      <h2>2. Information We Collect</h2>
      <ul>
        <li>Contact details you submit through our forms, such as name, email address, and phone number.</li>
        <li>Booking details, such as dates, destination preferences, and party size.</li>
        <li>Technical data such as browser type, device, and pages visited.</li>
        <li>[Placeholder] Add any additional categories of data your business collects.</li>
      </ul>
    </section>
    <section>
      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To respond to enquiries and manage reservations.</li>
        <li>To improve our website, services, and customer support.</li>
        <li>To send updates or offers where you have asked to receive them.</li>
      </ul>
    </section>
    <section>
      <h2>4. Sharing and Disclosure</h2>
      <p>
        [Placeholder] Describe the service providers and partners that process data on your behalf, and the
        circumstances in which information may be disclosed for legal reasons.
      </p>
    </section>
    <section>
      <h2>5. Data Retention</h2>
      <p>[Placeholder] State how long each category of information is kept and how it is deleted.</p>
    </section>
    <section>
      <h2>6. Your Rights</h2>
      <p>
        [Placeholder] Depending on where you live, you may have rights to access, correct, delete, or restrict
        the use of your personal information. Describe how visitors can make a request.
      </p>
    </section>
    <section>
      <h2>7. Contact Us</h2>
      <p>
        Privacy questions can be sent to <a href="mailto:privacy@wildcamp.com" className="text-primary hover:underline">privacy@wildcamp.com</a>.
      </p>
    </section>
  </LegalPageLayout>
);

export default PrivacyPolicy;
