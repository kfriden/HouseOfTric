import React, { Component } from 'react';
import axios from 'axios';
import MemPic from './memPic';

class Picture extends Component {
    constructor() {
        super();

        this.state = {
            memberPics: []
          }
      
          this.getMemberPics = this.getMemberPics.bind(this);
    }

    getMemberPics() {
        axios.get("http://127.0.0.1:8000/awsimage/").then(response => {
          console.log(response)
          this.setState({
            memberPics: response.data.forEach((item) => {
                console.log(item.images);
                return (<div>{item.images}</div>)
                
            })
          });
        })
        .catch(error => {
          console.log("getMemberPics error", error);
        });
      }

      componentDidMount() {
        this.getMemberPics();
      }

  render() {
    const pictures = this.state.memberPics.map(memberPic => {
        return <MemPic key={memberPic.id} memberPic={memberPic} />;
    })
    return (
        <div>
            {pictures}
        </div>
    );
  }
}

export default Picture;