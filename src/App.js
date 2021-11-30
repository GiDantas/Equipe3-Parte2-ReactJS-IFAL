import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/home-page/home-page';
import ChatsPage from './pages/chats-page/chats-page';
import LoginPage from './pages/login-page/login-page';
import authService from './services/auth.service';

// Criando c component 
class App extends React.Component {

    // Criando construtor
    constructor(props) {

        // Executando o construtor da Super Class
        super(props)

        // Definindo o estado inicial
        this.state = {
            userData: null,
        }

    }

    componentDidMount(){
        this.loadUser()
    }

    async loadUser(){
        let userData = authService.getLoggedUser()
        this.setState({userData : userData})
        console.log(userData)
    }

    logout(){
        authService.cleanLoggedUser()
        window.location.reload()
    }

    // Função que renderiza o componente
    render() {

        const routes = [
            { route : "/", view : HomePage, exact : true},
            { route : "/chats", view : ChatsPage, exact : false},
        ]

        return (
           <BrowserRouter>
                <Header title="IFAL - Sigaa" onTitleClicked={() => console.log("Clicou no título que eu ví!")} ref={this.myHeader}>
                    <span>
                        {this.state.userData?.data?.user?.name}
                    </span>
                    <button className="btn btn-primary" onClick={e => this.logout()}>
                        Sair
                    </button>
                </Header>
                <Switch>
                    {routes.map((item, index) => (
                        <Route key={index} path={item.route} component={item.view} exact={item.exact}/>
                    ))}
                    <Route path="/login" component={props => <LoginPage {...props} onLogin={() => this.loadUser()}/>} />
                </Switch>
           </BrowserRouter>
        )
    }

}

export default App;
