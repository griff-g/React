import React from "react";
const ContactList = (props) =>{
    return(
        <div className="ui called list">
           { props.data.length>0 && props.data.map((contacts, index)=>{
                return <div style={{display:"inline-block"}} key={index}>
                    <div>{contacts.name}</div>
                    <div>{contacts.email}</div>
                </div>
           })} 
        </div>
    )
}

export default ContactList;