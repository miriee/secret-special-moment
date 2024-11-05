import { ListeMoment } from "./components/ShowList/ListeMoment"
import { SpecialMoment } from "./components/SpecialMoment"


function App() {


  return (
    <>
      <div className="background-image"></div>
      <h1>Journal Intime</h1>
      <div className="body-journal">
        <SpecialMoment />
      </div>
      <div className="list-souvenirs">
        <ListeMoment />
      </div>
    </>
  )
}

export default App
