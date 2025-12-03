function AboutPage() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <div className="about-content">
        <h3>Nick Li</h3>
        <div className="profile-image" style={{ height: '180px' }}>
          <img
            src="/src/assets/portrait.jpg"
            alt="Nick Li"
            className="logo"
            width="150"
            height="150"
            style={{ height: '150px', width: '150px' }}
          />
        </div>
        <div className="about-text"></div>
        <p>
          Hello, My name is Nick Li and I am an aspiring software engineer <br />
          with an interest in creating software, websites, and more. I am constantly
          learning and adapting to become a better developer.
        </p>
        <a href="#" className="resume-link">
          Download My Resume (PDF)
        </a>
      </div>
    </div>
  )
}
export default AboutPage
