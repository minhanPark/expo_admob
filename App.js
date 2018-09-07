import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  AdMobRewarded
} from "expo";

const BANNER_ID = "ca-app-pub-3940256099942544/6300978111";
const INTERSTITIAL_ID = "ca-app-pub-3940256099942544/8691691433";
const REWARDED_ID = "ca-app-pub-3940256099942544/5224354917";

AdMobInterstitial.setAdUnitID(INTERSTITIAL_ID);
AdMobInterstitial.setTestDeviceID("EMULATOR");
AdMobRewarded.setAdUnitID(REWARDED_ID);
AdMobRewarded.setTestDeviceID("EMULATOR");

class App extends React.Component {
  _openInterstitial = async () => {
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  };
  _openRewarded = async () => {
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };
  bannerError() {
    console.log("An error");
    return;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>admob bottom banner</Text>
        <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="fullBanner"
          adUnitID= {BANNER_ID}
          // Test ID, Replace with your-admob-unit-id
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError}
        />
        <View style={styles.btn}>
          <Text style={styles.title}>INTERSTITIAL AD</Text>
          <TouchableOpacity>
            <Button
              title="OPEN"
              color="#2ecc71"
              onPress={this._openInterstitial}
              />
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <Text style={styles.title}>REWARDED AD</Text>
          <TouchableOpacity>
            <Button
              title="OPEN"
              color="#2980b9"
              onPress={this._openRewarded}
              />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: 7
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
});

export default App;
