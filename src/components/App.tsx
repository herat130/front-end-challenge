import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetailsComponent from './MovieDetailsComponent';
import SearchComponent from './SearchComponent';

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <div className="container">
                <h3 className="title">Search Movies App : for testing layout purpose only</h3>
                <Switch>
                    <Route path="/movieDetails/:movieId" component={MovieDetailsComponent} />
                    <Route path="*" component={SearchComponent} />
                </Switch>
            </div>
        );
    }
}

export default App;
