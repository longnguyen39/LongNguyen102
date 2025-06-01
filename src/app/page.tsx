import Image from "next/image";
import styles from "./page.module.css";
import { Github, AppleMac } from 'iconoir-react';
import { FaLinkedinIn, FaApple, FaGithub } from 'react-icons/fa';
import EmailCopyLink from '@/components/EmailCopyLink';
import Navbar from '@/components/Navbar'; // Assuming @ is configured for src
import AnimatedOnce from '@/components/AnimatedOnce';
import AppCard from '@/components/AppCard';

export default function Home() {
  // Footer social icons - for use at the bottom right
  const FooterSocials = () => (
    <div className={styles.footerSocials}>
      <a
        href="https://www.linkedin.com/in/long-nguyen-309092205"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerSocialLink}
      >
        <FaLinkedinIn className="linkedin" style={{ color: '#0077b5', fontSize: '1.5em' }} />
      </a>
      <a
        href="https://github.com/longnguyen39"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerSocialLink}
      >
        <FaGithub className="github" style={{ color: '#27ae60', fontSize: '1.5em' }} />
      </a>
      <a
        href="https://apps.apple.com/us/developer/long-nguyen/id1519144221"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerSocialLink}
      >
        <FaApple style={{ color: '#fff', fontSize: '1.5em' }} />
      </a>
    </div>
  );
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <AnimatedOnce animation="slideUp" duration={0.5} delay={0} animateOnce={true}>
          <section className={styles.heroRow}>
          <div className={styles.heroSpacer}></div>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroImageCol}>
              <Image
                src="/profile.jpg"
                alt="Long Nguyen profile"
                width={264}
                height={264}
                className={styles.profileImage}
                priority
              />
              <div className={styles.contactLinks}>
                <EmailCopyLink email="longnguyen39ios@gmail.com" className={styles.contactLinkItem} />
                
                <a href="https://www.linkedin.com/in/long-nguyen-309092205" target="_blank" rel="noopener noreferrer" className={styles.contactLinkItem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <FaLinkedinIn style={{ color: '#0077b5' }} />
  <span style={{ color: '#fff' }}>LinkedIn</span>
</a>
                <a href="https://github.com/longnguyen39" target="_blank" rel="noopener noreferrer" className={styles.contactLinkItem}><Github style={{ color: '#27ae60' }} /> GitHub</a>
                <a href="https://apps.apple.com/us/developer/long-nguyen/id1519144221" target="_blank" rel="noopener noreferrer" className={styles.contactLinkItem} style={{ color: '#fff' }}>
                  <AppleMac /> App Store
                </a>
              </div>
            </div>
            <div className={styles.heroIntroCol}>
              <h1 className={styles.title}>Long Nguyen</h1>
              <h2 className={styles.subtitle}>iOS Developer</h2>
              <div className={styles.bio}>
                <ul className={styles.bioList}>
                  <li>
                    <strong>iOS Developer:</strong> Crafting impactful iOS applications designed to enhance daily life. I am proud to have published many apps on the App Store!
                  </li>
                  <li>
                    <strong>AI Enthusiast:</strong> Deeply exploring how Artificial Intelligence can serve as a &quot;bicycle for the mind&quot;, empowering us to innovate, think smarter, and improve our world.
                  </li>
                  <li>
                    <strong>Active Lifestyle:</strong> When I&apos;m not coding, you&apos;ll often find me:
                    <ul className={styles.hobbyList}>
                      <li>Hiking in the mountains</li>
                      <li>Working out at the gym</li>
                      <li>Running in the park</li>
                      <li>Playing Pickleball with friends</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.links}>
                <a
                  className={styles.primaryBtn}
                  href="https://apps.apple.com/us/developer/long-nguyen/id1519144221"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Apps on the App Store
                </a>
              </div>
            </div>
          </div>
        </section>
        </AnimatedOnce>
        <AnimatedOnce animation="slideUp" duration={0.5} delay={0.1} animateOnce={true}>
          <section className={styles.myAppsSection}>
          <h2 className={styles.myAppsTitle}>My Featured Apps</h2>
          <div className={styles.myAppsGrid}>
            <AppCard
              title="ChefBot"
              image="/ChefBotFeatured.png"
              description="Your AI-powered cooking assistant that helps you create delicious recipes from ingredients you have at home. Our app&apos;s purpose is to make the most with the least."
              githubLink="https://github.com/longnguyen39/ChefBot"
              appStoreLink="https://apps.apple.com/us/app/chefbot-ai-powered-recipes/id6745570785"
              appId="chefbot"
            />
            <AppCard
              title="Daily Boost!"
              image="/DailyBoostFeatured.png"
              description="Get daily motivational quotes from your favorite fictional and non-fictional characters to boost your energy and motivation every day. You can change your quote categories."
              githubLink="https://github.com/longnguyen39/DailyBoost"
              appStoreLink="https://apps.apple.com/us/app/daily-boost/id6742382918"
              appId="daily"
            />
            <AppCard
              title="MulaMula"
              image="/MulaMulaFeatured.png"
              description="The ultimate expense tracker app for college students, making it easy to monitor daily and monthly spending with a beautiful, intuitive interface."
              githubLink="https://github.com/longnguyen39"
              appStoreLink="https://apps.apple.com/us/app/mulamula/id6479544775"
              appId="mulamula"
            />
          </div>
          </section>
        </AnimatedOnce>
      </main>
      <footer className={styles.footer}>
        <span className={styles.footerText}>&copy; {new Date().getFullYear()} Long Nguyen</span>
        <FooterSocials />
      </footer>
    </div>
  );
}
