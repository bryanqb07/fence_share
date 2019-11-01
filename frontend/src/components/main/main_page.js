import React from 'react';
import ProductsIndexContainer from '../products/staff/product_index_container';
import Sidebar from '../sidebar/sidebar'

class MainPage extends React.Component {

    render() {
        return (
        <div>
            {/* <Sidebar /> */}
            <div className="wrapper">
                <div className="content">
                    <ProductsIndexContainer />
                    <footer>
                        Copyright &copy; 2019 T. Scott Fence Co.
                    </footer>                
                </div>  
            </div>
        </div>
        );
    }
}

export default MainPage;