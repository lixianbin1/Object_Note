import React,{Fragment} from 'react';
import {StyleSheet,Text,View,Image,TouchableWithoutFeedback,Button} from 'react-native';
// import H_header from './H_header'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ulist:[],
    };
  }
  componentDidMount(){ // 先把功能写出来，在考虑拆分
    console.log(this.props)
  }
  init(){ //初始化数据 通过存储的数据来判断 文件夹及存储的内存

      // ulist:[
      //   {title:'所有便签',key:'便签',}
      //   {title:'废纸篓',key:'废纸篓',}

  }
  Changeheader(){
    console.log()
  }
  closeHeader(){

  }
  render() {
  return(
    <View style={styles.home}>

        <View onPress={this.closeHeader()} style={{position:'absolute',width:'100%',height:'100%',opacity:0.3,backgroundColor:'#000',zIndex:1}}></View>

        <View style={styles.header}>
          <View style={{flex:1,}}></View>
          <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
            <TouchableWithoutFeedback >
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:5,}}>
              <Text style={{fontSize:15}}>便签</Text>
              <Image style={{width:15,height:15,}} source={require('../static/images/icon/down.png')}/>
            </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',}}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Setting')}>
            <View style={{padding:5}}>
              <Image style={styles.setting} source={require('../static/images/icon/menu.png')}/>
            </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={{backgroundColor:'#fff',borderTopWidth:0.5,borderColor:'#ccc',zIndex:1,}}>
          <Text style={{height:50,lineHeight:50,borderColor:'#ccc',borderBottomWidth:0.5,marginLeft:30,marginRight:30,}}>所有便签</Text>
          <Text style={{height:50,lineHeight:50,borderColor:'#ccc',borderBottomWidth:0.5,marginLeft:30,marginRight:30,}}>废纸篓</Text>
          <Text style={{height:50,lineHeight:50,textAlign:'center',marginLeft:30,marginRight:30,}}>新建文件夹</Text>
        </View>

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
  open:{

  },
  setting:{
    height:20,
    width:20,
    margin:5,
  },


  
  setting:{
    height:20,
    width:20,
    margin:5,
  },
})

export default Home;