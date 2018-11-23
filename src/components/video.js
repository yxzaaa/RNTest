import React,{Component} from 'react';
import {View,Text,Button,Picker,Slider,Switch,FlatList} from 'react-native';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            language:'',
            switchState:false,
            listData:[
                {name:'aaa'},
                {name:'bbb'}
            ]
        };
    }
    clickBtn(){
        alert('the btn has been clicked');
    }
    render(){
        return (
            <View style={{flex:1}}>
                <Text>我是Video页</Text>
                
            </View>
        )
    }
}