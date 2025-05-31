import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import C1 from '../../Assests/Certificates/starInfotech.jpg';
import C2 from '../../Assests/Certificates/EduCourse.png';
import C3 from '../../Assests/Certificates/CyberSecurity.png';
import C4 from '../../Assests/Certificates/IBM1.png';
import C5 from '../../Assests/Certificates/IBM2.png';
import C6 from '../../Assests/Certificates/IBM3.png';
import C7 from '../../Assests/Certificates/IBM4.png';
import C8 from '../../Assests/Certificates/IBM5.png';
import { useMediaQuery, useTheme } from '@mui/material';


const itemData = [
  {
    img: C1,
    title: 'Diploma in Software Engineering',
  },
  {
    img: C2,
    title: 'Intership Course',
  },
  {
    img: C3,
    title: 'Cyber Security Course',
  },
  {
    img: C4,
    title: 'IBM C1',
  },
  {
    img: C5,
    title: 'IBM C2',
  },
  {
    img: C6,
    title: 'IBM C3',
  },
  {
    img: C7,
    title: 'IBM C4',
  },
  {
    img: C8,
    title: 'IBM C5',
  }
];

export default function Certificates() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ImageList 
    sx={{
        width: '100%',
        maxWidth: 800,
        height: 'auto',
        mx: 'auto', // centers horizontally
        px: 2, // padding for mobile sides
      }}
      gap={12}
     cols={isSmallScreen ? 1 : 2} rowHeight={294} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


