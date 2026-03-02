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

          <TouchableOpacity style={styles.botaoIgual}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botaoZero}>
            <Text>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text>,</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

})