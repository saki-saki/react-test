import React from 'react';
import ReactDOM from 'react-dom';
import SysuserListView from './list'
import SysuserSearchView from './search'

class SysuserView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <SysuserSearchView />
                <SysuserListView />
            </div>
        );
    }

}



ReactDOM.render(
    <SysuserView />,
    document.getElementById('root')
);
