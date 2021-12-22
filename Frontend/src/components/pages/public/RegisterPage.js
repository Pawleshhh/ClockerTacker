import logo from '../../../images/mainicon.svg';
import './RegisterPage.css';

const RegisterPage = () =>{


    return(
        <div className="register-page-wrapper">
        <main className="form-signup">
            <form>
            <img className="mb-4" src={logo} alt="" width="80" height="80"/>
            <h1 className="h3 mb-4 fw-normal">Rejestracja</h1>

            <div className="form-floating mb-4">
                <input type="email" className="form-control" id="floatingInput" placeholder="Adres email"/>
                <label htmlFor="floatingInput">Adres email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Hasło"/>
                <label htmlFor="floatingPassword">Hasło</label>
            </div>
            <div className="form-floating mb-4">
                <input type="password" className="form-control" id="floatingPasswordRepeat" placeholder="Powtórz hasło"/>
                <label htmlFor="floatingPasswordRepeat">Powtórz hasło</label>
            </div>

            <button className="w-100 btn btn-lg" type="submit">Zarejestruj</button>
            </form>
        </main>
    </div>
    )


}

export default RegisterPage;