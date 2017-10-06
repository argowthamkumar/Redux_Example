import React from 'react';

class UserDetails extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                id is : {this.props.user.id}
                <br />
                name is : {this.props.user.name}
                <br />
                teamName is : {this.props.user.teamName}
                <br />
                salary is : {this.props.user.salary}
            </div>
        )
    }
}

export default UserDetails;