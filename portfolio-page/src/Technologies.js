import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import './Technologies.css';
import python from './media/python-programming-language.png';
import java from './media/Java.png';
import go from './media/Golang.png';
import springboot from './media/Spring-Boot-Application-Development.png';
import mongodb from './media/MongoDB-sm-logo.gif';
import postgres from './media/postgresql-logo.png';
import docker from './media/docker_facebook_share.png';
import kuber from './media/kubernetes.png';
import dO from './media/DigitalOcean.png';
import gitHub from './media/github.png';
import aws from './media/aws.png';
import PictureCardUtils from './PictureCardUtils';
import JS from './media/javascript-2038874-1720087.png';
import { Grid } from "@material-ui/core";
class Technologies extends Component{
  render(){
      const pictureData = [
          {
            picture: python
          }, 
          {
            picture: java
          },
          {
            picture: go
          },
          {
            picture: springboot
          },
          {
            picture: mongodb
          },
          {
            picture: postgres
          },
          {
            picture: docker
          },
          {
            picture: kuber
          },
          {
            picture: dO
          },
          {
            picture: gitHub
          },
          {
            picture: aws
          },
          {
              picture: JS
          }
        ]

    return(
      <div className="technology-container">
          <div className="technology-text">
            <h1>Technologies</h1>
            <h2>Tools that I have production experience with</h2>
          </div>
        <br></br>
        <Grid container spacing={4} style={{paddingLeft: "40px", paddingRight: "40px"}}>
            {pictureData.map((item, index) => {
                return(
                    <Grid item xs={12} sm={4}>
                        <PictureCardUtils {... item}/>
                    </Grid>
                )
            })}
        </Grid>
        <br></br>
     </div>
    )
  }
}

export default Technologies; 