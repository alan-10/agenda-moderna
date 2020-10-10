import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import { BsArrowLeft } from 'react-icons/bs';

import { FiLock } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi'

import './styles.css';

function CreateUser() {
    return (
        <div id="page-create-user">
            
            <div id="page-create-user-content" className="container" >
            
            < PageHeader />
            {/* <strong>Aqui você pode agendar diversas tarefas e manter-se organizado de forma prática e simples</strong> */}
            <div className="user-create-content">
            
                <h2 className="text-create-user">
                        Cadastre-se e honre seus compromissos de forma divertida!
                </h2>

                <div className="form-create-user">
                    <form action="" id="form-create-user-content">
                        <div className="input-block">
                            <label htmlFor="email"><FiMail/> E-mail</label>
                            <input type="email" name="" id="email"  />
                        </div>

                        <div className="input-block">
                            <label htmlFor="name"><FiUser /> Nome</label>
                            <input type="text" name="" id="name" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="password"><FiLock/> Senha</label>
                            <input type="password" name=""
                                id="password"  />
                        </div>

                       

                        <div className="submit-button">
                            <button type="submit">Cadastrar</button>
                        </div>

                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;