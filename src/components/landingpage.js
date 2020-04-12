import React, {Component} from 'react';
import { Grid, cell } from 'react-mdl';

class Landing extends Component {
    render (){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <cell col={12}>
                        <img 
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shareicon.net%2Fmale-business-man-costume-avatar-office-user-103157&psig=AOvVaw2dNFc60QxMXRgUzyakjEfo&ust=1586560920717000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjS8tGp3egCFQAAAAAdAAAAABAD"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1> Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS |  CSS Grid |  Bootstrap | Javascript | React | Dart | Flutter  </p>
                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />

                                </a>

                            </div>
                        </div>
                        
                    </cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;