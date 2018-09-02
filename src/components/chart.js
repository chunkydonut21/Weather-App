import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.average = this.average.bind(this);
  }

  average = (data) => {
    return _.round(_.sum(data)/data.length);
  }
  render(){
    return (
      <div>
        <Sparklines height={120} width={180} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.average(this.props.data)} {this.props.units}</div>
      </div>
    );
  }
}
