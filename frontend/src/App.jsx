export default function App() {
  return (
    <main className="page">
      <nav className="nav">
        <a className="brand" href="/" aria-label="ClimbX home">
          <span className="brand-mark">C</span><span>CLIMBX</span>
        </a>
        <a className="nav-link" href="#explore">Explore</a>
      </nav>
      <section className="hero" id="explore">
        <p className="eyebrow">FIND YOUR NEXT CLIMB</p>
        <h1>Go higher.<br /><span>Go ClimbX.</span></h1>
        <p className="intro">Your climbing community starts here. We’re building a better way to discover places to climb and connect with climbers.</p>
        <a className="button" href="mailto:hello@goclimbx.com">Get in touch <span aria-hidden="true">↗</span></a>
      </section>
      <footer>© {new Date().getFullYear()} ClimbX</footer>
    </main>
  );
}
