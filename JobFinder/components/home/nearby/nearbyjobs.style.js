import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    paddingHorizontal: SIZES.medium,  // Added horizontal padding for better alignment
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
    paddingVertical: SIZES.small,  // Added padding to give the header more breathing space
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,  // Keeping primary color for the title
    fontWeight: "bold",  // Added bold weight to make the title stand out
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.darkGray,  // Darker gray for the header button, more professional
    opacity: 0.85,  // Slight opacity for a more refined, subtle look
    paddingVertical: SIZES.small / 2,  // Added vertical padding for better touch area
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
    backgroundColor: COLORS.white,  // White background for a clean and modern look
    borderRadius: SIZES.medium,  // Rounded corners for a smoother appearance
    shadowColor: COLORS.black,  // Added shadow for subtle elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: SIZES.medium,  // Padding inside cards container for a well-spaced layout
  },
});

export default styles;
