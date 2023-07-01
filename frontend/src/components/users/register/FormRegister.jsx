import {useState} from 'react'
import axios from '../../../services/axios'

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
        <div>
            <h2>REGISTRO DE USUÁRIO</h2>
            <form onSubmit={handleSubmit}>
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
                    {response.map(error => <span>{error.msg} </span>)}
                    {response.map(user => <span>{user.email}</span>)}
                </div>
            </form>
        </div>
    )
}

export default FormRegister