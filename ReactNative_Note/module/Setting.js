import React,{Fragment} from 'react';
import {StyleSheet,Text,View} from 'react-native';

class Setting extends React.Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
  return(
    <View style={styles.home}>
      <Text>Setting</Text>

    </View>
  )}
}

const styles=StyleSheet.create({
  home:{
    flex:1,
  },

})

export default Setting;