import AddressIcon from "../icons/address-icon";
import classes from "./eventItem.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import ArrowIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { title, image, date, address, id } = props;
  const humanReadableDate = new Date(date).toDateString("en-Us", {
    day: "numberic",
    month: "long",
    year: "numberic",
  });

  const formattedAdress = address.replace(", ", "\n");
  const exploreink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.Sumary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
            <DateIcon />
          </div>
          <div className={classes.address}>
            <address>{formattedAdress}</address>
            <AddressIcon />
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreink}>
            <span>EXPLORE EVENT</span>
            <span className={classes.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
export default EventItem;
