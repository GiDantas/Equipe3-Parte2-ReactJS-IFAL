import React from 'react';
import { Redirect } from 'react-router-dom';
import authService from '../../services/auth.service';
import imagem from './instituto.webp';
import imagem2 from './area1.png';
import imagem3 from './area2.jpg';
//import imagem4 from './ifa.png';


class ChatsPage extends React.Component {

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
            //this.setState({redirectTo : "/login"})
        }

        if(this.props.match.params.nome){
            console.log("this.props.match.params.nome", this.props.match.params.nome)
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
              <h1>Sobre o Instituto</h1>
              <img src={imagem} className="App-img" alt="logo" />
              <h5>
                  O Instituto Federal de Alagoas é um complexo de educação, gratuita e de qualidade, que engloba pesquisa, 
                  extensão e ensino desde a formação básica à pós-graduação, proporcionando, deste modo, uma formação integral ao cidadão, 
                  por intermédio dos cursos de formação inicial, técnicos, superiores de tecnologia, bacharelados, de licenciaturas e pós-graduações 
                  lato sensu e stricto sensu.
              </h5>
              <img src={imagem2} className="App-img" alt="logo" />
              <img src={imagem3} className="App-img" alt="logo2" />
          </div>
        )

    }

}

export default ChatsPage;
