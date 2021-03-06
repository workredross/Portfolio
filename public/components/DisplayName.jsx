import React, { Component } from 'react';
require('style!css!DisplayNameCSS');
require('AfterNameSubmitJS')

class DisplayName extends Component {
    
    render() {
        var {name, loc, temp} = this.props;
        var name = name.toLowerCase();
        if(name==''){
            return <div></div>
        }
	if(temp=='Loading'){
	    return(
                <div className='id-display-name display-name-hide'>
                hello {name} !!<br /> <div className = 'temp'>Weather cannot be dispalyed because of unsecured connection.</div> 
                </div>
            )
	}
        else{
            return(
                <div className='id-display-name display-name-hide'>
                hello {name} !!<br /> <div className = 'temp'>It feels like {temp}&#8451;, outside in {loc}</div> 
                </div>
            )
        }

    }
}

export default DisplayName;
