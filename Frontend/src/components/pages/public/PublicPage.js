import { Routes, Route, NavLink } from 'react-router-dom';
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import StatisticsPage from "./StatisticsPage";

import './PublicPage.css';
import logo from '../../../images/mainicon.svg';

const PublicPage = () =>{


    return(
        <div className="public-page-wrapper">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Strona główna</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signin">Logowanie</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Rejestracja</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/statistics">Statystyki</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/signin" element={<LoginPage/>} />
                <Route path="/signup" element={<RegisterPage/>} />
                <Route path="/statistics" element={<StatisticsPage/>} />
            </Routes>
        </div>
    )


}

export default PublicPage;