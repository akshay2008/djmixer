import React, { Component } from 'react';
import { Button,View,Text } from 'react-native';

class BlueButton extends Component{

 displayAlert=()=>{
  alert("yoooooooooooooooo");
   
  }

render(){
return(
<Button title = "Sound1" color = "" onPress={this.displayAlert}/>
)


}



}

class OrangeButton extends Component{

 displayAlert=()=>{
  alert("hooooooooooo");
   
  }

render(){
return(
<Button title = "Sound1" color = "orange" onPress={this.displayAlert}/>
)


}



}

class YellowButton extends Component{

 displayAlert=()=>{
  alert("tantantantantan");
   
  }

render(){
return(
<Button title = "Sound1" color = "yellow" onPress={this.displayAlert}/>
)


}



}

class GoldButton extends Component{

 displayAlert=()=>{
  alert("woooooohoooooooooo");
   
  }

render(){
return(
<Button title = "Sound1" color = "gold" onPress={this.displayAlert}/>
)


}



}

export default class App extends Component {
  render(){
    return (
      <View>
      <View style = {{marginTop:50}}>
    <BlueButton/>
      </View>
      <View style = {{marginTop:50}}>
     < OrangeButton/>
      </View>
      <View style = {{marginTop:50}}>
     < YellowButton/>
      </View>
       <View style = {{marginTop:50}}>
     <  GoldButton/>
      </View>
      </View>
    );
  }
}