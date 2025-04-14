import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Legal.module.css';

function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Antistress Space';
    
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
        <h1>Terms and Conditions</h1>
        <p className={styles.lastUpdated}>Last Updated: 12/04/2025</p>
        
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to Antistress Space. By accessing or using our website, mobile applications, or any of our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>
        
        <section>
          <h2>2. Description of Service</h2>
          <p>
            Antistress Space offers free digital tools designed to help reduce stress and promote relaxation. Our services include interactive antistress activities, including but not limited to the Antistress Diary and Antistress Void.
          </p>
        </section>
        
        <section>
          <h2>3. User Conduct</h2>
          <p>
            You agree to use our services only for lawful purposes and in a way that does not infringe upon the rights of others. Prohibited activities include:
          </p>
          <ul>
            <li>Using our services for any illegal purpose</li>
            <li>Attempting to interfere with the proper functioning of our services</li>
            <li>Attempting to access data not intended for you</li>
            <li>Engaging in any conduct that restricts or inhibits anyone's use of our services</li>
          </ul>
        </section>
        
        <section>
          <h2>4. Free Services and Donations</h2>
          <p>
            Antistress Space provides its core services free of charge. We may accept donations to support ongoing development and server costs. Donations are entirely voluntary and do not entitle users to any additional services, features, or benefits beyond what is freely available to all users.
          </p>
        </section>
        
        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, and software, are owned by Antistress Space or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            We acknowledge the use of certain third-party resources, such as Black Hole Stock Videos by Vecteezy, which are used under their respective licenses.
          </p>
        </section>
        
        <section>
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            Our services are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or secure. Any material downloaded or otherwise obtained through the use of our services is accessed at your own discretion and risk.
          </p>
        </section>
        
        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Antistress Space shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services.
          </p>
        </section>
        
        <section>
          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. We will provide notification of any significant changes by posting the new Terms and Conditions on our website. Your continued use of our services after any such changes constitutes your acceptance of the new Terms and Conditions.
          </p>
        </section>
        
        <section>
          <h2>9. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law principles.
          </p>
        </section>
        
        <section>
          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at space.antistress@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms; 