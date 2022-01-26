import './LoginPage.css';
import logo from '../../../images/mainicon.svg';
import {useState} from "react";
import axios from 'axios';

// todo: change this asap xd
const URL_PATH = "http://localhost:80/login.php";

const LoginPage = () => {

    const [formData, setFormData] = useState({});
    let success = true;
    let failMessage = "";

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

        await axios({
            method: "POST",
            url: URL_PATH,
            headers: {
                "Content-Type": "application/json"
            },
            data: formData
        })
            .then(result => {
                if (result.data.status) {
                    localStorage.setItem("userId", result.data.id);
                    window.location.href = '/user';
                }
                else {
                    success = false;
                    failMessage = result.data.message;
                    console.log(success, failMessage)
                }
            })
            .catch(error => console.warn("error: ", error.message));

    }

    const handleChange = (event, input) => {
        let value = event.target.value;
        setFormData({
            ...formData,
            [input]: value
        });
    }

    return (
        <div className="login-page-wrapper">
            <main className="form-signin">
                <form>
                    <img className="mb-4" src={logo} alt="" width="80" height="80"/>
                    <h1 className="h3 mb-4 fw-normal">Logowanie</h1>

                    <div className="form-floating mb-4">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            name="email"
                            placeholder="Adres email"
                            onChange={event => handleChange(event, "email")}
                        />
                        <label htmlFor="floatingInput">Adres email</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="pass"
                            placeholder="Hasło"
                            onChange={event => handleChange(event, "pass")}
                        />
                        <label htmlFor="floatingPassword">Hasło</label>
                    </div>

                    <button className="w-100 btn btn-lg"
                            onClick={event => handleFormSubmit(event)}>Zaloguj
                    </button>

                    {success ? "" : <p>{failMessage}</p>}
                </form>
            </main>
        </div>
    )


}

export default LoginPage;