import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to detail screen"
        onPress={()=>this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}
