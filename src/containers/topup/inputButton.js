
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { AppColors, AppStyles, AppSizes } from '@theme/';

export default class InputButton extends Component {

  render() {
      return (
        <TouchableHighlight style={[AppStyles.inputButton, this.props.highlight ? AppStyles.inputButtonHighlighted : null]}
                              underlayColor="#193441"
                              onPress={this.props.onPress}>
              <Text style={AppStyles.inputButtonText}>{this.props.value}</Text>
          </TouchableHighlight>
      )
  }

}
