import React from 'react';
import authService from '../../services/auth.service';
import { Redirect } from 'react-router-dom';


class HomePage extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            redirectTo : null
        }

    }

    async componentDidMount(){
        let loggedUser = await authService.getLoggedUser()
        if(!loggedUser){
            console.log("Redirecionou", loggedUser)
            this.setState({redirectTo : "/login"})
        }
    }

    render() {
        if(this.state.redirectTo){
            return(
                <Redirect to={this.state.redirectTo}/>
            )
        }
        return (
          <div className="container">
              <h1>Página Inicial</h1>
          </div>
        )
    }

}

export default HomePage;
