/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *    - Preloading any specified app content
 *    - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Alert,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppColors, AppStyles, AppSizes } from '@theme/';

import {
  Alerts,
  Button,
  Card,
  Spacer,
  Text,
  List,
  ListItem,
  FormInput,
  FormLabel,
} from '@components/ui/';

import InputButton from './inputButton';

const inputButtons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, '.', 'CE']
];

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  launchImage: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height,
  },

  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:null
  },

  image: {
    width: 80,
    height: 80,
  },

  content:{
    flex:1,
    alignItems:'center',
    padding: 10,
  },
  buttonOutline: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: AppColors.brand.link,
    padding: 10,
    borderRadius: 3,
    color: AppColors.brand.link,
  },
});

/* Component ==================================================================== */
class TopupAmount extends Component {
  static componentName = 'TopupAmount';

  componentDidMount = () => {
    StatusBar.setHidden(false, true);
  }

  constructor(props) {
        super(props);

        this.state = {
          inputValue: 0,
          previousInputValue: 0,
          currentInputValue: 0,
          selectedSymbol: null,
          connectValue: null,
          displayedCalculate: null,
          isDecimal: null
        }
    }

  render = () => (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#193441'}}>
        <Text style={{textAlign: 'center', color: 'rgba(255,255,255,0.7)', padding: 15}}>Enter amount</Text>
        <View style={{position: 'absolute', right: 15, top: 15}}>
          <TouchableOpacity onPress={Actions.topupScan}>
            <Text style={{fontSize: 16, color: AppColors.brand.primary, fontWeight: 'bold'}}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 2, backgroundColor: '#193441'}}>
        <Text style={AppStyles.displayText}>{this.state.inputValue}</Text>
      </View>
      <View style={{flex: 7, backgroundColor: '#3E606F'}}>
        {this._renderInputButtons()}
      </View>
    </View>
  );

  _renderInputButtons() {
    let views = [];

    for (var r =0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];

      for (var i = 0; i < row.length; i ++) {
        let input = row[i];

        inputRow.push(
          <InputButton
            value={input}
            key={r + '-' + i}
            onPress={this._onInputButtonPressed.bind(this, input)}
            highlight={this.state.selectedSymbol === input} />
        )
      }

      views.push(<View style={AppStyles.inputRow} key={'row-' + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    // Detect the type of input
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }

  _handleNumberInput(num) {
    this.setState({
      inputValue: this.state.isDecimal ? eval(this.state.currentInputValue + this.state.selectedSymbol + num) : this.state.inputValue * 10 + num,
      currentInputValue: this.state.isDecimal ? 0 : this.state.inputValue * 10 + num,
      connectValue: null,
      displayedValue: null,
      isDecimal: null
    })
  }

  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '-':
      case '+':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
          connectValue: str
        });
        break;
      case '%':
        this.setState({
          inputValue: this.state.inputValue / 100
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        this.setState({
          previousInputValue: 0,
          displayedValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null,
          connectValue: null,
          inputValue: 0
        });
        break;
      case ".":
        this.setState({
          isDecimal: true,
          selectedSymbol: str,
          previousInputvalue: this.state.inputValue,
        });
        break;
      case "+/-":
        this.setState({
          inputValue: -Math.abs(this.state.currentInputValue),
          currentInputValue: -Math.abs(this.state.currentInputValue)
        })
        break;
      case 'CE':
        // Clear Everything
        this.setState({
          inputValue: 0,
          connectValue: null,
          displayedValue: null
        });
        break;
    }
  }
}

/* Export Component ==================================================================== */
export default TopupAmount;
