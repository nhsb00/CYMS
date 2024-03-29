import React from 'react';
import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer';
import ProductIndexContainer from '../product/product_index_container'
import '../../stylesheets/splash-page.css'
import '../../stylesheets/app.css';
import '../../stylesheets/footer.css'

class Splash extends React.Component {
    render () {
        return (
            <div className="splash">
                <MainPageContainer /> 
                <ProductIndexContainer />
                
                <footer id='footer'>
                    <Footer />
                </footer>
            </div>          
        )
    }
}

export default Splash;