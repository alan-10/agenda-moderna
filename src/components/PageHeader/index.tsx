import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './styles.css';

function PageHeader() {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <BsArrowLeft size="6rem" color="#f8f8fc" />
                </Link>
                <h1 className="title-header">Agenda Moderna</h1>
            </div>


        </header>
    )
}

export default PageHeader;