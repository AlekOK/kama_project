import React from 'react';
import sss from './profileInfo.module.css';

class ProfileStatus extends React.Component {
   
    state= {
        editMode: false,
        status: this.props.status
    }

    activetaEditMode = () => {
       
        this.setState ({
            editMode: true
        });
    }

    deactivateEditMode = () => {
     
        this.setState ({
            editMode: false
        });

        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState ({
            status: e.currentTarget.value
        });    
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState ({
                status: this.props.status
            });
        }
    }

    render() {
    
        return ( 
            <div >
                {!this.state.editMode && 
                <div className= {sss.statusText}>
                    <span onDoubleClick= {this.activetaEditMode} >{ this.props.status || "Edit your status!!!"}</span>
                </div>}

                { this.state.editMode &&
                <div className= {sss.statusInput}>
                    <input autoFocus={true} 
                           value= {this.state.status}
                           onChange= {this.onStatusChange} 
                           onBlur= {this.deactivateEditMode} />
                  </div>}
            </div>
        )

    }
}; 

export default ProfileStatus;