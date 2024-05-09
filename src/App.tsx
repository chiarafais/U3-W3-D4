
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ArticlesList from "./components/ArticlesList"
import ArticleDetail from "./components/ArticleDetail"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
    <Route path="/" element={<ArticlesList />}/>
    <Route path="/ArticleDetail/:id" element={<ArticleDetail />}/>
  

     </Routes>
     
     </BrowserRouter>


    </div>
  )
}

export default App
