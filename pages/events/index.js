import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/eventSearch";
import { useRouter } from "next/router";
import { Fragment } from "react";

const AllEvents = () => {
  const events = getAllEvents();
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

export default AllEvents;
