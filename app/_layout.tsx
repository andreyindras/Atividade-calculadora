import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <View style={styles.containerCalculadora}>
      <View style={styles.areaVisor}>
        <Text></Text>
      </View>

      <View style={styles.areaBotoes}>     
        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botaoLimparTudo}>
            <Text>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>√</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>/</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botao}>
            <Text>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botao}>
            <Text>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botao}>
            <Text>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>3</Text>
          </TouchableOpacity>          
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botaoZero}>
            <Text>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>,</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoIgual}>
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10
  },

  areaBotoes: {
    flex: 3,
    justifyContent: "space-evenly",
    padding: 10
  },

  linhaBotoes: {
    flexDirection: "row",
  },

  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#d3d3d3",
    margin: 4,
    height: 70,
    borderRadius: 10,

  },

  botaoLimparTudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffa500",
    margin: 4,
    height: 70,
    borderRadius: 10,
  },

  botaoIgual: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5daad3",
    margin: 4,
    height: 140,
    borderRadius: 10,
  },

  botaoZero: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#d3d3d3",
    margin: 4,
    height: 70,
    borderRadius: 10,
  }, 
})