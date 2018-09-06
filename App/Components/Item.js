import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ItemStyle'

import {RoundIcon} from './RoundIcon'
import {ChangeIndicator} from './ChangeIndicator'

export class Item extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  //static defaultProps = {
  //icon: ''
  //}

  render () {
    const itemObject = this.props.item
    const icon = itemObject.icon
    const currency = itemObject.currency
    const inCurrency = itemObject.inCurrency
    const inUSD = itemObject.inUSD
    const rate = itemObject.rate
    const change = itemObject.change

    return (
      <View style={styles.container}>
        <View style ={styles.leftContainer}>
         <View style ={styles.circle}>
            <RoundIcon color = {icon.color} image = {icon.image}/>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.inCurrency}>{inCurrency}{currency}</Text>
          <Text style={styles.rate}>${rate}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.inUSD}>${inUSD}</Text>
          <ChangeIndicator changeString ={change} hasBlob = {false} />
        </View>
      </View>
    )
  }
}
