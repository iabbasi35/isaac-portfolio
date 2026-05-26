
export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          isaac abbasi
        </a>
        <div className="navbar-links">
          <a href="#case-studies" className="navbar-nav">Case Studies</a>
          <a href="#selected-work" className="navbar-nav">Selected Work</a>
          <a href="#contact" className="navbar-nav navbar-nav--cta">Work With Me</a>
        </div>
      </nav>
    </div>
  )
}
