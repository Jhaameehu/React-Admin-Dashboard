import React, {Component} from 'react';
import { Grid, cell } from 'react-mdl';

class Landing extends Component {
    render (){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <cell col={12}>
                        <img 
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                        
                    </cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;