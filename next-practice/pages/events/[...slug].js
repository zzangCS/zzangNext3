import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";

const FilteredEventsPage = () => {
  const router = useRouter();
  const FilterData = router.query.slug;

  if (!FilterData) {
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
    numMonth > 12
  ) {
    return <p>invaild filter</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

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
export default FilteredEventsPage;
