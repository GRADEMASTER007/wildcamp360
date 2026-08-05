import LegalPageLayout from "@/components/LegalPageLayout";

const CookiePolicy = () => (
  <LegalPageLayout
    title="Cookie Policy"
    description="What cookies and similar technologies we use on the WildCamp Adventures website."
  >
    <section>
      <h2>1. What Are Cookies?</h2>
      <p>
        [Placeholder] Cookies are small text files stored on your device that help websites remember your
        preferences and understand how the site is used.
      </p>
    </section>
    <section>
      <h2>2. Types of Cookies We Use</h2>
      <ul>
        <li>
          <strong>Essential:</strong> required for the website to function, including remembering your cookie
          consent choice.
        </li>
        <li>
          <strong>Preference:</strong> remember choices such as language or region. [Placeholder]
        </li>
        <li>
          <strong>Analytics:</strong> help us understand which pages are popular. [Placeholder — list your
          analytics provider if used.]
        </li>
        <li>
          <strong>Marketing:</strong> [Placeholder — list any advertising or retargeting tools if used.]
        </li>
      </ul>
    </section>
    <section>
      <h2>3. Managing Cookies</h2>
      <p>
        You can clear or block cookies through your browser settings. Blocking essential cookies may affect how
        parts of the site behave, including whether the cookie banner reappears.
      </p>
    </section>
    <section>
      <h2>4. Third-Party Cookies</h2>
      <p>
        [Placeholder] Describe any embedded third-party content, such as maps, videos, or social widgets, that may
        set its own cookies.
      </p>
    </section>
    <section>
      <h2>5. Contact</h2>
      <p>
        Cookie questions can be sent to{" "}
        <a href="mailto:privacy@wildcamp.com" className="text-primary hover:underline">privacy@wildcamp.com</a>.
      </p>
    </section>
  </LegalPageLayout>
);

export default CookiePolicy;
