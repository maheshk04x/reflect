import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={style.screen}>
      <Text>Home Screen</Text>
      <Button title="Test" onPress={() => console.log("pressed")} />
      <View style={style.childBox}>
        <Text>Child area</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "blue",
  },
  childBox: {
    flex: 1,
    backgroundColor: "yellow",
  },
});

export default HomeScreen;
