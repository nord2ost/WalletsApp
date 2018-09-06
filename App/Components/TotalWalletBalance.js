import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/TotalWalletBalanceStyle'
import {RoundIcon} from './RoundIcon'
import {ChangeIndicator} from './ChangeIndicator'
import {Images, Colors} from '../Themes'
import Icon from 'react-native-vector-icons/Entypo';

export default class TotalWalletBalance extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const total = this.props.total
    const USDBalance = total.USD
    const BTCBalance = total.BTC
    const change = total.change ? total.change : '0.0'
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
            <View style={styles.iconContainer}>
                <RoundIcon color={Colors.darkGray} image={Images.walletWhite}/>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Total Wallet Balance</Text>
                </View>
                <View style={styles.currencyContainer}>
                    <Text style={styles.currency}>USD</Text>
                    <Icon name = 'chevron-down' size={15} color={Colors.lightGray} />
                </View>
            </View>
        </View>
        <View style={styles.middle}>
            <View style={styles.balanceContainer}>
                <View style = {styles.USDContainer}>
                    <Text style={styles.USDTitle}>$ {USDBalance}</Text>
                </View>
                <View style={styles.changeContainer}>
                    <ChangeIndicator changeString ={change} hasBlob = {true} />
                </View>
            </View>
            <View style={styles.balanceContainer}>
                <View style={styles.BTCContainer}>
                    <Text style={styles.BTCTitle}>{BTCBalance} BTC</Text>
                </View>
            </View>
        </View>
        <View style={styles.lower}>
              <Image source = {Images.arrowDown} style={styles.arrowDown}/>
        </View>
      </View>
    )
  }
}
