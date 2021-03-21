import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import EcoIcon from '@material-ui/icons/Eco';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
      <div className={classes.container}>
        <div id="navigation-pills">
        <h1 className={classes.title}>Política Ambiental</h1>

         
          <GridContainer style={{marginTop:"30px"}}>
        
            <GridItem xs={12} sm={12} md={12}>
              <NavPills
                color="success"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Compromiso Ambiental",
                    tabIcon: EcoIcon,
                    tabContent: (
                      <span className={classes.parrafo}>
                        <h4>
                        LANTTERRA adquiere el compromiso ambiental y su mejora 
                        continua en los procesos de mantención de sus equipos y acciones, 
                        con el fin de minimizar los impactos que pueden generar al 
                        medio ambiente.
                        </h4>
                        <br />
                        <h4>
                        Capacitando al personal en las buenas prácticas de las 
                        mantenciones realizadas dentro de la infraestructura que 
                        puede significar algún daño al medio ambiente.
                        </h4>
                        <br />
                        <h4>
                        Como también el manejo adecuado y efectivo de los desechos 
                        generados, incorporando responsabilidad ambiental en la toma 
                        de decisiones, asegurando el uso eficiente de los recursos 
                        naturales, en tema de sostenibilidad.
                        </h4>
                      </span>
                    )
                  },
                  {
                    tabButton: "Nuestro Servicio",
                    tabIcon: ThumbUpIcon,
                    tabContent: (
                      <span className={classes.parrafo} >
                        <h4>
                        LANTTERRA  es un servicio privado, prestando asesorías en maquinarias 
                        pesadas, renta y movimiento de tierra.  su oficina se encuentra 
                        ubicada en Av. El parque 2 #3247 Alto Hospicio, Tarapacá.
                        </h4>                       
                      </span>
                    )
                  }           
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    
  );
}
