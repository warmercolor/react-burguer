import { Global } from './style/global'
import { All } from './All'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

function App() {

  return (
    <>
    <Global/>
    <All/>
    <ToastContainer/>
    </>
  )
}

export default App
