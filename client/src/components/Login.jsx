import React, {useState} from 'react'
import Alert from './Alert'


export default function Login() {
    const [alert, setalert] = useState(false)
    const alertmaker=()=>{
        setalert(true)
    }
    return (
        <>
        
        <form className="row g-3">
            <div className="col-auto">
                <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                <input type="text" className="form-control-plaintext" id="staticEmail2" placeholder="email@example.com" />
            </div>
            <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" onClick={alertmaker}>Login!</button>
            </div>
        </form>
        <Alert mode={alert}/>
        </>
    )
}
