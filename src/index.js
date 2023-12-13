import { AppRegistry } from "react-native";
import App from "./PlatformDetection";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});