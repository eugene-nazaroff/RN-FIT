import { Provider } from "inversify-react"
import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { appContainer } from "./src/app/DI/appContainer"
import { AppStack } from "./src/app/navigation/StackNavigation"





export const App = () => {
  return <Provider container={appContainer}>
    <NavigationContainer theme={{
      dark: false,
      colors: {
        background: "#fff",
        primary: "blue",
        card: "#fff",
        text: "black",
        border: "black",
        notification: "red"
      }
    }}>
      <AppStack />
    </NavigationContainer>
  </Provider>
}