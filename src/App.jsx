import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// import { LoginPage } from "./pages/Login"
// import { SegundaAula } from "./pages/SegundaAula"
// import { TerceiraAula } from "./pages/TerceiraAula"
// import {QuartaAula} from "./pages/QuartaAula"
// import {QuintaAula} from "./pages/QuintaAula"
import { DecimaTerceiraAula } from "./pages/DecimaTerceiraAula"
import { DecimaQuartaAula } from "./pages/DecimaQuartaAula"
import { DecimaQuintaAula } from "./pages/DecimaQuintaAula"
import {MainLayout} from "./pages/MainLayout"



function App() {

  const appRouter = createBrowserRouter([
    {
      path: " ",
      element: <MainLayout />,
      children: [
        {
            path:"decima-quinta-aula",
            element:<DecimaQuintaAula />
        },

        {
          path:"decima-quarta-aula",
          element:<DecimaQuartaAula />
        },

        {
          path:"decima-terceira-aula",
          element:<DecimaTerceiraAula />
        }
      ]
    }


  ])

  return (
    
    <RouterProvider router={appRouter} />
    // {/* <LoginPage></LoginPage>*/}
    // {/* <SegundaAula></SegundaAula> */}
    // <TerceiraAula/>
    // </>
    // <QuartaAula/>
    // <QuintaAula/>
    // <DecimaTerceiraAula/>
    // <DecimaQuartaAula/>
    // <DecimaQuintaAula/>
  )
}

export default App
