import React from "react";
import EventBooking from "./eventBooking";

const ThreeRowColumn = ({ rows = [] }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          marginRight: "20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {rows.length
          ? rows.map((row, index) => (
              <span key={index + row.text + index} style={row.style}>
                {row.text}
              </span>
            ))
          : null}
      </div>
    </div>
  );
};

const ListHeader = ({ numberOfEvents }) => (
  <h2 style={{ fontSize: "16px", borderBottom: "1px solid lightgrey" }}>
    <span style={{ fontWeight: 900, fontSize: "16px" }}>{numberOfEvents}</span>{" "}
    Upcoming Event
  </h2>
);

const EventScheduleList = () => {
  const firstRowStyle = {
    color: "rgb(100, 100, 100)",
    lineHeight: 1.2,
    textTransform: "uppercase",
  };
  const secondRowStyle = {
    fontSize: "23px",
    lineHeight: 1,
  };
  const thirdRowStyle = {
    color: "rgb(100, 100, 100)",
    lineHeight: 1.2,
    textTransform: "uppercase",
  };

  return (
    <div>
      <div
        style={{
          width: "95%",
          backgroundColor: "rgb(241 239 239)",
          padding: "15px",
          boxShadow: "rgb(0 0 0 / 15%) 0px 0px 10px 3px",
          fontFamily: "Averta, helvetica, arial, sans-serif",
        }}
      >
        <ListHeader numberOfEvents={1} />
        <div style={{ display: "flex" }}>
          <ThreeRowColumn
            rows={[
              { text: "feb", style: firstRowStyle },
              { text: 24, style: secondRowStyle },
              { text: 2022, style: thirdRowStyle },
            ]}
          />
          <ThreeRowColumn
            rows={[
              {
                text: "thu - 18:30",
                style: firstRowStyle,
              },
              {
                text: "Motorpoint",
                style: secondRowStyle,
              },
              {
                text: "The Lunies",
                style: thirdRowStyle,
              },
            ]}
          />
          <EventBooking />
        </div>
      </div>
    </div>
  );
};

export default EventScheduleList;
