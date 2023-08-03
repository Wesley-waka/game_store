import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import theme from "./theme.ts";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.tsx";
import { Provider } from "react-redux";
import store from "../src/redux/store.ts";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={routes}></RouterProvider>
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
