import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: "flex-start",
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  titleContainer: {
    alignItems: "flex-start",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    position: "relative",
  },
  titleHighlight: {
    fontWeight: "900",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#13231B",
    lineHeight: 34,
  },
  brushImage: {
    width: 150,
    height: 12,
    position: "absolute",
    bottom: -15,
    right: -20,
  },
  imageContainer: {
    justifyContent: "flex-end",
    flex: 1,
    bottom: -20,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: "100%",
  },
  bottom: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 8,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E5E5E5",
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: "#13231B",
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default styles;
