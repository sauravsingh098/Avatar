import React,{Component} from 'react';
import "./styles.css";
import 'tachyons';
import Avatarlist from './Avatarlist';


class Avatar extends Component{

  constructor(){
    super();
    this.state ={
      name: "Welcome to Avatar world"
    }
  }
  nameChange(){
    this.setStatea({
      name: "thank you!!!!!!!!!"
    })
  }
  render(){
    const avatarlistarray=[
      {
    id:1,
    name:"anurag",
    work : "tester"
    
      },
      {
        id:2,
        name:"amarjeet",
        work : "sales"
        
          },
          {
            id:3,
            name:"saurav",
            work : "fresher"
            
              },
              {
                id:4,
                name:"raza ",
                work : "analyst"
                
                  }
    
    ]
    
    const arrayavatarcard = avatarlistarray.map((avatarcard , i)=>{
      return <Avatarlist id ={avatarlistarray[i].name}
      name ={avatarlistarray[i].name}
      work={avatarlistarray[i].work}/>
    })
   
    return (
      <div className ="mainpage"><h1>{this.state.name}</h1>
      {arrayavatarcard}
        <button onClick ={ ()=> this.nameChange()}> subcribe</button>
        </div>
      
      )

  }
}


   



  


export default Avatar;