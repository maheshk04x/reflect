import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, Theme } from "../store/slices/themeSlice";
import { RootState } from "../store";

const ProfileScreen = () => {
    const theme = useSelector((state: RootState) => state.theme.theme)
    const dispatch = useDispatch();
    const selectTheme = (themeName: Theme) => {
        dispatch(setTheme(themeName));
    }
    console.log("Theme", theme);
  return (
    <View style={styles.screen}>
          <Text >Profile Screen</Text>
          <Button title="Light" onPress={() => selectTheme("light")} />
          <Button title="Dark" onPress={() => selectTheme("dark")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
        backgroundColor: "yellow",
        flex: 1
    },
    // screenTitle: (theme) => ({
    //     color: theme.colors
    // })
});

export default ProfileScreen;
