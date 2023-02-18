import { getAllEvents } from "../../helpers/api-utill";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/eventSearch";
import { useRouter } from "next/router";
import { Fragment } from "react";

const AllEvents = (props) => {
  const { events } = props.events;

  const router = useRouter();

  const FindEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={FindEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const event = await getAllEvents();

  return {
    props: {
      events: event,
    },
    revalidate: 60,
  };
}

export default AllEvents;
