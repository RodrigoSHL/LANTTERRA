/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/"  className={classes.block} >
                LANTTERRA
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/quienes-somos"  className={classes.block} >
                ACERCA DE NOSOTROS
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/contacto"  className={classes.block} >
                CONTÁCTANOS
              </Link>
            </ListItem>
            
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , desarrollado por{" "}
          
          <a
            href="https://atomdev.cl/"
            className={aClasses}
            target="_blank"
          >
            AtomDev,
          </a>{" "}
          una mejor web.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
