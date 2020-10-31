import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EventList from './EventList';

const EventsWrapper = styled.div`
	/* width on wider screen to be larger */
	align-items: center;
	display: flex;
	flex-flow: column nowrap;
	margin-top: 20px;
	/* padding: 10px 50px; */
	text-align: start;
	width: 50vw;
	height: 500px;
	@media screen and (max-width: 580px) {
		padding: 0 50px;
	}
	.h5 {
		font-size: 3vw;
	}
	.p {
		font-size: 2.6vw;
	}
	@media screen and (max-width: 580px) {
		width: 100%;
		height: 400px;
	}
	.event-info {
		overflow-y: scroll;
		background: #f8f8f8;
		width: 400px;
		box-shadow: inset 0 -2px 10px gray;
		@media screen and (max-width: 520px) {
			width: 264px;
		}
	}
	.event-info::-webkit-scrollbar {
		width: 0 !important;
	}
	.events-nav {
		/* events link not visible with tilted phone */
		color: black;
		padding: 12px 0px;
		display: flex;
		font-family: 'Tangerine';
		text-shadow: 1.5px 2px rgba(148, 0, 1, 0.1);
		flex-flow: column nowrap;
		font-size: 50px;
		font-weight: 600;
		align-items: center;
		line-height: 32px;
		text-decoration: none;
		@media screen and (max-width: 580px) {
			font-size: 50px;
			margin-bottom: 24px;
		}
		&::after {
			content: '';
			background: ${(props) => props.theme.hover};
			display: block;
			height: 2px;
			transition: width 0.4s;
			width: 0;
		}
		&:hover::after {
			transform: width;
			width: 96%;
		}
	}
`;

const Month = styled.div`
	/* Month not visible when scrolling on mobile */
	padding: 10px 10px;
	background: white;
	display: right;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	box-shadow: 0 2px 9px gray;
`;

const Events = ({ events }) => {
	const { october, november, december } = events.month;

	return (
		<EventsWrapper>
			<Link to='/events' className='events-nav'>
				Events
			</Link>

			<div className='event-info'>
				<Month>
					<h3>October</h3>
				</Month>
				<EventList event={october} />

				<Month>
					<h3>November</h3>
				</Month>
				<EventList event={november} />

				<Month>
					<h3>December</h3>
				</Month>
				<EventList event={december} />

				<br />
				<br />
			</div>
		</EventsWrapper>
	);
};

export default Events;
