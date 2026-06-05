import Card from "./components/Card"

const App = () => {
  return (
    <div className="parent">

      <Card user="Rejoan Khan" age={26} para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptatum." img="https://images.unsplash.com/photo-1778244305115-4dd2bf7c8e86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Tanjim Khan" age={29} para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nemo!" img="https://images.unsplash.com/photo-1776947242128-cade9ec29ab0?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

    </div>
  )
}

export default App