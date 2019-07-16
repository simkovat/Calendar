import React from 'react';
import Day from './Day';
import Timeslots from './Timeslots';
import styled from 'styled-components';

const CalendarContainer = styled.div`
    display: flex;
    border-radius: 5px;
    width: 600px;
    margin: auto;
    box-shadow: 3px 3px 24px 7px rgba(201,195,201,1);
    `;

const DaysContainer = styled.div`
    width: 450px;
    overflow: hidden;
`;

const Slider = styled.div`
    display: flex;
    transform:  ${props => 'translateX(' + props.scrollIndex * -150 + 'px)'};
`;

const Button = styled.div`
    cursor: pointer;

`;

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollIndex: 0,
            loading: false,
            error: null,
            calendar: null,
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://interview-calendar-backend.herokuapp.com/api/calendar');
            const json = await response.json();
            console.log(response);

            this.setState({ calendar: json.calendar });
        } catch (error) {
            console.log('error: ' + error)
        }
    }

    handleScrollRight = () => {
        const { scrollIndex} = this.state
        if (scrollIndex < 5){
            this.setState({
                scrollIndex: scrollIndex + 1
            })
        }
        console.log('scrolindex' + scrollIndex);
    }

    handleScrollLeft = () => {
        if (this.state.scrollIndex > 0){
            this.setState({
                scrollIndex: this.state.scrollIndex - 1
            })
        }
        console.log('scrolindex' + this.state.scrollIndex);
      
    }

    render() {
        if(this.state.loading) {
            return <div >Loading...</div>
        }


        if (this.state.calendar) {
            return (
                <CalendarContainer>
                    <div>
                        <Timeslots calendar={this.state.calendar} />
                    </div>

                    <DaysContainer >
                        <Button onClick={this.handleScrollLeft}>scroll left</Button>
                        <Button onClick={this.handleScrollRight}>scroll right</Button>
                        <Slider scrollIndex={this.state.scrollIndex}>
                            {
                                this.state.calendar.map(
                                    day => <Day day={day} />
                                )
                            }
                        </Slider>
                        
                    </DaysContainer>
                </CalendarContainer>


            )
        }
        return <div>Loading</div>
    }
}

export default Calendar;