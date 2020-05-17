/**
 *Projeto simples que cria um contador incremental com opção de 
 *zerar o contador e iniciar novamente.
**/

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const App: () => React$Node = () => {
  const [count, setCount] = useState(0);
  const Increment =()=>{
    setCount((count+1)*2);
  }
  const clear =()=>{
    setCount(0);
  }
  return (
    <View style={styles.Container}>
      <View style={styles.Count}>
        <Text>Numero: {count}</Text>
      </View>
    <TouchableOpacity style={styles.Button} onPress={Increment}>
      <Text style={styles.TextButton}>Incrementar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button} onPress={clear}>
      <Text style={styles.TextButton}>Zerar</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:"center",
    paddingHorizontal:10
  },
  TextButton:{
    color:"white"
  },
  Button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10    
  },
  Count:{
    fontSize:50,
    color:"blue",
    padding:10
  }
});

export default App;
