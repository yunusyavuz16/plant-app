import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  safeArea: {
    flex: 1,
  },
  image: {
    top: 16,
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    alignItems: "flex-start",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "400", // Regular weight for "Welcome to"
    color: "#13231B",
    textAlign: "left",
    lineHeight: 34,
  },
  titleHighlight: {
    color: "#13231B", // Exact green from design
    fontWeight: "800", // Bold weight for "PlantApp"
  },
  subtitle: {
    fontSize: 17,
    color: "#7C8471", // Exact gray from design
    marginTop: 8,
    lineHeight: 24,
  },
  bottom: {
    justifyContent: "flex-end",
    paddingHorizontal: 24,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    height: 56,
  },
  bottomInner: {
    alignItems: "center",
    marginTop: 16,
    width: "100%",
  },
  disclaimer: {
    fontSize: 11,
    color: "#7C8471",
    textAlign: "center",
    lineHeight: 18,
    paddingHorizontal: 8,
    width: "100%",
  },
  link: {
    textDecorationLine: "underline",
    color: "#7C8471",
    fontWeight: "500",
  },
});

export default styles;
