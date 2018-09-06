import {StyleSheet} from 'react-native'
import {ApplicationStyles,Metrics,Colors,Fonts} from '../../Themes'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: Colors.white,
        borderRadius:15,
        marginTop:30,
        marginHorizontal:20,
        backgroundColor: Colors.white,
        height: Metrics.screenHeight/4,
        width: Metrics.screenWidth - Metrics.screenWidth/10
    },
    upper: {
        flex: .4,
        marginTop: 10,
        marginBottom:0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    iconContainer: {
        flex: .2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer: {
        flex: .8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    titleContainer:{
      flex:.7,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'flex-start'
    },
    currencyContainer:{
      flex:.3,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center'
    },
    title: {
        fontFamily: Fonts.type.base,
        fontWeight: 'bold',
        fontSize: Fonts.size.title,
        color: Colors.darkGray,
        textAlign: 'left'
    },
    currency: {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.title,
        color: Colors.lightGray,
        textAlign: 'right'
    },
    middle: {
        flex: .5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 0
    },
    balanceContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'    
    },
    USDContainer:{
      flex:.8,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'flex-start'
    },
    changeContainer:{
      flex: .2,
       alignItems:'center',
      justifyContent:'flex-end'
    },
    USDTitle: {
        flex:1,
        paddingHorizontal: 20, 
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.totalUSD,
        color: Colors.darkGray,
        textAlign: 'left'
    },
    BTCTitle: {
        flex:1,
        paddingHorizontal: 20, 
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.totaBTC,
        color: Colors.lightGray,
        textAlign: 'left'
    },
    BTCContainer: {
        flex: .8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    lower: {
        flex: .1,
        marginVertical:15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowDown: {
       height:10, 
       width:30
    }
})