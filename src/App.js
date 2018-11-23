import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,FlatList,Image} from 'react-native';
import Home from './components/home';
import Video from './components/video';
import TabNavigator from 'react-native-tab-navigator';

const TabNavigatorItem = TabNavigator.Item;

const TAB_NORMAL_1=require('./images/tabbar_1.png');
const TAB_NORMAL_2=require('./images/tabbar_2.png');
const TAB_NORMAL_3=require('./images/tabbar_3.png');
const TAB_NORMAL_4=require('./images/tabbar_4.png');

const TAB_PRESS_1=require('./images/tabbar_1_press.png');
const TAB_PRESS_2=require('./images/tabbar_2_press.png');
const TAB_PRESS_3=require('./images/tabbar_3_press.png');
const TAB_PRESS_4=require('./images/tabbar_4_press.png');

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'Home',
      selectedTitle:'首页'
    }
  }
  _onPress(tabName,title){
    this.setState({
      selectedTab:tabName,
      selectedTitle:title
    })
  }
  selectedComponent(tabName){
    switch(tabName){
      case 'Home':
        return <Home />;
      case 'Video':
        return <Video />;
    }
  }
  renderTabView(title,tabName,tabContent,isBadge){
    var tabNomal;
     var tabPress;
     switch (tabName) {
        case 'Home':
          tabNomal=TAB_NORMAL_1;
          tabPress=TAB_PRESS_1;
          break;
        case 'Video':
          tabNomal=TAB_NORMAL_2;
          tabPress=TAB_PRESS_2;
          break;
        case 'Follow':
          tabNomal=TAB_NORMAL_3;
          tabPress=TAB_PRESS_3;
          break;
        case 'Mine':
          tabNomal=TAB_NORMAL_4;
          tabPress=TAB_PRESS_4;
          break;
        case 'More':
          tabNomal=TAB_NORMAL_4;
          tabPress=TAB_PRESS_4;
          break;

     }
    return (
      <TabNavigatorItem
        title={title}
        renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
        renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
        selected={this.state.selectedTab == tabName?true:false}
        selectedTitleStyle={{color:'#fa7ca8'}}
        onPress= {()=>this._onPress(tabName,title)}
      >
        {tabName == 'Home'?<Home />:<Video />}
      </TabNavigatorItem>
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={{height:60,backgroundColor:'#fa7ca8'}}>
          <Text style={{flex:1,textAlign:'center',lineHeight:60,color:'#fff',fontSize:18}}>{this.state.selectedTitle}</Text>
        </View>
        <View style={{flex:1}}>
          <TabNavigator tabBarStyle={styles.tab}>
          {this.renderTabView('首页','Home','头条板块',true)}
          {this.renderTabView('发现','Video','视频板块',false)}
          {this.renderTabView('消息','Follow','关注板块',false)}
          {this.renderTabView('会员','Mine','我的板块',false)}
          </TabNavigator>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tab:{
    height: 52,
    alignItems:'center',
    backgroundColor:'#f4f5f6',
  },
  tabIcon:{
    width:25,
    height:25,
  },
  badgeView:{
    width:22,
    height:14 ,
    backgroundColor:'#f85959',
    borderWidth:1,
    marginLeft:2,
    marginTop:2,
    borderColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  badgeText:{
    color:'#fff',
    fontSize:8,
  }
});
