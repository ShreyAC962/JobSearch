import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    paddingHorizontal: SIZES.medium,  // Added horizontal padding for spacing consistency
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.small,  // Added padding to give the header some breathing room
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,  // Kept primary color for the header title
    fontWeight: "bold",  // Added bold weight for a more striking title
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.darkGray,  // Darker shade for a more professional button color
    opacity: 0.8,  // Slight opacity for a soft, modern look
    paddingVertical: SIZES.small / 2,  // Added vertical padding for better touch target
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    backgroundColor: COLORS.white,  // White background for a clean, professional look
    borderRadius: SIZES.medium,  // Rounded corners for a smoother appearance
    shadowColor: COLORS.black,  // Added shadow for depth and elevation effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: SIZES.medium,  // Padding for the container to ensure content isn't touching edges
  },
});

export default styles;
