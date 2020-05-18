/**
 *Projeto simples de um jogo da velha em React Native.
**/

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button,
  Alert
} from 'react-native';

const App: () => React$Node = () => {

  const [ums,setUms] = useState("");
  const [doiss,setDoiss] = useState("");
  const [tress,setTress] = useState("");
  const [quatros,setQuatros] = useState("");
  const [cincos,setCincos] = useState("");
  const [seiss,setSeiss] = useState("");
  const [setes,setSetes] = useState("");
  const [oitos,setOitos] = useState("");
  const [noves,setNoves] = useState("");

  const [vez, setVez] = useState("O");
  const MudaVez =()=>{
    if(vez==="O"){
      setVez("X");
    }else{
      setVez("O")
    }
  }
  const [um,setUm] = useState("");
  const btnUm= ()=>{  
    if(vez==="X"){
      setUm(vez);       
    }else{
      setUm(vez);       
    }
    setUms(true);
    MudaVez();
  }  
  const [dois,setDois] = useState("");
  const btnDois= ()=>{
    if(vez==="X"){
      setDois(vez);
       
    }else{
      setDois(vez);
       
    }
    setDoiss(true);
    MudaVez();
  }
  const [tres,setTres] = useState("");
  const btnTres= ()=>{
    if(vez==="X"){
      setTres(vez);
       
    }else{
      setTres(vez);
       
    }
    setTress(true);
    MudaVez();
  }
  /*linha 2*/
  const [quatro,setQuatro] = useState("");
  const btnQuatro= ()=>{
    if(vez==="X"){
      setQuatro(vez);
       
    }else{
      setQuatro(vez);
       
    }
    setQuatros(true);
    MudaVez();    
  }
  const [cinco,setCinco] = useState("");
  const btnCinco= ()=>{
    if(vez==="X"){
      setCinco(vez);
       
    }else{
      setCinco(vez);
       
    }
    setCincos(true);
    MudaVez();
  }
  const [seis,setSeis] = useState("");
  const btnSeis= ()=>{
    if(vez==="X"){
      setSeis(vez);
       
    }else{
      setSeis(vez);
       
    }
    setSeiss(true);
    MudaVez();
  }
  /*linha 3*/
  const [sete,setSete] = useState("");
  const btnSete= ()=>{
    if(vez==="X"){
      setSete(vez);
       
    }else{
      setSete(vez);
       
    }
    setSetes(true);
    MudaVez();
  }
  const [oito,setOito] = useState("");
  const btnOito= ()=>{
    if(vez==="X"){
      setOito(vez);
       
    }else{
      setOito(vez);
       
    }
    setOitos(true);
    MudaVez();
  }
  const [nove,setNove] = useState("");
  const btnNove= ()=>{    
    if(vez==="X"){
      setNove(vez);
       
    }else{
      setNove(vez);
       
    }
    setNoves(true);    
    MudaVez(); 
  }
  const habilitaButtons= ()=>{
    setUms(false);
    setDoiss(false);
    setTress(false);
    setQuatros(false);
    setCincos(false);
    setSeiss(false);
    setSetes(false);
    setOitos(false);
    setNoves(false);
  }
  const desabilitaButtons= ()=>{
    setUms(true);
    setDoiss(true);
    setTress(true);
    setQuatros(true);
    setCincos(true);
    setSeiss(true);
    setSetes(true);
    setOitos(true);
    setNoves(true);
  }
  const limpaButtons= ()=>{
    setUm("");
    setDois("");
    setTres("");
    setQuatro("");
    setCinco("");
    setSeis("");
    setSete("");
    setOito("");
    setNove("");
  }
  useEffect(() => {
    if(um!="" && dois!="" && tres!=""&& um==dois && um==tres){desabilitaButtons();Alert.alert("Vitoria de: "+um); }
    if(um!="" && quatro!="" && sete!=""&& um==quatro && um==sete){desabilitaButtons();Alert.alert("Vitoria de: "+um); }
    if(um!="" && cinco!="" && nove!=""&& um==cinco && um==nove){desabilitaButtons();Alert.alert("Vitoria de: "+um); }
    if(tres!="" && cinco!="" && sete!=""&& tres==cinco && tres==sete){desabilitaButtons();Alert.alert("Vitoria de: "+tres); }
    if(tres!="" && seis!="" && nove!=""&& tres==seis && tres==nove){desabilitaButtons();Alert.alert("Vitoria de: "+tres); }
    if(dois!="" && cinco!="" && oito!=""&& dois==cinco && dois==oito){desabilitaButtons();Alert.alert("Vitoria de: "+dois); }
    if(quatro!="" && cinco!="" && seis!=""&& quatro==cinco && quatro==seis){desabilitaButtons();Alert.alert("Vitoria de: "+quatro); }
    if(sete!="" && oito!="" && nove!=""&& sete==oito && sete==nove){desabilitaButtons();Alert.alert("Vitoria de: "+sete); }
  }, [um,dois,tres, quatro,cinco,seis,sete,oito,nove]);

  const reiniciar= ()=>{
    habilitaButtons();
    limpaButtons();
    Alert.alert('Jogo reiniciado');
  }
  
  return (  
    <>
    <View style={styles.tudo}>
      <View style={styles.Count}>
        <Text>Vez de: {vez}</Text>
      </View>
      <View style={styles.titulo}>
        <Text style={{color:"red",fontSize:50,fontWeight: "bold"}}>Tic</Text>
        <Text style={{fontSize:50}}>-</Text>
        <Text style={{color:"green",fontSize:50,fontWeight: "bold"}}>Tac</Text>
        <Text style={{fontSize:50}}>-</Text>
        <Text style={{color:"yellow",fontSize:50,fontWeight: "bold"}}>Toe</Text>
      </View>
        <View style={styles.linhaUm}>
        <TouchableOpacity style={styles.Button} disabled={ums} onPress={btnUm}>
          <Text style={styles.TextButton}>{um}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} disabled={doiss} onPress={btnDois}>
          <Text style={styles.TextButton}>{dois}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} disabled={tress} onPress={btnTres}>
          <Text style={styles.TextButton}>{tres}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.linhaDois}>
        <TouchableOpacity style={styles.Button} disabled={quatros} onPress={btnQuatro}>
          <Text style={styles.TextButton}>{quatro}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} disabled={cincos} onPress={btnCinco}>
          <Text style={styles.TextButton}>{cinco}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} disabled={seiss} onPress={btnSeis}>
          <Text style={styles.TextButton}>{seis}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.linhaTres}>
        <TouchableOpacity style={styles.Button} disabled={setes} onPress={btnSete}>
          <Text style={styles.TextButton}>{sete}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} disabled={oitos} onPress={btnOito}>
          <Text style={styles.TextButton}>{oito}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} disabled={noves} onPress={btnNove}>
          <Text style={styles.TextButton}>{nove}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Count}>
          <Button
            onPress={reiniciar}
            title="Reiniciar Jogo"
            color="#841584"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tudo:{
    flex:1,
    backgroundColor:"#e0e0eb"
  },
  titulo:{
    fontWeight: "bold",
    flexDirection: 'row',
    justifyContent:"center",
    paddingHorizontal:10,
    marginVertical:50,
    paddingHorizontal:10,
    fontSize:25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6,
  },
  Reiniciar:{
    flex:1,
    justifyContent:"center",
    paddingHorizontal:10,
  },
  linhaUm:{   
    flexDirection: 'row',
    justifyContent:"center",
    paddingHorizontal:10,
    marginVertical:5
  },
  linhaDois:{ 
    flexDirection: 'row',
    justifyContent:"center",
    paddingHorizontal:10,
    marginVertical:5
  },
  linhaTres:{
    flexDirection: 'row',
    justifyContent:"center",
    paddingHorizontal:10,
    marginVertical:5 
  },
  TextButton:{
    flex:1,
    fontSize:25,
    color:"white",
    fontWeight: "bold"
  },
  Button: {
    width: 100,
    height: 100,
    backgroundColor:'#00bfff',
    padding: 25,
    marginHorizontal:5,
    alignItems:"center" 
  },
  Count:{
    fontSize:100,
    color:"blue",
    padding:10
  }
});

export default App;
