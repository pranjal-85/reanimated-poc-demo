import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InterpolationView from "./components/InterpolationView";
import Loader from "./components/Loader";
import PanGesture from "./components/PanGesture";
import SwipeToDelete from "./components/SwipeToDelete";

const App = () => {
  const [screenName, setScreenName] = useState("Interpolation");

  return (
    <PreviewLayout
      label="ReAnimated2"
      values={["NormalLoader", "PanGesture", "Interpolation", "SwipeToDelete"]}
      selectedValue={screenName}
      setSelectedValue={setScreenName}
    >
     {(screenName == 'NormalLoader') && <Loader />}
     {(screenName == 'PanGesture') && <PanGesture />}
     {(screenName == 'Interpolation') && <InterpolationView />}
     {(screenName == 'SwipeToDelete') && <SwipeToDelete />}
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  selectedValue,
  children,
  values,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default App;
