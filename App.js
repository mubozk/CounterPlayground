import React, { useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// Define the initial state
const initialState = { counter: 0 };
// Define the reducer function, each action determines how the state will be updated on certain conditions
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  // Using use reducer to manage the state
  // Pass in a reducer function and the initial state to useReducer.
  // The reducer function is responsible for updating the state based on different actions.
  const [state, dispatch] = useReducer(reducer, initialState);
  // The dispatch function is used to trigger actions that will be handled by the reducer.

  // Below we start declaring UI
  // We render a View component that acts as a container for other components // using JSX
  return (
    <View style={styles.container}>
      <Text>theCounter: {state.counter}</Text>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: "decrement" })}
      />
      <Button title="Reset" onPress={() => dispatch({ type: "reset" })} />
    </View>
  );
}
// above
// when these buttons are pressed, we call the dispatch function with the respective action object.
// ({ type: 'increment' } or { type: 'decrement' }), which triggers the reducer to update the state accordingly.

// below
// styling components
// we set the container style to make the component fill the entire screen (flex: 1) and center its content.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

