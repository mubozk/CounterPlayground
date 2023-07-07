import React, { useReducer, useImperativeHandle, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
const initialState = { counter: 0 };
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

const Counter = React.forwardRef((props, ref) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useImperativeHandle(ref, () => ({
    reset: () => {
      dispatch({ type: "reset" });
    },
  }));

  return (
    <View>
      <Text>The Counter: {state.counter}</Text>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: "decrement" })}
      />
    </View>
  );
});

export default function App() {
  const counterRef = useRef(null);
  const handleReset = () => {
    counterRef.current.reset();
  };
  return (
    <View style={styles.container}>
      <Counter ref={counterRef} />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
