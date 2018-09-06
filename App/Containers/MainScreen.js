//
//This container receive data and passes them to child component
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Images} from '../Themes/'
import {MainView} from '../Components/MainView'
// Redux
import MainScreenActions from '../Redux/MainScreenRedux'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {
  constructor (props) {
   super(props)
    this.state = {}
   }

   static defaultProps = {
    payload:{
      total: {},
      balance: []
    }
  }

   componentDidMount(){
    this.props.MainScreenRequest()
   }
   //this function generates object to be used by Icon component
   generateIconObject = (currency) =>{
    switch(currency){
      case 'BTC' :
      return {image: Images.BTC, color: Colors.bitcoin }
      break;
      case 'XRP' :
      return {image: Images.XRP, color: Colors.ripple }
      break;
      case 'ETH' :
      return {image: Images.ETH, color: Colors.etherum }
      break;
    }
   }

  render () {
    const data = this.props.payload ? this.props.payload : MainScreen.defaultProps.payload
      const total = data.total
      const balance = data.balance 
      const balanceWithIcon = balance
            .map(obj => {
              let currency = obj.currency
              return { ...obj, icon : this.generateIconObject(currency) }
            }) 

      //alert(this.props.error)
      //<MainView total = {total} balance = {balance}/>
    return (
      <MainView total = {total} balance = {balanceWithIcon}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payload: state.main.payload,
    fetching: state.main.fetching,
    error: state.main.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    MainScreenRequest: () =>dispatch(MainScreenActions.MainScreenRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
