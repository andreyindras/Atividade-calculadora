import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  
  const [mostraVisor, setMostraVisor] = useState("0");
  const [guardarVisor, setGuardarVisor] = useState("");
  const [operador, setOperador] = useState("");
  const [aguardaNovaEntrada, setAguardaNovaEntrada] = useState(false);

  function receberNumero(num) {
    if (aguardaNovaEntrada) {
      setMostraVisor(num)
      setAguardaNovaEntrada(false)
    } else {
      if (mostraVisor === "0") {
        setMostraVisor(num)
      } else {
        setMostraVisor(mostraVisor + num)
      }
    }
  }

  function receberOperador(op) {
    setOperador(op);
    setGuardarVisor(mostraVisor);
    setAguardaNovaEntrada(true);
  }

  function calcularResultado() {
    const num1 = parseFloat(guardarVisor);
    const num2 = parseFloat(mostraVisor);
    let resultado = 0;

    switch(operador) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setMostraVisor("ERROR");
          setGuardarVisor('');
          setOperador('');
          setAguardaNovaEntrada(true);
          return;
        } 

        resultado = num1 / num2;
        break;
      case "√":
        resultado = Math.sqrt(num1);
        break;  
      default:
        return;     
    }
    setMostraVisor(String(resultado));
    setOperador('');
    setGuardarVisor('');
    setAguardaNovaEntrada(true);
  }

  function limparVisor() {
    setMostraVisor("0");
    setGuardarVisor('');
    setOperador('');
    setAguardaNovaEntrada(false);
  }
  

  return (
    <View style={styles.containerCalculadora}>
      <View style={styles.areaVisor}>
        <Text style={styles.textoVisor}>{mostraVisor}</Text>
      </View>

      <View style={styles.areaBotoes}>     
        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botaoLimparVisor} onPress={limparVisor}>
            <Text>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberOperador("√")}>
            <Text>√</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberOperador("/")}>
            <Text>/</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberOperador("*")}>
            <Text>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botao} onPress={() => receberNumero("7")}>
            <Text>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberNumero("8")}>
            <Text>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberNumero("9")}>
            <Text>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberOperador("+")}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botao} onPress={() => receberNumero("4")}>
            <Text>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberNumero("5")}>
            <Text>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberNumero("6")}>
            <Text>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberOperador("-")}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botao} onPress={() => receberNumero("1")}>
            <Text>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberNumero("2")}>
            <Text>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => receberNumero("3")}>
            <Text>3</Text>
          </TouchableOpacity>  

          <TouchableOpacity style={styles.botao} onPress={() => receberNumero(".")}>
            <Text>.</Text>
          </TouchableOpacity>        
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botaoZero} onPress={() => receberNumero("0")}>
            <Text>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoIgual} onPress={calcularResultado}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  containerCalculadora: {
    flex: 1,
    backgroundColor: "#3f3f3f",
    padding: 10
  },

  areaVisor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10
  },

  textoVisor: {
    fontSize: 64,
    textAlign: "right"
  },

  areaBotoes: {
    flex: 3,
    justifyContent: "space-evenly",
    padding: 10
  },

  linhaBotoes: {
    flexDirection: "row"
  },

  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#d3d3d3",
    margin: 4,
    height: 70,
    borderRadius: 10
  },

  botaoLimparVisor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffa500",
    margin: 4,
    height: 70,
    borderRadius: 10
  },

  botaoIgual: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5daad3",
    margin: 4,
    height: 70,
    borderRadius: 10
  },

  botaoZero: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#d3d3d3",
    margin: 4,
    height: 70,
    borderRadius: 10
  }, 
})