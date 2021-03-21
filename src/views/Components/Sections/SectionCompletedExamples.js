import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} style={{ backgroundColor: "#999999", height: "30px", marginBottom:"60px" }}>

          </GridItem>
          
          <GridItem xs={12} sm={12} md={8}>
            <h1 className={classes.title}>Nuestra Misión</h1>
            <h4>
            Es entregar un servicio integral de excelencia en 
            movimiento de tierra y arriendo de equipos.  Buscando 
            la eficiencia y abaratando los costos de material en lo 
            que es movimiento de tierra para nuestros clientes. Enfatizando 
            la productividad, la seguridad y el cuidado del medio ambiente
            </h4>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={12} style={{ backgroundColor: "#FAC813", height: "30px", marginTop:"60px" }}>

          </GridItem>                 
        </GridContainer>
      </div>
    </div>
  );
}
