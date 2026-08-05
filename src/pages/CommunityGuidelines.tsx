import LegalPageLayout from "@/components/LegalPageLayout";

const CommunityGuidelines = () => (
  <LegalPageLayout
    title="Community Guidelines"
    description="How we expect guests and community members to treat each other, our staff, and the outdoors."
  >
    <section>
      <h2>1. Our Shared Values</h2>
      <p>
        [Placeholder] WildCamp Adventures is built around respect for people and for nature. These guidelines
        apply to our campgrounds, our website, and any community spaces we operate.
      </p>
    </section>
    <section>
      <h2>2. Be Respectful</h2>
      <ul>
        <li>No harassment, hate speech, threats, or discriminatory behaviour.</li>
        <li>Respect quiet hours and the enjoyment of neighbouring campers.</li>
        <li>Treat staff and fellow guests courteously.</li>
      </ul>
    </section>
    <section>
      <h2>3. Respect the Outdoors</h2>
      <ul>
        <li>Follow Leave No Trace principles and pack out what you pack in.</li>
        <li>Observe fire restrictions and never leave a fire unattended.</li>
        <li>Do not feed or approach wildlife.</li>
      </ul>
    </section>
    <section>
      <h2>4. Content and Reviews</h2>
      <p>
        [Placeholder] If you post reviews, photos, or comments, keep them honest and relevant. Do not post
        spam, private information about others, or content you do not have the rights to share.
      </p>
    </section>
    <section>
      <h2>5. Reporting and Enforcement</h2>
      <p>
        [Placeholder] Describe how guests can report a concern and what actions may follow, such as content
        removal, warnings, or removal from a site.
      </p>
      <p>
        Report concerns to{" "}
        <a href="mailto:community@wildcamp.com" className="text-primary hover:underline">community@wildcamp.com</a>.
      </p>
    </section>
  </LegalPageLayout>
);

export default CommunityGuidelines;
