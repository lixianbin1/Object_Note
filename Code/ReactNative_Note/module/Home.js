import React,{Fragment} from 'react';
import {StyleSheet,Text,View,Image,TouchableWithoutFeedback,Button} from 'react-native';
import H_header from './H_header'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ulist:[
        {title:'所有便签',key:'便签',}
        {title:'废纸篓',key:'废纸篓',}
      ]
    };
  }
  componentDidMount(){
    console.log(this.props)
  }
  Changeheader(){
    console.log()
  }

  render() {
  return(
    <View style={styles.home}>
      <H_header onChange={this.Changeheader}/>

      <View style={{flex:1,}}>
        <Text>Home</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
    </View>
  )}
}

const styles=StyleSheet.create({
  home:{
    flex:1,
    backgroundColor:'#f3f3f3'
  },
  header:{
    height:50,
    flexDirection:'row',//column
    justifyContent:'center',
    backgroundColor:'#fff',
    zIndex:1,
  },
  
  setting:{
    height:20,
    width:20,
    margin:5,
  },
})

export default Home;