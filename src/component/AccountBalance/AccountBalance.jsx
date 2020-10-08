import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    border: 1px solid red;
    font-size: 2rem;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                {this.props.showBalance ? this.props.amount : null}
                <button onClick={this.props.handleShowBalance}>{this.props.showBalance ? 'Hide balance' : 'Show balance'}</button>
            </Section>
        )
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
}
