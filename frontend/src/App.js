import {BrowserRouter} from 'react-router-dom'
import Routes from './configRoutes'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </>
    )
}

export default App