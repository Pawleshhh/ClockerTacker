import logo from '../../../images/mainicon.svg';
import './RegisterPage.css';
import {useState} from "react";
import axios from "axios";

// todo: change this asap xd
const URL_PATH = "http://localhost:80/register.php";

const RegisterPage = () =>{

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
                    console.log("user screen here we go");
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

    return(
        <div className="register-page-wrapper">
        <main className="form-signup">
            <form>
            <img className="mb-4" src={logo} alt="" width="80" height="80"/>
            <h1 className="h3 mb-4 fw-normal">Rejestracja</h1>

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
            <div className="form-floating mb-3">
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
            <div className="form-floating mb-4">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPasswordRepeat"
                    name="pass2"
                    placeholder="Powtórz hasło"
                    onChange={event => handleChange(event, "pass2")}
                />
                <label htmlFor="floatingPasswordRepeat">Powtórz hasło</label>
            </div>

            <button className="w-100 btn btn-lg"
                    onClick={event => handleFormSubmit(event)}>>Zarejestruj</button>
            </form>
        </main>
    </div>
    )


}

export default RegisterPage;