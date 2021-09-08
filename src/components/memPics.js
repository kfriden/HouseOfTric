import React, { Component } from 'react';
import axios from 'axios';
import MemPic from './memPic';

class Picture extends Component {
    constructor() {
        super();

        this.state = {
            memberPicData: []
          }
      
          this.getMemberPics = this.getMemberPics.bind(this);
    }

    getMemberPics() {
        axios.get("http://127.0.0.1:8000/awsimage/").then(response => {
          console.log(response)
          
          this.setState({
            
            memberPicData: response.data
          })
        })
        .catch(error => {
          console.log("getMemberPics error", error);
        });
      }

      componentDidMount() {
        this.getMemberPics();
      }

  render() { 
    console.log("memberData", this.state.memberPicData);
    return (
        <div>
            {this.state.memberPicData.map(memberPic => {
        return <MemPic key={memberPic.id} imageUrl={memberPic.images} />;
    })}
        </div>
    );
  }
}

export default Picture;