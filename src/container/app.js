import React from 'react';
import { connect } from 'react-redux';
import Map from '../components/map';
import Grid from '../components/grid';
import ToggleButton from '../components/toggleButton';

class App extends React.Component {
  /* eslint no-undef: 0 */
  state = {
    map: true,
  }

  componentDidMount() {
    this.props.fetchData();
  }

  toggle() {
    this.setState({ map: !this.state.map });
  }

  render() {
    return (
      <div>
        { this.state.map ?
          <Map {...this.props} /> :
          <div className="container">
            <Grid {...this.props} />
          </div>
        }
        <ToggleButton toggle={this.toggle.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps({ data: { taxiData, car2goData } }) {
  return {
    taxiData,
    car2goData,
  };
}

function mapDispatchToProps(dispatch) {
  return ({
    fetchData: () => {
      dispatch({ type: 'FETCH_TAXI' });
      dispatch({ type: 'FETCH_CAR2GO' });
    },
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
