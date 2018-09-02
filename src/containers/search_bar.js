import React from 'react';
//for actions
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { term: '' }
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecasr in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

  onInputChange(event){
    this.setState({term : event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    // we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
