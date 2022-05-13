import React, { useState, useEffect } from 'react'
import Alert from './Alert'
import { db } from './firebaseauth'
import { collection, getDocs } from "firebase/firestore"
import './login.css'

export default function Login() {
    const [alert, setalert] = useState(false)
    const [collegeid, setcollegeid] = useState("")
    const [password, setpassword] = useState("")
    const [users, setUsers] = useState([]);

    const userCollection = collection(db, "Users")
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollection)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUsers();
    }, [])


    const alertmaker = () => {
        setalert(true)
    }
    function handleChange(e) {
        if (e.target.name === "collegeId") {
            setcollegeid(e.target.value)
        }
        else if (e.target.name === "password") {
            setpassword(e.target.value)
        }
        console.log("CollegeID" + collegeid);
        console.log("password" + password);

    }
    // function handleChange() {
    //     const cID = document.getElementById("collegeId")
    //     const password = document.getElementById("password")
    //     console.log(cID);
    //     console.log(password);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        if (e.target.name === "collegeId") {
            setcollegeid(e.target.value)
        }
        else if (e.target.name === "password") {
            setpassword(e.target.value)
        }
        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ collegeid, password })
        }).then(()=>{
            console.log('Login successful');
        })
    }
    
    return (
        <>
            <div className="container center-div">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">CollegeID: </label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="staticEmail" name="collegeId" onChange={(event) => { handleChange(event) }} placeholder="College id" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" onChange={(event) => { handleChange(event) }} placeholder="Password"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3" onClick={alertmaker}>Login!</button>
                        </div>
                    </div>
                </form>
            </div>


            {/* <div class="form-group">
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-auto">
                <label htmlFor="staticEmail2" className="visually-hidden">CollegeId: </label>
                <input type="number" className="form-control-plaintext" id="staticEmail2" name="collegeId" onChange={(event)=>{handleChange(event)}} placeholder="College id" />
            </div><br/>
            <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2" name='password' onChange={(event)=>{handleChange(event)}} placeholder="Password" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" onClick={alertmaker}>Login!</button>
            </div>
        </form>
        </div> */}
            <Alert mode={alert} />
        </>
    )
}
