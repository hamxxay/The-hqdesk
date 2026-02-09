import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radii } from "../theme";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <View style={styles.logoMark} />
        <Text style={styles.logoText}>WorkNest</Text>
      </View>
      <View style={styles.actions}>
        <Pressable
          onPress={() => router.push("/login")}
          style={[styles.button, styles.outlineButton]}
        >
          <Text style={styles.outlineText}>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/signup")}
          style={[styles.button, styles.primaryButton]}
        >
          <Text style={styles.primaryText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoMark: {
    width: 28,
    height: 28,
    borderRadius: radii.sm,
    backgroundColor: colors.primary,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.foreground,
  },
  actions: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: radii.sm,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
  outlineText: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: "700",
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  primaryText: {
    color: colors.background,
    fontSize: 12,
    fontWeight: "700",
  },
});
