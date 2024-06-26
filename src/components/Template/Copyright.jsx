import React from "react";
import { Typography, Link } from "@material-ui/core/";

const Copyright = () => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" >
          Nikhil Mishra
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
 
    </div>
  );
};

export default Copyright;
