import './FormLogin.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../services/axios'

const FormularioLogon = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState()
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();

        const bodyParam = { email: email, password: password }
        
        axios.post("/api/usuarios/login", bodyParam).then(response => {
            localStorage.setItem("token", response.data[0].token);
            localStorage.setItem("email", response.data[0].email);
            localStorage.setItem("id", response.data[0]._id);
            navigate('/')        
        }).catch(err => {
            console.error(err.response.data) // Objeto de erro vindo do axios
            setErro(err.response.data[1].msg)
        })

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
                <p>{erro}</p>
            </div>
        </form>
    )
}

export default FormularioLogon