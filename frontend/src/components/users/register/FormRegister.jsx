import {useState} from 'react'

const FormRegister = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        window.alert('Usuário cadastrado com sucesso')     
    }

    return (
        <div>
            <h2>REGISTRO DE USUÁRIO</h2>
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
                    <br /><input type="submit" value="REGISTRAR" /><br />
                </div>
            </form>
        </div>
    )
}

export default FormRegister