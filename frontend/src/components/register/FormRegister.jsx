import {useState} from 'react'
import axios from '../../services/axios'
import './FormRegister.css'

const FormRegister = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        
        const bodyParam = { email: email, password: password }
        axios.post('/api/usuarios/create', bodyParam).then(response => {
            setResponse(response.data)
        }).catch(err => {
            console.error(err.response.data)
            alert(" Ocorreu um erro " + err.response.msg)
        })  
    }

    return (
        <form onSubmit={handleSubmit} className='FormularioRegistro'>
            <div><h2>CADASTRO</h2></div>
            <div>
                <label htmlFor="mail">Email</label><br />
                <input id='mail' name='mail' type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Senha</label><br />
                <input id='password' name='password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <br /><input type="submit" value="REGISTRAR" /><br /><br />
                {response.map(error => <p style={{color: "white"}}>{error.msg} </p>)}
                {response.map(user => <span>{user.email}</span>)}
            </div>
        </form>
    )
}

export default FormRegister