import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Utilisateur = ({
                              utilisateur,
                              displayInformation,
                              deleteUser,
                              index,
                            }) => {
  return (
    <View style={styles.utilisateur}>
      <TouchableOpacity style={styles.nom}
                        onPress={() => displayInformation(index)}>
        <Text>{utilisateur.name.first} {utilisateur.name.last}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
                        onPress={() => deleteUser(index)}>
        <Text>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  utilisateur: {
    height: 40,
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingLeft: 5,
    flexDirection: "row",
  },
  nom: {
    width: 200,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fab157",
    padding: 10,
    width: 100,
  },
});
