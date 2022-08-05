// import { useContext} from 'react'
import { View, StyleSheet, Text, StatusBar as RNStatusBar, Image, ScrollView, TouchableHighlight  } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { defaultFinalFantasyWindow } from '../styles';
import { ANDROID } from '../const/misc'
import { regions } from '../data/locations';
import { AREA_SELECT } from '../const/views';
// import { StateContext } from '../App';

export default function RegionSelect({ navigation }) {
  // const state = useContext(StateContext);
  // console.log(navigation)
  return <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Image source={require('../assets/misc/fishingSymbol.png')} />
      <Text style={styles.headerText}>FFXIV Fishing Buddy</Text>
    </View>
    <ScrollView>
      {regions.map(region => <TouchableHighlight 
        key={region} 
        style={styles.areaContainer} 
        underlayColor='#5150C6' 
        onPress={() => navigation.navigate(AREA_SELECT, {region})}
      >
        <Text style={styles.areaText}>{region}</Text>
      </TouchableHighlight>)}
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === ANDROID ? RNStatusBar.currentHeight : 0,
    flex: 1,
    paddingLeft: 5,
    ...defaultFinalFantasyWindow
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'sans-serif-condensed'
  },
  areaContainer: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  areaText: {
    color: '#B1D8E0',
    fontSize: 20
  }
});
