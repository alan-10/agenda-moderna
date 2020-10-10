import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import { FaCalendarCheck } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing" >
            <div id="page-landing-content" className="container">
                <div className="title-login">
                    <h1 className="textLogin">Agenda Moderna!</h1> 
                  <FaCalendarCheck  color='#f8f8fc' size="5rem" />
                </div>
                <div className="logo-container">

                    <img
                        src={logoImg}
                        alt="Logo"
                        className="hero-image"
                    />
                </div>

                <form action=""id="form-login">
                    <div className="input-block">
                        <label htmlFor="user"> <FiUser /> Usuário </label>
                        <input type="text" name="" id="user"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="password"><FiLock /> Senha  </label>
                        <input type="password" name="" id="password"/>
                    </div>
                   
                    <Link to="/forgot-passwod">Esqueci minha senha</Link>
                   <div className="submit-login">
                       <button 
                       
                       type="submit">Entrar</button>
                   </div>
                   
                   Não tem uma conta?<Link to="/createUser"> Registri-se</Link>
                   
                </form>
                
            </div>
        </div>
    )
}

export default Landing;