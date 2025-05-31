import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TechnologyIcons from './TabSub.js/TechnologyIcons';
import Certificates from './TabSub.js/Certificates';
import Projects from './TabSub.js/Projects';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="bg-white dark:bg-gray-700 text-black dark:text-white mt-10 px-4 sm:px-8 md:mx-20">
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      className="bg-white dark:bg-gray-700 text-black dark:text-white"
    >
      <Tab className="dark:text-white" label="Techno Stack" {...a11yProps(0)} />
      <Tab className="dark:text-white" label="Certificates" {...a11yProps(1)} />
      <Tab className="dark:text-white" label="Projects" {...a11yProps(2)} />
    </Tabs>
  </Box>

  <CustomTabPanel value={value} index={0}>
    <TechnologyIcons />
  </CustomTabPanel>
  <CustomTabPanel value={value} index={1}>
    <Certificates />
  </CustomTabPanel>
  <CustomTabPanel value={value} index={2}>
    <Projects />
  </CustomTabPanel>
</Box>

  );
}
