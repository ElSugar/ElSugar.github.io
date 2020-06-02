import React, {Component} from 'react';
import fire from '../config/Fire';
import ToolbarHome from './Toolbar/ToolbarHome';
import CurrencyConverter from '../components/Converter/cConverter';

class Home extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div className="App">
                <ToolbarHome />
                <main style={{marginTop: '64px'}}>
                    <CurrencyConverter/>
                </main>
            </div>
        )
    }
}

export default Home;