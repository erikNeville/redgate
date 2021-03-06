import React from 'react';
import { BodyContainer } from '../../components/containers/BodyContainer';
import EventList from './EventList';
import { ScreenContainer } from '../../components/containers/ScreenContainer';
import { connect } from 'react-redux';

const EventsScreen = ({ events }) => {
	const { october, november, december } = events.month;
	return (
		<BodyContainer>
			<ScreenContainer>
				<EventList event={october} />
				<EventList event={november} />
				<EventList event={december} />
			</ScreenContainer>
		</BodyContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		events: state.events.events,
	};
};

export default connect(mapStateToProps)(EventsScreen);
