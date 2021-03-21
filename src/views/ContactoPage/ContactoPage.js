import React from "react";

import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import InboxIcon from '@material-ui/icons/Inbox';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import logo from "assets/img/logov1.png";

import image from "assets/img/portadaContacto.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        leftLinks=
        {
          <List>
            <ListItem className={classes.listItemLeft}>  
              <Link to="/"><img className={classes.img} src={logo}/></Link>
            </ListItem> 
          </List>
        }
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h4>Visítanos por nuestras Redes</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="https://www.linkedin.com/in/lantterra-ltda-41521582/"
                        target="_blank"
                        color="transparent"
                      >
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="https://www.instagram.com/lantterra_ltda/?igshid=1iz5uilwmx5nx"
                        target="_blank"
                        color="transparent"
                      >
                        <i className={"fab fa-instagram"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>O por nuestros métodos clásicos</p>
                  <CardBody>
                  <List >
                        <ListItem>
                        <ListItemIcon>
                            <RoomIcon />
                        </ListItemIcon>
                        <ListItemText primary="Av. El Parque 2 N° 3247, Alto Hospicio" />
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="+569 66995755" />
                        </ListItem> 
                        <ListItem>
                        <ListItemIcon>
                            <AlternateEmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="virgo.maquinaria@gmail.com" />
                        </ListItem>                    
                    </List>
                  </CardBody>
                  
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
