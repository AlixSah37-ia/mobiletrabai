import { Image, StyleSheet, Text, View } from "react-native";

const illustration = require("../../assets/images/react-logo.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Programação Mobile
      </Text>

      <Text style={styles.subtitle}>
        Acesse sua conta
      </Text>

      <Image
        source={illustration}
        style={styles.illustration}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDFDFD",
    padding: 32,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 20,
  },

  illustration: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
