
import AnotherCard from "./components/anotherCard/AnotherCard"
import Card from "./components/card/Card"

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