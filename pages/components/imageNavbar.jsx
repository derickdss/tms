import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import EventScheduleList from "./eventScheduleList";

const DemoTabs = (props) => {
  const { labelId, onChange, selectionFollowsFocus, value, tabValues } = props;

  return (
    <AppBar position="static" style={{ background: "white" }}>
      <Tabs
        aria-labelledby={labelId}
        onChange={onChange}
        selectionFollowsFocus={selectionFollowsFocus}
        value={value}
      >
        {tabValues.map((tab, index) => (
          <Tab
            key={index + tab + index}
            label={tab}
            style={{ letterSpacing: "0.15em", fontSize: "14px" }}
            aria-controls="a11y-tabpanel-0"
            id={`a11y-tab-${index}`}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

DemoTabs.propTypes = {
  labelId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectionFollowsFocus: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`a11y-tabpanel-${index}`}
      aria-labelledby={`a11y-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const ImageNavbar = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabValues = ["Events", "Gallery", "About", "News", "Faqs"];
  return (
    <div>
      <img
        style={{ width: "100%", height: "500px" }}
        src="http://tabsda.org/wp-content/uploads/2018/03/68927732-concert-wallpapers.jpg"
      />
      <div style={{ position: "relative", top: "-10px" }}>
        <DemoTabs
          labelId="demo-a11y-tabs-automatic-label"
          selectionFollowsFocus
          onChange={handleChange}
          value={value}
          component={"div"}
          tabValues={tabValues}
        />
        {tabValues.map((tab, index) => (
          <TabPanel
            value={value}
            key={index + tab + index}
            index={index}
            component={"div"}
          >
            <p
              style={{
                fontWeight: "Bold",
                letterSpacing: "0.3em",
                fontSize: "20px",
                textTransform: "uppercase",
              }}
            >
              {tab}
            </p>
            {index === 0 ? <EventScheduleList /> : <p>{tab} details here</p>}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default ImageNavbar;
