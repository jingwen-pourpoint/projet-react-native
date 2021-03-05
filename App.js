import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TouchableOpacity,
} from "react-native";
import { utilisateursService } from "./service/UtilisateursService";
import { InfoUtilisateur } from "./composant/InfoUtilisateur";
import { Utilisateur } from "./composant/utilisateur";


const App = () => {

  const [utilisateurs, setUtilisateurs] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(-1);

  useEffect(() => {
    utilisateursService.getUtilisateurs().then(json => setUtilisateurs(json));
  }, []);

  const displayInformation = (index) => {
    setModalVisible(true);
    setSelectedUserIndex(index);
  };

  const deleteUser = index => {
    utilisateurs.splice(index, 1);
    setUtilisateurs([...utilisateurs]);
  };

  if (!utilisateurs) return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Liste d'utilisateurs</Text>
          </View>
          <View>
            {utilisateurs.map((utilisateur, index) =>
              <Utilisateur key={index}
                           deleteUser={deleteUser}
                           displayInformation={displayInformation}
                           utilisateur={utilisateur}
                           index={index} />,
            )}
          </View>

          {
            selectedUserIndex !== -1 &&
            <InfoUtilisateur modalVisible={modalVisible}
                             utilisateur={utilisateurs[selectedUserIndex]}
                             setModalVisible={setModalVisible} />
          }


        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 800,
  },
  loadingText: {
    fontSize: 40,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
  },
});

export default App;
