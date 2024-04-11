const Terms = () => {
    const termsData = [
        { title: "Data Security", description: "The protection of information from unauthorized access, use, disclosure, disruption, modification, or destruction." },
        { title: "Privacy", description: "The right to control your personal information and how it is used." },
        { title: "Compliance", description: "Adhering to relevant laws and regulations regarding data handling." },
        { title: "Encryption", description: "The process of transforming data into a scrambled form to protect it. Encrypted data can only be accessed by authorized users with a decryption key." },
        { title: "Authentication", description: "The process of verifying a user's identity. Common methods include passwords, biometrics, and multi-factor authentication." },
        { title: "Authorization", description: "The process of granting a user access to specific resources or systems based on their permissions." },
        { title: "Access Control", description: "The set of policies and procedures that define who has access to what information and systems." },
        { title: "Data Breach", description: "An incident where unauthorized access to sensitive data occurs. Breaches can be caused by hacking, malware, human error, or physical theft." },
        { title: "Incident Response", description: "The plan of action taken in response to a data security incident. It involves identifying the breach, containing the damage, and notifying affected individuals." },
        { title: "Vulnerability", description: "A weakness in a system or process that can be exploited by attackers. Patching vulnerabilities is crucial for maintaining security." },
        { title: "Threat", description: "A potential malicious actor or event that could compromise data security. Threats can be internal or external." },
        { title: "Risk Assessment", description: "The process of identifying and evaluating potential data security risks." },
        { title: "Cybersecurity", description: "The practice of protecting information systems, networks, and devices from unauthorized access, use, disclosure, disruption, modification, or destruction." },
        { title: "Phishing", description: "A type of social engineering attack where attackers attempt to trick users into revealing sensitive information, such as passwords or credit card details." },
        { title: "Malware", description: "Malicious software designed to harm a computer system. Examples include viruses, worms, ransomware, and spyware." },
        { title: "Denial-of-Service (DoS) Attack", description: "An attack that attempts to overload a system with traffic, making it unavailable to legitimate users." },
        { title: "Multi-Factor Authentication (MFA)", description: "An authentication method that requires multiple verification factors, such as a password and a fingerprint scan, to access a system." },
        { title: "Zero-Trust Security", description: "A security model that assumes no user or device is inherently trustworthy. All access requests must be continuously verified." },
        { title: "Data Loss Prevention (DLP)", description: "Technologies and practices that prevent sensitive data from being accidentally or intentionally disclosed or exfiltrated." },
        { title: "Data Sovereignty", description: "The concept that data should be subject to the laws and regulations of the country where it is collected." },
        { title: "Biometrics", description: "A type of authentication that uses unique physical or behavioral characteristics, such as fingerprints, facial recognition, or iris scans." },
        { title: "Cryptography", description: "The science of securing information through encryption and decryption techniques." },
        { title: "Public Key Infrastructure (PKI)", description: "A system that uses digital certificates and encryption keys to establish secure communication channels." },
        { title: "Security Information and Event Management (SIEM)", description: "A system that collects and analyzes security logs from various sources to detect and respond to security incidents." },
        { title: "Penetration Testing (Pen Testing)", description: "The authorized simulated attack on a computer system to identify and exploit vulnerabilities." },
      ];
    
        return (
            <div>
                 <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium mb-4">Data Recovery Terminology</h2>
        <p className="text-gray-700 mb-4">
          Familiarize yourself with these key terms to understand our data recovery services.
        </p>
        <ul className="list-disc space-y-2">
          {termsData.map((term, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-gray-700">{term.title}</span>
              {term.description && (
                <span className="text-sm text-gray-500">( {term.description} )</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
            </div>
        );
};

export default Terms;
