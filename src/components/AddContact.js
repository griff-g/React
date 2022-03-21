import React from 'react';

export default class AddContact extends React.Component{

    state={name:"",email:""}

    addName=(event)=>{
        this.setState({...this.state,name:event.target.value})
    }
    addEmail=(event)=>{
        this.setState({...this.state,email:event.target.value})
    }
   
    render(){
        console.log(this.state)
        return(
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form'>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.addName}/>
                    </div>
                </form>
                <form className='ui form'>
                    <div className='field'>
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} placeholder="Email"onChange={this.addEmail}/>
                        <button className="ui button blue" onClick={(e)=>{
                            e.preventDefault()
                            this.props.add(this.state)
                        }}>Add</button>
                    </div>
                 </form>
            </div>
        );
    }
}
