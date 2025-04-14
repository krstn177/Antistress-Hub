import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Legal.module.css';

function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Antistress Space';
    
    // Reset any page background when component unmounts
    return () => {
      document.documentElement.style.setProperty('--page-background', '#ffffff');
      document.documentElement.style.setProperty('--safe-area-background', '#ffffff');
    };
  }, []);

  return (
    <div className={styles.legalContainer}>
      <Link to="/" className={styles.backLink}>
        ← Go back
      </Link>
      <div className={styles.legalContent}>
        <h1>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: 12/04/2025</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how Antistress Space ("we," "our," or "us") collects, uses, and shares information when you use our website and services. We respect your privacy and are committed to protecting your personal information.
          </p>
        </section>
        
        <section>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <p>
            We collect minimal personal information. If you choose to make a donation, we may collect payment information, which is processed securely through our payment processors. We do not store complete credit card information on our servers.
          </p>
          
          <h3>2.2 Information Collected Automatically</h3>
          <p>
            When you use our services, we may automatically collect certain information, including:
          </p>
          <ul>
            <li>Device information (such as device type, operating system, and browser type)</li>
            <li>Usage data (such as how you interact with our services)</li>
            <li>Log data (such as IP address, access times, and pages viewed)</li>
          </ul>
          <p>
            This information is collected using cookies and similar technologies. You can control cookies through your browser settings.
          </p>
        </section>
        
        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process donations</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Detect, prevent, and address technical issues</li>
          </ul>
        </section>
        
        <section>
          <h2>4. Data Retention</h2>
          <p>
            We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </section>
        
        <section>
          <h2>5. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your information in the following limited circumstances:
          </p>
          <ul>
            <li>With service providers who perform services on our behalf (such as payment processors)</li>
            <li>To comply with legal obligations</li>
            <li>In connection with a business transfer (such as a merger or acquisition)</li>
            <li>With your consent</li>
          </ul>
        </section>
        
        <section>
          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to delete your personal information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in Section 10.
          </p>
        </section>
        
        <section>
          <h2>7. Children's Privacy</h2>
          <p>
            Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us.
          </p>
        </section>
        
        <section>
          <h2>8. Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>
        
        <section>
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>
        
        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>Email: space.antistress@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

export default Privacy; 