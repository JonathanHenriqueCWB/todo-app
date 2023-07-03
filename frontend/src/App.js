import {BrowserRouter} from 'react-router-dom'
import Routes from './configRoutes'
import './app.css'

function App() {
    return (
        <div className='Container'>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    )
}

export default App