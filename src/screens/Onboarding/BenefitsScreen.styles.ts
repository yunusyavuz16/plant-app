import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: "flex-start",
    marginBottom: 12,
    paddingHorizontal: 24,
    backgroundColor: "transparent",
  },
  titleRow: {
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#13231B",
    lineHeight: 34,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  titleHighlight: {
    fontWeight: "900",
    color: "#13231B",
  },
  brushImage: {
    position: "absolute",
    left: 112, // adjust as needed for underline
    bottom: -20,
    width: 200,
    height: 16,
    zIndex: -1,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    bottom: -50,
  },
  bottom: {
    alignItems: "center",
    paddingHorizontal: 24,
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
