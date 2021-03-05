import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export const InfoUtilisateur = ({
                                  modalVisible,
                                  utilisateur,
                                  setModalVisible,
                                }) => {

  return (
    <Modal animationType="slide"
           transparent={true}
           visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{utilisateur.name.first} {utilisateur.name.last}</Text>
          <Text style={styles.modalText}>{utilisateur.dob.age} ans</Text>
          <Text style={styles.modalText}>{utilisateur.location.street.name}</Text>
          <Text style={styles.modalText}>{utilisateur.location.city}</Text>
          <Text style={styles.modalText}>{utilisateur.email}</Text>
          <Text style={styles.modalText}>{utilisateur.cell}</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.modalText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    width: 80,
    borderWidth: 0.5,
    borderColor: "lightgray",
    marginTop: 10,
    marginRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    width: 150,
  },
  add: {
    backgroundColor: "#1efd20",
  },
  cancel: {
    backgroundColor: "#ea5050",
  },
  buttons: {
    flexDirection: "row",
  },
});
