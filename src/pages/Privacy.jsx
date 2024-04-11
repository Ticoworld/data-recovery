
const Privacy = () => {
  return <div>
    <div className="privacy-showcase bg-gray-800 text-white py-20 px-8 xl:px-20">
        <h2 className="text-4xl lg:text-6xl font-bold text-center">Privacy Policy</h2>         
    </div>
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <p className="text-gray-700 mb-4">
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data we receive from users of our Service
          and the choices you have associated with that data.
        </p>

        {/* 1. Information We Collect */}
        <h3>1. Information We Collect</h3>
        <p className="text-gray-700">
          We collect several different types of information for various purposes
          to improve our Service to you.
        </p>
        <ul className="list-disc space-y-2">
          <li>
            <p>
              **Personal Data**
              <br />
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). Personally identifiable information
              may include, but is not limited to:
            </p>
            <ul className="list-disc space-y-1 ml-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number (optional)</li>
              {/* Add more personal data types as needed */}
            </ul>
          </li>
          <li>
            <p>
              **Usage Data**
              <br />
              We may also collect information about how you access and use the
              Service ("Usage Data"). This Usage Data may include information
              such as your browser type, IP address, device identifiers, the
              pages you visit on our Service, the time and date of your visit,
              the time spent on those pages, unique device identifiers and other
              diagnostic data.
            </p>
          </li>
          {/* Add more information collection sections as needed */}
        </ul>

        {/* 2. Use of Collected Data */}
        <h3>2. Use of Collected Data</h3>
        <p className="text-gray-700">
          We use the collected data for various purposes:
        </p>
        <ul className="list-disc space-y-2">
          <li>
            <p>To provide and maintain our Service</p>
          </li>
          <li>
            <p>To improve or personalize our Service</p>
          </li>
          <li>
            <p>
              To develop new products, services, features, and functionalities
            </p>
          </li>
          <li>
            <p>To send you marketing and promotional communications (with your
              consent)</p>
          </li>
          <li>
            <p>To respond to your inquiries and requests</p>
          </li>
          {/* Add more data usage purposes as needed */}
        </ul>

        {/* 3. Disclosure of Data to Third Parties */}
        <h3>3. Disclosure of Data to Third Parties</h3>
        <p className="text-gray-700">
          We may disclose your Personal Data to third-party vendors and service
          providers who provide services on our behalf. These third parties
          will only access your Personal Data to perform specific tasks on our
          behalf and are obligated not to disclose or use it for any other
          purpose.
        </p>

        {/* 4. Data Retention */}
        <h3>4. Data Retention</h3>
        <p className="text-gray-700">
          We will retain your Personal Data only for as long as necessary for
          the purposes set out in this Privacy Policy. We will retain and use
          your Personal Data to the extent necessary to comply with our legal
          obligations, resolve disputes, and enforce our policies.
        </p>

        {/* 5. Security Measures */}
        <h3>5. Security Measures</h3>
        <p className="text-gray-700">
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially
          acceptable means to protect your Personal Data, we cannot guarantee
          its absolute security.
        </p>
         {/* 6. Children's Privacy */}
         <h3>6. Children's Privacy</h3>
        <p className="text-gray-700">
          Our Service does not address anyone under the age of [Age Limit]. We
          do not knowingly collect personal data from children under [Age Limit].
          If you are a parent or guardian and you are aware that your child has
          provided us with Personal Data, please contact us. If we become aware
          that we have collected Personal Data from a child under [Age Limit],
          we will take steps to remove that information from our servers.
        </p>

        {/* 7. Your Rights */}
        <h3>7. Your Rights</h3>
        <p className="text-gray-700">
          Depending on your location, you may have certain rights regarding your
          Personal Data. You may have the right to:
        </p>
        <ul className="list-disc space-y-2">
          <li>
            <p>Request access to your Personal Data</p>
          </li>
          <li>
            <p>Request a correction of your Personal Data</p>
          </li>
          <li>
            <p>Request deletion of your Personal Data</p>
          </li>
          <li>
            <p>Object to the processing of your Personal Data</p>
          </li>
          {/* Add more user rights as applicable */}
        </ul>
        <p className="text-gray-700">
          To exercise any of these rights, please contact us using the contact
          information provided below.
        </p>

        {/* 8. Links to Other Websites */}
        <h3>8. Links to Other Websites</h3>
        <p className="text-gray-700">
          Our Service may contain links to other websites that are not operated
          by us. If you click on a third-party link, you will be directed to
          that third party's site. We strongly advise you to review the
          Privacy Policy of every site you visit.
        </p>

        {/* 9. Changes to This Privacy Policy */}
        <h3>9. Changes to This Privacy Policy</h3>
        <p className="text-gray-700">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        {/* 10. Contact Us */}
        <h3>10. Contact Us</h3>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us
          by email at [Your Email Address].
        </p>
      </div>
    </section>

  </div>;
};

export default Privacy;
