import { RouterProvider } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"

import { Routers } from "./routers"

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={Routers} />
    </AuthProvider>
  )
}

export default App
