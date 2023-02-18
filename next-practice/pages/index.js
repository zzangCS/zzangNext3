import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utill";

export default function HomePage(props) {
  const { featuredEvents } = props;

  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}
