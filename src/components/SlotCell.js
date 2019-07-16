import React from 'react';
import styled from 'styled-components';

const TableCell = styled.div`
    padding: 10px;
    text-align: center;
    border-bottom: solid 0.5px lightgrey;
`;

const Slot = styled(TableCell)`
    background-color: ${props => (props.clicked) ? "red" : "white"};
    :hover {
        background-color: ${props => (props.status === 'free' && !props.clicked) ? "#F3A2AD" : "none"};
        cursor: pointer;
    }
`;

class SlotCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    handleClick = (status) => (e) => {
        if (status === 'free') { 
            this.setState({
                clicked: !(this.state.clicked),
            })
        } else {
            console.log('i am not free dont click me')
        }
    }

    render() {
        return (
            <Slot status={this.props.status} 
            clicked={this.state.clicked} 
            onClick={this.handleClick(this.props.status)}>
                {this.state.clicked ? "selected": this.props.status}
            </Slot>
        )
    }
}

export default SlotCell;