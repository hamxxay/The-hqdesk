import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { colors } from "./theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <RootTabs />
    </SafeAreaProvider>
  );
}

function RootTabs() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = 56 + insets.bottom;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        tabBarStyle: [
          styles.tabBar,
          { height: tabBarHeight, paddingBottom: insets.bottom + 6 },
        ],
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        tabBarIconStyle: styles.tabIcon,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Book Now",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="pricing"
        options={{
          title: "Pricing",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetag-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Hidden screens */}
      <Tabs.Screen name="login" options={{ href: null }} />
      <Tabs.Screen name="signup" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.background,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    paddingTop: 6,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  tabItem: {
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
});
