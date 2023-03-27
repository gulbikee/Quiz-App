import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Intruduce from "./pages/introduce/introduce";
import Quiz from "./pages/quiz/Quiz";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Intruduce/>}/>
          <Route path="/quiz/:difficulity/:amount" element={<Quiz/>}/>
        </Routes>

      </Router>
  

      
    </div>
  );
}

export default App;
