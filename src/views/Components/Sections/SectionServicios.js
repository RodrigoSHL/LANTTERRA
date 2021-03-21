import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/serviciosStyle.js";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imagen1 from "assets/img/portadaLantterra.jpg"
import imagen2 from "assets/img/construccion.jpg"
import imagen3 from "assets/img/mov_tierra.jpeg"


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(styles);

/*<CardActions>
    <Button size="small" color="primary">
        Share
    </Button>
    <Button size="small" color="primary">
        Learn More
    </Button>
</CardActions>*/

export default function MediaCard() {
  const classes = useStyles();

  return (
 
    <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} >
             <h1 className={classes.title}>Conoce nuestros servicios</h1>
          </GridItem>
      </GridContainer>
      <div>
        <GridContainer>


  



          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.card} style={{margin: "30px"}}>
            <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={imagen1}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Arriendo de maquinaria pesada
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>


                


                    <CardActions>
                        <List >
                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Bulldozers " />
                            </ListItem>

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Excavadoras " />
                            </ListItem>

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Motoniveladoras" />
                            </ListItem>

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cargadores frontales " />
                            </ListItem>

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Rodillo vibro compactador"/>
                            </ListItem> 

                             

                        </List>
                    </CardActions>
                </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.root}>
           
           <Card  className={classes.card} style={{margin: "30px"}}>
               <CardActionArea >
                   <CardMedia
                   component="img"
                   alt="Contemplative Reptile"
                   height="140"
                   image={imagen3}
                   title="Contemplative Reptile"
                   />
                   <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                       Movimiento de tierra
                   </Typography>
                   
                   </CardContent>
               </CardActionArea>
                   <CardActions>
                       <List >
                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Construcción de caminos" />
                            </ListItem>

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mantenciones de caminos" />
                            </ListItem> 

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mejoramiento de caminos" />
                            </ListItem>  

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="Plataformas" />
                           </ListItem>

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="Excavaciones" />
                           </ListItem> 

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="Terrazas" />
                           </ListItem> 

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="Trabajo de cortes a cota" />
                           </ListItem> 

                            
                       </List>
                   </CardActions>
               </Card>
         </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            
            <Card className={classes.card} style={{margin: "30px"}}>
            <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={imagen2}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Construcción
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <List >
                        <ListItem className={classes.card}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Proyectos" />
                        </ListItem>

                        <ListItem className={classes.card}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Canchas de futbol" />
                        </ListItem> 

                        <ListItem className={classes.card}>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Plataformas" />
                        </ListItem>      
                        <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Terrazas" />
                            </ListItem> 
                    </List>
                </CardActions>
                </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
      
    
  );
}