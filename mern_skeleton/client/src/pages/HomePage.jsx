function HomePage({ setCurrentPage }) {
  return (
    <div className="page">
      <h1>Welcome to My Portfolio</h1>
      <div className="card">
        <p>This is my React portfolio site built with Vite</p>
        <button onClick={() => setCurrentPage('about')}>
          Learn More About Me
        </button>
      </div>
    </div>
  )
}
export default HomePage
