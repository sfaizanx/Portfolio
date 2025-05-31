import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ecommerceImage from "../../Assests/img/DOTJEANS.png";
import House from "../../Assests/img/Renthouse.png";
import Books from "../../Assests/img/Ebooks.png";
import Shoes from "../../Assests/img/Shoes.png";

export default function Projects() {
  return (
    <>
      <div className="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols:1 justify-center items-center text-2xl font-bold mb-5 mt-5 gap-5">
        <Card
          sx={{ maxWidth: 420,minWidth: 280 }}
          className="bg-white dark:bg-gray-700 text-black dark:text-white xs:w-100 "
        >
          <CardMedia
            sx={{ height: 240 }}
            image={ecommerceImage}
            title="E-commerce Website"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              E-Commerce Website
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 420 }}
          className="bg-white dark:bg-gray-700 text-black dark:text-white"
        >
          <CardMedia
            sx={{ height: 240 }}
            image={House}
            title="Property Rental Booking Website"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Property Rental Booking Website 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
          
        <Card
          sx={{ maxWidth: 420 }}
          className="bg-white dark:bg-gray-700 text-black dark:text-white"
        >
          <CardMedia
            sx={{ height: 240 }}
            image={Books}
            title="Book Website"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              E-Books Store With Voice Assistant & AI
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 420 }}
          className="bg-white dark:bg-gray-700 text-black dark:text-white"
        >
          <CardMedia
            sx={{ height: 240 }}
            image={Shoes}
            title="Shoes Store"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shoes with Rental Tracking Website
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
