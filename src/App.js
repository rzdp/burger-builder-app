import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import appStyles from './App.module.css'

class App extends Component {
    render() {
        return (
            <div className={appStyles.App}>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </div>
        )
    }
}

export default App;
