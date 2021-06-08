import React from 'react';
import CardUtils from './CardUtils';
import {ProjectData} from './ProjectData';
import { Grid } from "@material-ui/core";
import './Projects.css'
import Button from '@material-ui/core/Button';

class Projects extends React.Component{
    render(){
        return(
            <div>
                <h2 className="project-header" style={{textAlign: "center", fontSize: "40px"}}> Projects</h2>
                <Grid container spacing={4} style={{paddingLeft: "40px", paddingRight: "40px"}}>
                    {ProjectData.map((item, index) => {
                        return(
                            <Grid item xs={12} sm={4}>
                                <CardUtils {... item}/>
                            </Grid>
                        )
                    })}
                </Grid>
                <div className="button-class" style={{textAlign: "center", paddingTop: "50px", paddingBottom: "20px"}}>
                    <Button variant="contained" color="primary">
                        Learn more
                    </Button>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default Projects;
