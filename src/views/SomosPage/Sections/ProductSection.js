import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h1 className={classes.title}>¿Quiénes somos?</h1>
          <h4 className={classes.description} style={{marginTop:"20px"}}>
          LANTTERRA es una empresa que surge para satisfacer las necesidades 
          de sus clientes prestando nuestros servicios en el rubro 
          de movimiento de tierra, remoción, traslado de material 
          mejoramiento de caminos, y arriendo de maquinarias.
          </h4>
          <h4 className={classes.description} >
          Realizando distintos tipos de trabajos sobre tierra, 
          tales como, movimientos entre plataformas, terrazas, 
          canchas, construcción y mantención de caminos.
          </h4>
          <h4 className={classes.description} style={{marginBottom:"20px"}}  >
          Contamos con operadores calificados, eficaces y con vasta experiencia,
           maximizando los tiempo de ejecución.
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Movimiento de tierra"
              icon={VerifiedUser}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Arriendo de maquinaria pesada"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Construcción"
              icon={VerifiedUser}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
