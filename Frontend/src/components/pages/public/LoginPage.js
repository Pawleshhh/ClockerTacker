import './LoginPage.css';
import logo from '../../../images/mainicon.svg';

const LoginPage = () =>{


return(
    <div className="login-page-wrapper">
        <main className="form-signin">
            <form>
            <img className="mb-4" src={logo} alt="" width="80" height="80"/>
            <h1 className="h3 mb-4 fw-normal">Logowanie</h1>

            <div className="form-floating mb-4">
                <input type="email" className="form-control" id="floatingInput" placeholder="Adres email"/>
                <label htmlFor="floatingInput">Adres email</label>
            </div>
            <div className="form-floating mb-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Hasło"/>
                <label htmlFor="floatingPassword">Hasło</label>
            </div>

            <button className="w-100 btn btn-lg" type="submit">Zaloguj</button>
            </form>
        </main>
    </div>
)


}

export default LoginPage;