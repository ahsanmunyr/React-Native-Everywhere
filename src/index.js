import { AppRegistry } from "react-native";
import App from "./WebApp";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});