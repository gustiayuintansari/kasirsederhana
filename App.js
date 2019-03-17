import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class Kasirsederhana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harga1: 0,
      jumlah1: 0,
      harga2: 0,
      jumlah2: 0,
      total: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1abc9c' }}>

      <View style={{ height: 24, backgroundColor: 'black' }} />

        <View style={{ backgroundColor: '#3498db' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            Kasir Sederhana
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#FFFF' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Harga Barang 1 "
              onChangeText={(harga1) => this.setState({ harga1 })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Jumlah Barang 1"
              onChangeText={(jumlah1) => this.setState({ jumlah1 })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Harga Barang 2"
              onChangeText={(harga2) => this.setState({ harga2 })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Jumlah Barang 2"
              onChangeText={(jumlah2) => this.setState({ jumlah2 })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                total: (this.state.harga1 * this.state.jumlah1 + this.state.harga2 * this.state.jumlah2)
              })}
              title="Totalkan"
              accessibilityLabel="Klik Untuk Total"
              color='black'
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#78e08f' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Total {'\t'}{'\t'}= {this.state.total}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => Kasirsederhana);