import React from 'react';
import styled from 'styled-components';



const TimesColumn = styled.div`

`;
const TableCell = styled.div`
    padding: 10px;
    text-align: center;
    border-bottom: solid 0.5px lightgrey;
`;
const RedCell = styled(TableCell)`
    color: red;
    font-weight: bold;
    border-bottom: solid 1px lightgrey;
`;

class Timeslots extends React.Component {
    render() {
        return (
            <TimesColumn>
                <RedCell>Zvolte cas</RedCell>
                <TableCell>9:00 - 10:00</TableCell>
                <TableCell>10:00 - 11:00</TableCell>
                <TableCell>11:00 - 12:00</TableCell>
                <TableCell>13:00 - 14:00</TableCell>
                <TableCell>15:00 - 16:00</TableCell>
                <TableCell>17:00 - 18:00</TableCell>
                {/* <div>this is the time div
                    {
                        this.props.calendar.map(
                            day => {
                                let timeslots = day.timeslots;
                                timeslots.map(timeslot =>
                                    
                                        <div>{timeslot.from}</div>
                                    
                                )
                            }
                        )
                    }
                </div> */}
            </TimesColumn>
        )
    }
}

export default Timeslots;