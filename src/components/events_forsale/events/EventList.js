import React from 'react';
import styled from 'styled-components';

const EventText = styled.div`
	padding-top: 10px;
	padding-left: 12px;
`;

const EventList = ({ event }) => {
	return (
		<div>
			{event &&
				event.map((event) => (
					<EventText>
						<h5>{event.title}</h5>
						<p>
							{event.day}, {event.month} {event.date}&nbsp;&nbsp;||&nbsp;&nbsp;
							{event.start}-{event.end}
						</p>
					</EventText>
				))}
		</div>
	);
};

export default EventList;
