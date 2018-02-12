import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  ExampleRoot,
  ExampleTitle,
  CountryList,
  CountryItem,
  BackButton,
} from './Example.styled';

import { fetchCountries } from './actions';

const mapStateToProps = ({ countries: { data } }) => ({ countries: data });
const mapDispatchToProps = { fetchCountries };

export class Example extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    const { countries = [] } = this.props;

    return (
      <ExampleRoot>
        <ExampleTitle>
          Data fetching example
        </ExampleTitle>
        <CountryList>
          {countries.map(({ name }) => (
            <CountryItem key={name}>
              {name}
            </CountryItem>
          ))}
        </CountryList>
        <BackButton to='/'>
          Back
        </BackButton>
      </ExampleRoot>
    );
  }
}

Example.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  fetchCountries: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Example);
