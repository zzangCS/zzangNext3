import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-utill";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment, useEffect } from "react";
import Button from "../../components/ui/button";
import useSWR from "swr";

const FilteredEventsPage = (props) => {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();
  const FilterData = router.query.slug;

  const { data, error } = useSWR(
    "https://next-js-pra1-default-rtdb.firebaseio.com/events.json"
  );

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return <p className="center">Loding...</p>;
  }

  const filteredYear = FilterData[0];
  const filteredMonth = FilterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
    // props.hasError
  ) {
    return <p>invaild filter</p>;
  }

  function filteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = loadedEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === numYear &&
        eventDate.getMonth() === numMonth - 1
      );
    });

    return filteredEvents;
  }

  // const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <p>no event found</p>
        <div className="center">
          <Button link="/event">Show allevent</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList item={filteredEvents} />
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const FilterData = params.slug;
//   const filteredYear = FilterData[0];
//   const filteredMonth = FilterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       // notFound: true,
//       // redirect: {
//       //  destination : "/error"
//       // }
//       props: { hasError: true },
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// }

export default FilteredEventsPage;
