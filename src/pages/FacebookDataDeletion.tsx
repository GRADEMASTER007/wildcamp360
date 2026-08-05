import LegalPageLayout from "@/components/LegalPageLayout";

const FacebookDataDeletion = () => (
  <LegalPageLayout
    title="Facebook Data Deletion Instructions"
    description="How to request deletion of data associated with your Facebook login on WildCamp Adventures."
  >
    <section>
      <h2>Overview</h2>
      <p>
        [Placeholder] If you have used Facebook to sign in to WildCamp Adventures, you can ask us to delete the
        data we received from Facebook. Follow the steps below.
      </p>
    </section>
    <section>
      <h2>Option 1: Remove the App from Facebook</h2>
      <ol>
        <li>Log in to Facebook and open <strong>Settings &amp; Privacy → Settings</strong>.</li>
        <li>Select <strong>Apps and Websites</strong>.</li>
        <li>Find <strong>WildCamp Adventures</strong> in the list.</li>
        <li>Choose <strong>Remove</strong> and confirm.</li>
      </ol>
      <p>
        Removing the app stops future data sharing. To also delete data already stored with us, follow Option 2.
      </p>
    </section>
    <section>
      <h2>Option 2: Request Deletion Directly</h2>
      <ol>
        <li>
          Email{" "}
          <a href="mailto:privacy@wildcamp.com" className="text-primary hover:underline">privacy@wildcamp.com</a>{" "}
          with the subject line "Facebook Data Deletion Request".
        </li>
        <li>Include the name and email address associated with your Facebook login.</li>
        <li>We will confirm receipt and process the request. [Placeholder — state your response timeframe.]</li>
      </ol>
    </section>
    <section>
      <h2>What Gets Deleted</h2>
      <p>
        [Placeholder] List the data removed, such as profile name, email address, and profile picture URL received
        from Facebook, and note anything retained for legal or accounting reasons.
      </p>
    </section>
    <section>
      <h2>Questions</h2>
      <p>
        Contact{" "}
        <a href="mailto:privacy@wildcamp.com" className="text-primary hover:underline">privacy@wildcamp.com</a> if
        you need help with a request.
      </p>
    </section>
  </LegalPageLayout>
);

export default FacebookDataDeletion;
