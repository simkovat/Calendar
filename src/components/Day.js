import React from 'react';
import styled from 'styled-components';
import SlotCell from './SlotCell';

const TableCell = styled.div`
    padding: 10px;
    text-align: center;
    width: 150px;
`;

const RedCell = styled(TableCell)`
    color: red;
    font-weight: bold;
    border-bottom: solid 1px lightgrey;
`;

class Day extends React.Component {

    render() {
        return (
            <div>
                <RedCell>
                    {
                        new Date(this.props.day.date).toLocaleDateString('cz')
                    }
                </RedCell>

                {
                    this.props.day.timeslots.map(slot =>
                        <SlotCell status={slot.status} />)
                }
            </div>
        )
    }
}

export default Day;