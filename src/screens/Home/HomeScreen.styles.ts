import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FBFAFA",
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  welcomeText: {
    fontSize: 16,
    color: "#13231B",
    opacity: 0.7,
    marginBottom: 4,
  },
  greetingText: {
    fontSize: 24,
    color: "#13231B",
    fontWeight: "600",
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderWidth: 0.2,
    borderColor: "#3C3C4325",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: "#13231B",
  },
  premiumBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#24201A",
    marginHorizontal: 24,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    marginTop: 24,
  },
  premiumIconContainer: {
    position: "relative",
    marginRight: 16,
  },
  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#E82C13",
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
  },
  premiumTextContainer: {
    flex: 1,
  },
  premiumTitle: {
    color: "#E5C990",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  premiumSubtitle: {
    color: "#FFFFFF",
    opacity: 0.7,
    fontSize: 13,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#13231B",
    marginBottom: 16,
  },
  articlesRow: {
    marginHorizontal: -24,
  },
  articlesContent: {
    paddingHorizontal: 24,
  },
  articleCard: {
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: "hidden",
  },
  articleImage: {
    width: "100%",
    height: "100%",
  },
  articleOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  articleTitle: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500",
  },
  marginLeft: {
    marginLeft: 16,
  },
  categoriesContainer: {
    padding: 16,
  },
  categoriesGrid: {
    paddingBottom: 16,
  },
  categoryCard: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
    minHeight: 160,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 8,
  },
  categoryImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
});
