import LegalPage, {
  LegalList,
  LegalNote,
  LegalSection,
} from "@/components/legal/LegalPage";

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Cookie Policy"
      intro="This Cookie Policy explains how Agrosyne Global Commodity Private Limited may use cookies and similar technologies when you visit www.agrosyne.com."
      updated="September 6, 2026"
    >
      <LegalSection number="01" title="What Are Cookies?">
        <p>
          Cookies are small text files that websites may place on your device
          when you visit them. They allow websites to recognize a device,
          remember certain information and support particular functions.
        </p>

        <p>
          Similar technologies, such as pixels, tags and local storage, may
          also be used for purposes comparable to cookies.
        </p>
      </LegalSection>

      <LegalSection number="02" title="How We May Use Cookies">
        <p>
          Agrosyne may use cookies and similar technologies for purposes such
          as:
        </p>

        <LegalList>
          <li>Helping the website function properly.</li>
          <li>Maintaining security and preventing misuse.</li>
          <li>Remembering certain preferences.</li>
          <li>Understanding website performance.</li>
          <li>Understanding how visitors interact with our website.</li>
          <li>Improving website functionality and user experience.</li>
        </LegalList>
      </LegalSection>

      <LegalSection number="03" title="Types of Cookies">
        <p>
          Depending on the technologies implemented on our website, cookies may
          generally fall into the following categories:
        </p>

        <LegalList>
          <li>
            <strong>Essential cookies:</strong> These support basic website
            operation, security and functionality.
          </li>

          <li>
            <strong>Preference cookies:</strong> These may remember settings or
            choices made while using the website.
          </li>

          <li>
            <strong>Analytics cookies:</strong> These may help us understand
            website traffic and performance.
          </li>

          <li>
            <strong>Third-party cookies:</strong> These may be placed by
            third-party services integrated into the website.
          </li>
        </LegalList>

        <LegalNote>
          The actual cookies and technologies used on the website may change as
          we add, remove or update website functionality.
        </LegalNote>
      </LegalSection>

      <LegalSection number="04" title="Third-Party Technologies">
        <p>
          Certain third-party providers supporting hosting, security,
          analytics or other website functionality may use cookies or similar
          technologies when their services are integrated with our website.
        </p>

        <p>
          The collection and use of information by those third parties may also
          be governed by their own privacy policies and terms.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Managing Cookies">
        <p>
          Most web browsers allow you to control or delete cookies through
          their settings.
        </p>

        <p>
          You may be able to configure your browser to block cookies, notify
          you before a cookie is stored or delete existing cookies.
        </p>

        <p>
          Please note that disabling certain cookies may affect the
          functionality or performance of parts of the website.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Changes to This Cookie Policy">
        <p>
          We may update this Cookie Policy when our website, technologies or
          business practices change.
        </p>

        <p>
          The latest version will be identified by the "Last updated" date
          displayed at the beginning of this page.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Contact Us">
        <p>
          If you have questions about our use of cookies or similar
          technologies, contact us:
        </p>

        <LegalNote>
          <strong>Agrosyne Global Commodity Private Limited</strong>
          <br />
          Plot No 3, Park House, Infront of Akashwani, MI Road
          <br />
          Jaipur, Rajasthan 302001
          <br />
          India
          <br />
          Phone: +91 82904 45443
          <br />
          Email: legal@agrosyne.com
        </LegalNote>
      </LegalSection>
    </LegalPage>
  );
}