import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './PrivacyPolicy.css';

export default function ChildSafety() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='privacy-policy-wrapper'>
      <header className='privacy-policy-header container'>
        <Link to='/' className='privacy-policy-logo' aria-label='Go back home'>
          orbit
        </Link>
        <ThemeToggle />
      </header>

      <main className='privacy-policy-main container'>
        <article className='privacy-policy-article'>
          <div className='privacy-policy-headline-block'>
            <p className='privacy-policy-kicker'>Child Safety</p>
            <h1 className='privacy-policy-title'>
              ORBIT — CHILD SAFETY STANDARDS
            </h1>
          </div>

          <div className='privacy-policy-standalone'>
            <p className='privacy-policy-meta-line'>
              <strong>Public policy</strong> &nbsp;|&nbsp; Last updated: 13 November 2026
            </p>
          </div>

          <div className='privacy-policy-callout'>
            <div className='privacy-policy-callout-header'>
              <span className='privacy-policy-callout-badge'>Our commitment</span>
            </div>
            <p>
              Orbit maintains a zero-tolerance policy towards Child Sexual Abuse and Exploitation (CSAE). The safety and well-being of our community are fundamental to how we build and operate Orbit.
            </p>
          </div>

          <p className='privacy-policy-lead'>
            At Orbit, we believe everyone deserves to feel safe, respected and welcome when connecting with others and discovering experiences around them. These Child Safety Standards explain our commitment to preventing child sexual abuse and exploitation, the conduct we prohibit, how users can report concerns, and how Orbit responds to violations.
          </p>

          <section className='privacy-policy-section'>
            <h2>1. Our commitment to child safety</h2>
            <p>
              Orbit is an 18+ platform designed for adults to discover people, activities and Catchups around them. Individuals under the age of 18 are not permitted to create an account, access or use Orbit.
            </p>
            <p>We are committed to:</p>
            <ul>
              <li>Maintaining a strict prohibition against Child Sexual Abuse and Exploitation (CSAE).</li>
              <li>Preventing the creation, sharing, distribution or promotion of Child Sexual Abuse Material (CSAM).</li>
              <li>Taking appropriate action against accounts and content that violate these standards.</li>
              <li>Providing users with accessible channels to report child safety concerns.</li>
              <li>Cooperating with relevant law enforcement agencies and child protection authorities where required by applicable law.</li>
            </ul>
            <p>
              Our commitment applies across the entire Orbit platform, including user profiles, Catchups, attendee interactions, group chats and other user-generated content.
            </p>
          </section>

          <section className='privacy-policy-section'>
            <h2>2. Zero-tolerance policy towards CSAE and CSAM</h2>
            <p>
              Orbit strictly prohibits any conduct that sexually exploits, abuses, endangers or facilitates harm to children.
            </p>

            <div className='privacy-policy-subsection'>
              <h3>Child Sexual Abuse Material (CSAM)</h3>
              <ul>
                <li>Creating, uploading, sharing, distributing or possessing sexual content involving minors.</li>
                <li>Sharing images, videos or other material depicting the sexual abuse or exploitation of children.</li>
                <li>Soliciting, requesting or attempting to obtain sexual images or videos of minors.</li>
              </ul>
            </div>

            <div className='privacy-policy-subsection'>
              <h3>Grooming and sexual exploitation</h3>
              <ul>
                <li>Attempting to establish relationships with minors for sexual purposes.</li>
                <li>Manipulating, coercing, threatening or exploiting children for sexual activity.</li>
                <li>Soliciting sexual conversations, images or personal information from minors.</li>
                <li>Facilitating child trafficking, sexual exploitation or any form of abuse.</li>
              </ul>
            </div>

            <div className='privacy-policy-subsection'>
              <h3>Sexualisation and endangerment of children</h3>
              <ul>
                <li>Content that sexualises, promotes or encourages the exploitation of minors.</li>
                <li>Attempts to use Orbit to identify, approach or target children for abusive or exploitative purposes.</li>
                <li>Any other conduct that facilitates or encourages child sexual abuse or exploitation.</li>
              </ul>
            </div>

            <p>
              This prohibition applies to all users, regardless of their stated intentions or the format in which the conduct occurs.
            </p>
          </section>

          <section className='privacy-policy-section'>
            <h2>3. Age restrictions</h2>
            <p>
              Orbit is exclusively intended for individuals aged 18 and above. Users must meet the minimum age requirement to register and use the platform. We do not knowingly permit individuals under the age of 18 to use Orbit.
            </p>
            <p>
              If we become aware that an account belongs to an individual under 18, we may restrict or suspend access while reviewing the concern and take appropriate action, including account termination. Users must not misrepresent their age or assist another individual in bypassing Orbit's age restrictions.
            </p>
          </section>

          <section className='privacy-policy-section'>
            <h2>4. Reporting child safety concerns</h2>
            <p>
              We encourage users to report any activity, account, profile, Catchup, message or content that may involve child sexual abuse, exploitation or endangerment.
            </p>

            <div className='privacy-policy-subsection'>
              <h3>In-app reporting</h3>
              <p>
                Users can use Orbit's in-app reporting mechanism to report profiles, Catchups, messages or other content that violates our safety standards. Where a concern involves child safety or suspected CSAE/CSAM, users should identify it as a child safety concern in their report.
              </p>
            </div>

            <div className='privacy-policy-subsection'>
              <h3>Direct contact</h3>
              <p>
                Email: <a href='mailto:hello@joinorbit.org'>hello@joinorbit.org</a>
              </p>
              <p>
                Please include relevant information about the account, content or incident so that our team can assess the concern.
              </p>
            </div>

            <div className='privacy-policy-alert'>
              <strong>Important:</strong> Do not download, forward, reproduce or attach suspected CSAM when submitting a report. Provide identifying information or relevant context instead.
            </div>

            <p>
              Reports are treated seriously and reviewed with appropriate priority and confidentiality.
            </p>
          </section>

          <section className='privacy-policy-section'>
            <h2>5. How Orbit responds to reports</h2>
            <p>
              Orbit takes appropriate action when it becomes aware of potential child sexual abuse or exploitation on its platform.
            </p>
            <ul className='privacy-policy-steps-list'>
              <li>
                <strong>Receiving the report:</strong> A child safety concern is received through an available reporting channel.
              </li>
              <li>
                <strong>Review and assessment:</strong> The concern is assessed by the designated moderation representative, with appropriate escalation based on its severity.
              </li>
              <li>
                <strong>Protective action:</strong> Access to suspected offending content may be restricted, and the relevant account may be suspended or disabled while the matter is assessed.
              </li>
              <li>
                <strong>Investigation and escalation:</strong> Relevant information is reviewed and escalated where necessary.
              </li>
              <li>
                <strong>Enforcement:</strong> Appropriate action is taken against accounts or content that violate these standards.
              </li>
              <li>
                <strong>Authority cooperation:</strong> Confirmed cases are reported to the relevant authorities where required by applicable laws and regulations.
              </li>
            </ul>
            <p>
              We may take immediate protective action where there is a credible indication of child abuse or exploitation. We do not rely solely on the number of reports received when determining the seriousness of a concern.
            </p>
          </section>

          <section className='privacy-policy-section'>
            <h2>6. Enforcement and consequences</h2>
            <p>Violations of these Child Safety Standards may result in:</p>
            <ul>
              <li>Removal or restriction of offending content.</li>
              <li>Temporary suspension of an account.</li>
              <li>Permanent termination of an account.</li>
              <li>Restrictions on access to Orbit's services.</li>
              <li>Escalation and reporting to relevant law enforcement or child protection authorities, where appropriate or legally required.</li>
            </ul>
            <p>
              Orbit reserves the right to take action based on the severity and nature of the violation, applicable laws and the need to protect individuals and the wider community. Serious violations involving child sexual abuse or exploitation may result in immediate account termination and referral to the appropriate authorities.
            </p>
          </section>

          <section className='privacy-policy-section'>
            <h2>7. Cooperation with law enforcement and authorities</h2>
            <p>
              Orbit is committed to cooperating with relevant law enforcement agencies, child protection organisations and regulatory authorities in addressing child sexual abuse and exploitation.
            </p>
            <p>
              We will take appropriate steps to report confirmed CSAM to the relevant regional or national authorities in accordance with applicable laws and regulations.
            </p>
            <div className='privacy-policy-resource-box'>
              <p>
                <strong>India's National Cyber Crime Reporting Portal:</strong>{' '}
                <a
                  href='https://www.cybercrime.gov.in/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.cybercrime.gov.in/
                </a>
              </p>
            </div>
            <p>
              We will handle relevant information and records in accordance with applicable legal requirements and cooperate with lawful requests from competent authorities.
            </p>
          </section>

          <section className='privacy-policy-section'>
            <h2>8. Child Safety Point of Contact</h2>
            <p>
              Orbit has designated a point of contact responsible for addressing child safety concerns and communicating with Google Play or relevant authorities regarding our child safety practices.
            </p>
            <div className='privacy-policy-contact-card'>
              <h3>Child Safety Contact</h3>
              <p>
                Email:{' '}
                <a href='mailto:hello@joinorbit.org'>hello@joinorbit.org</a>
              </p>
              <p>
                Our designated representative is responsible for receiving and coordinating child safety concerns, understanding Orbit's moderation and enforcement procedures, and facilitating appropriate action when required.
              </p>
            </div>
          </section>

          <section className='privacy-policy-section'>
            <h2>9. Privacy and confidentiality</h2>
            <p>
              We understand the sensitive nature of child safety reports. Information received through reports and investigations will be handled with appropriate confidentiality and access restrictions.
            </p>
            <p>
              We will take reasonable steps to protect the identity and personal information of individuals who report concerns, subject to applicable legal obligations and legitimate safety requirements.
            </p>
            <p>
              Relevant records may be retained and shared with competent authorities where legally required or necessary to address serious safety concerns.
            </p>
          </section>

          <section className='privacy-policy-section'>
            <h2>10. Updates to these standards</h2>
            <p>
              Orbit may periodically review and update these Child Safety Standards to reflect changes in our platform, safety practices, applicable laws and regulatory requirements. Any updated version will be published on this page.
            </p>
          </section>

          <div className='privacy-policy-closing'>
            <p>
              Questions or concerns? Contact us at{' '}
              <a href='mailto:hello@joinorbit.org'>hello@joinorbit.org</a>
            </p>
            <p className='privacy-policy-tagline'>ORBIT · MAKE ROOM FOR LIFE</p>
          </div>

          <div className='privacy-policy-footer-actions'>
            <Link to='/' className='privacy-policy-button'>
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
