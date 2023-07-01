import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const FormularioLogon = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        navigate('/tasks')        
    }

    return(
        <div>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="password">Senha</label><br />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <br /><input type="submit" value="LOGIN" /><br />
                    <p>Cadastre-se aqui: <a href='/register'>cadastrar</a></p>
                </div>
            </form>
        </div>
    )
}

export default FormularioLogon