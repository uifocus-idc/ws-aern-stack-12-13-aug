import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import BookListPage from './BookListPage';
import BookDetailsPage from './BookDetailsPage';


const AppContainer = () => {

    return <div>
        <Header/>
        <Switch>
            <Route exact path={'/'} component={BookListPage}/>
            <Route exact path={'/bookdetails/:id'} component={BookDetailsPage}/>
        </Switch>
    </div>;

};


export default AppContainer;
