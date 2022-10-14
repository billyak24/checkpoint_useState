import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


class App extends Component {
   state={
    name : 'AKHAL Bilel',
    bio :'l am a geologist student in usthb and python ,full stack javascript',
    profession :' Web Development Student at GOMYCODE',
    shows: false,
    timer:0,
    interval: null,
}
componentDidMount(){
  this.setState({interval:setInterval(()=>{this.setState({timer:this.state.timer+ 1})
  },1000)})
}
  render(){
    const handleChange =a =>{
      this.setState({shows:!this.state.shows})
    }

    return  (

<center>
<Button  
variant="primary" 
size="lg" 
style={{marginTop:'90px'}} 
onClick={handleChange}>
CLICK ME     </Button>
{this.state.shows && <div>  
  
  
   <h2 id='count'>{this.state.timer}</h2>
<div id='main'>
  <h1 style={{fontSize:  '40px' , marginTop:'60px'}}>{this.state.name}</h1> 
  <h2 style={{fontSize:  '26px',marginBottom:'30px' }}>{this.state.profession}</h2>
  <h2 style={{fontSize:  '16px' , marginLeft:'5%',marginRight:'5%'}}>{this.state.bio}</h2>
  <img src='/pic2.jpeg' alt='img'/>
  </div>
  </div>
}

</center>
    )      
  }
}
 export default App;
