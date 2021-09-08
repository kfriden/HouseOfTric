import React, { Component } from 'react';
import MemPics from './memPics';
import MemberInfo from './memberInfo';
import axios from 'axios';

class Card extends Component {
    constructor() {
        super();

        this.state = {
            memberInfo: []
          }
          this.getMemberInfo = this.getMemberInfo.bind(this);
    }

    getMemberInfo() {
        axios.get("http://127.0.0.1:8000/api/members").then(response => {
          console.log(response)
          this.setState({
            memberInfo: response.data
          });
        })
        .catch(error => {
          console.log("getBlogItems error", error);
        });
      }
    
      componentDidMount() {
        this.getMemberInfo();
      }

    render() {
        const memberRecords = this.state.memberInfo.map(memberItem => {
            return <MemberInfo key={memberItem.id} memberItem={memberItem} />;
          })
        return (
            <div>
                <MemPics />
               {memberRecords}
            </div>
        );
      }
    }

export default Card;