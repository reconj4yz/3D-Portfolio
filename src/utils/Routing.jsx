import { Route, Routes } from 'react-router-dom'
import Error from '../components/Error'

const Routing = () => {
  return (
    <Routes>
        <Route path='/error' component={Error} exact={true} />
    </Routes>
  )
}

export default Routing