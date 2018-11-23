
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  InteractionManager,
  StatusBar,
  Platform,
} from 'react-native';


import ScrollableTabView,{ ScrollableTabBar,DefaultTabBar } from 'react-native-scrollable-tab-view';

/**
音乐
**/
export default class Home extends Component{

  componentDidMount(){
    InteractionManager.runAfterInteractions(()=>{
      //
      console.log('InteractionManager....MyMessage');
    });
  }

  render(){
    const{navigator}=this.props;
      console.log('InteractionManager....render');
    return(
      <View style={styles.container}>
      <StatusBar
       backgroundColor='#fa7ca8'
       barStyle='light-content'
       animated={true}
       hidden={false}
      />
      {Platform.OS=='ios'?<View style={{height:15,backgroundColor:'#fff'}}/>:null}
      <ScrollableTabView
      initialPage={1}
      scrollWithoutAnimation={false}
      tabBarActiveTextColor='#fa7ca8'
      tabBarInactiveTextColor='#666'
      tabBarUnderlineStyle={{backgroundColor:'#fa7ca8',height:2}}
      style={{borderColor:'#fafafa'}}
      renderTabBar={()=><DefaultTabBar
                    underlineColor='#fff'
                    activeTextColor='#fa7ca8'
                    inactiveTextColor='#777'
                    underlineHeight={0}
                    textStyle={{ fontSize: 14 }}
                    backgroundColor='#fff'
                    borderBottomColor='#fff'
                    tabStyle={{paddingLeft:20,paddingRight:20,paddingBottom:0}}
                   />}
      >
     <View tabLabel='朋友圈' style={styles.itemLayout}><Text >朋友圈</Text></View>
     <View tabLabel='推荐'  style={styles.itemLayout}><Text>推荐</Text></View>
     <View tabLabel='我的邮箱' style={styles.itemLayout}><Text >我的邮箱</Text></View>
     </ScrollableTabView>
     </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  itemLayout:{flex:1,alignItems:'center',justifyContent:'center'}
  
});
