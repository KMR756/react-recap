import AnotherCard from "./components/AnotherCard"
import Card from "./components/Card"
import Footer from "./components/Footer"


const App = () => {
  return (
    <>
      <header className="header-section">
        <AnotherCard />
      </header>
      <section className="job_section">
        <div className="card">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <footer className="footer-section">
        <Footer />
      </footer>
    </>
  )
}

export default App