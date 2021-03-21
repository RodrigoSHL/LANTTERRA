import { container, title } from "assets/jss/material-kit-react";

const completedStyle = {
  section: {
    padding: "70px 0"
  },
  title:{
    ...title
  },
  container: {
    ...container,
    textAlign: "center !important"
  },
  back: {
    backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
};

export default completedStyle;
