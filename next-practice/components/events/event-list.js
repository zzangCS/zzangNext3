import EventItem from "./eventItem";
import classes from "./event-list.module.css";
const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items &&
        items.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            address={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
    </ul>
  );
};

export default EventList;
