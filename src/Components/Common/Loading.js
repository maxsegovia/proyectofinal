import React, { Component } from 'react';

class Loading extends Component {
    render () {
        return (
            <div id="site-loader" className="load-complete">
                <div className="loader">
                    <div className="loader-inner ball-clip-rotate">
                        <div> </div>
                   </div>
                </div>
            </div>
        );
    }
}

export { Loading };
