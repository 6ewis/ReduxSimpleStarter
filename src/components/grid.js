import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

const coordinate = ({ value }) => <span style={{ color: '#0000aa' }}>{JSON.stringify(value)}</span>;

const CustomHeading = ({ title }) => <span style={{ color: '#AA0000' }}>{title}</span>;
const newLayout = ({ Table, Pagination, Filter }) => (
  <div className="grid">
    <Filter />
    <Table />
    <Pagination />
  </div>);

class Grid extends Component {
/* eslint no-undef: 0 */
state = {
  switch: true,
}

toggle = (e) => {
  e.preventDefault();
  this.setState({ switch: !this.state.switch });
}

renderTaxi() {
  return (
    <Griddle
      key="one"
      data={this.props.taxiData}
      plugins={[plugins.LocalPlugin]}
      components={{ Layout: newLayout }}
    >
      <RowDefinition>
        <ColumnDefinition id="id" />
        <ColumnDefinition id="state" />
        <ColumnDefinition id="type" />
        <ColumnDefinition id="coordinate" title="longitude" customComponent={coordinate} customHeading={CustomHeading} />
      </RowDefinition>
    </Griddle>
  );
}

renderCar2go() {
  return (
    <Griddle
      key="two"
      data={this.props.car2goData}
      plugins={[plugins.LocalPlugin]}
      components={{ Layout: newLayout }}
    >
      <RowDefinition>
        <ColumnDefinition id="id" />
        <ColumnDefinition id="interior" />
        <ColumnDefinition id="fuel" />
        <ColumnDefinition id="name" />
        <ColumnDefinition id="vin" />
        <ColumnDefinition id="exterior" />
        <ColumnDefinition id="engineType" />
        <ColumnDefinition id="address" />
        <ColumnDefinition id="coordinates" customComponent={coordinate} customHeading={CustomHeading} />
      </RowDefinition>
    </Griddle>
  );
}

render() {
  return (
    <div>
      <div className="flex-parent flex-parent--end-main" style={{ cursor: 'pointer' }}>
        <span className="triangle triangle--r mr-neg12 z1 color-blue-faint" />
        <div onClick={this.toggle} className="bg-blue round-r col col--6 px12 py12 pl24">
          <strong className="txt-s color-blue-faint">Click to switch to: {this.state.switch ? 'Car 2 Go' : 'my Taxi'}</strong>
        </div>
      </div>
      { this.state.switch ? this.renderTaxi() : this.renderCar2go() }
    </div>
  );
}
}

export default Grid;
