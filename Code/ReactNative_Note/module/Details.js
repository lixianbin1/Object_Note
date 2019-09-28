import React,{Fragment} from 'react';
import {StyleSheet,Text,View} from 'react-native';

class Details extends React.Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
  return(
    <View style={styles.home}>
      <Text>Details</Text>

    </View>
  )}
}

const styles=StyleSheet.create({
  home:{
    flex:1,
  },

})

export default Details;