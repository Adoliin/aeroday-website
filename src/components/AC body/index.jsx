import React, { Component } from "react";
import "./ACbody.scss";
import ACheader from "../AC Header";
import MemberCard from "../Member";
import Button from "../button";


class ACbody extends Component{
    render(){
        return(
        <div className="ACbody">
                {/*<ACheader name={this.props.titleAC} displayed={this.props.acType}/>*/}
            <div className="ac-details-container" >
                <img className="--bgr--" src={process.env.PUBLIC_URL + "/assests/images/background"+this.props.titleAC+".png"} alt="bgr" width="100%" height="480px"/>
                <div className="about-this-ac">
                    <h3>A Propos:</h3>
                    <p>{this.props.description}</p>
                    <div className="buttons-ac--">
                        <div id="cdc1" style={{display: this.props.cdc1=="0"?"none":"auto"}}><Button buttonText="CDC1" buttonURL={this.props.CDC1URL}/></div>
                        <div id="cdc2" style={{display: this.props.cdc2=="0"?"none":"auto"}}><Button buttonText="CDC2" buttonURL={this.props.CDC2URL}/></div>
                        <div id="cdes" style={{display: this.props.cdes=="0"?"none":"auto"}}><Button buttonText="Cahier descriptif" buttonURL={this.props.CDESURL}/></div>
                    </div>
                </div>
                <div className="member-and-button" >
                    <MemberCard memberName={this.props.memberName} memberOccupation={this.props.memberOccupation}/>
                    {/* <div id="formulaire">FORMULAIRE</div> */}
                    <Button className="formulaire"   buttonText="FORMULAIRE" buttonURL=""/>
                </div>
            </div>
            
        </div>
    )}
}

export default ACbody