import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import CreateUser from './pages/CreateUser';
import PageForgotPassword from './pages/PageForgotPassword';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route  path="/createUser" component={CreateUser} />
            <Route path="/forgot-passwod" component={PageForgotPassword} />
        </BrowserRouter>
    );
}

export default Routes;