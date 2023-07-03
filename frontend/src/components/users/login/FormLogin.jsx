import './FormLogin.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const FormularioLogon = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        navigate('/')        
    }

    return(
        <form onSubmit={handleSubmit} className='FormularioLogin'>            
            <div><h2>LOGIN</h2></div>
            <div>
                <label htmlFor="mail">Email </label><br />
                <input id='mail' name='mail' type="text" value={email} onChange={e => setEmail(e.target.value)}  />
            </div>
            <div>
                <label htmlFor="senha">Senha </label><br />
                <input id='senha' name='senha' type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <br /><input type="submit" value="LOGIN" /><br /><br />
                <p>Cadastre-se aqui: <a href='/register'>cadastrar</a></p>
            </div>
        </form>
    )
}

export default FormularioLogon