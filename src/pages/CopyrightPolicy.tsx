import LegalPageLayout from "@/components/LegalPageLayout";

const CopyrightPolicy = () => (
  <LegalPageLayout
    title="Copyright Policy"
    description="How to report copyright infringement and how we handle takedown notices."
  >
    <section>
      <h2>1. Respect for Intellectual Property</h2>
      <p>
        [Placeholder] WildCamp Adventures respects the intellectual property rights of others and expects users of
        this website to do the same.
      </p>
    </section>
    <section>
      <h2>2. Our Content</h2>
      <p>
        [Placeholder] Text, imagery, and branding on this site are owned by WildCamp Adventures or used under
        licence, and may not be reproduced without permission.
      </p>
    </section>
    <section>
      <h2>3. Reporting Infringement</h2>
      <p>To report content you believe infringes your copyright, send a notice that includes:</p>
      <ol>
        <li>Your name, address, phone number, and email address.</li>
        <li>A description of the copyrighted work you claim has been infringed.</li>
        <li>The URL or location of the material on our site.</li>
        <li>A statement that you have a good-faith belief the use is not authorized.</li>
        <li>A statement that the information in your notice is accurate, and your signature.</li>
      </ol>
      <p>
        Send notices to{" "}
        <a href="mailto:copyright@wildcamp.com" className="text-primary hover:underline">copyright@wildcamp.com</a>.
      </p>
    </section>
    <section>
      <h2>4. Counter-Notices</h2>
      <p>
        [Placeholder] Describe the process for submitting a counter-notice if content was removed in error.
      </p>
    </section>
    <section>
      <h2>5. Repeat Infringement</h2>
      <p>[Placeholder] Explain your policy for handling repeat infringers.</p>
    </section>
  </LegalPageLayout>
);

export default CopyrightPolicy;
