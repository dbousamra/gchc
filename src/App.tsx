import './App.css'

const services = [
  {
    title: 'Cardiac Consultations',
    body: 'Comprehensive assessment of heart health, symptoms and risk factors with a specialist cardiologist.',
  },
  {
    title: 'Echocardiography',
    body: 'Non-invasive ultrasound imaging to evaluate the structure and function of your heart.',
  },
  {
    title: 'Stress & ECG Testing',
    body: 'Exercise stress testing and electrocardiography to detect rhythm and coronary problems.',
  },
  {
    title: 'Heart Rhythm Care',
    body: 'Diagnosis and management of arrhythmias, palpitations and atrial fibrillation.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              ♥
            </span>
            <span className="brand-name">Gold Coast Heart Care</span>
          </a>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">Private Cardiology · Gold Coast, Australia</p>
            <h1>Expert heart care, close to home.</h1>
            <p className="lede">
              Gold Coast Heart Care provides personalised, specialist cardiology
              for patients across the Gold Coast — from prevention and
              diagnosis to ongoing management of heart conditions.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Book an appointment
              </a>
              <a className="btn btn-ghost" href="#services">
                Our services
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>What we offer</h2>
            <div className="cards">
              {services.map((s) => (
                <article className="card" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section-muted">
          <div className="container about">
            <h2>About the clinic</h2>
            <p>
              We are a private cardiology clinic dedicated to delivering
              evidence-based heart care in a calm, welcoming setting. Our team
              takes the time to understand each patient, explain every step, and
              build a treatment plan that fits your life.
            </p>
            <p>
              Referrals are welcome from GPs and specialists across South East
              Queensland.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact">
            <h2>Contact us</h2>
            <p>
              To book an appointment or make a referral, please get in touch.
            </p>
            <ul className="contact-list">
              <li>
                <strong>Phone:</strong> (07) 0000 0000
              </li>
              <li>
                <strong>Email:</strong> reception@goldcoastheartcare.com.au
              </li>
              <li>
                <strong>Location:</strong> Gold Coast, Queensland
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Gold Coast Heart Care. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
