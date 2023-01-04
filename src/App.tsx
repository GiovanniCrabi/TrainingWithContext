import { AuthProvider } from "./context/AuthProvider"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile">

          </Route>

          <Route path="/login">
            
          </Route>
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  )
}

export default App
