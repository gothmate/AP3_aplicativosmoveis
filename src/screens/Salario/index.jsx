import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import {styles} from './styles'

export function Salario() {

    const [hora, setHora] = useState(0);
    const [valor, setValor] = useState(0.0);
    const [salario, setSalario] = useState(0.0);
    const [result , setResult] = useState('R$0.00');
    
    const calculos = () => {
        setSalario(valor * hora);
        let res = ''
        let sal = salario
        let descontoIR = salario*0.11
        let descontoINSS = salario*0.08
        let descontoSind = salario*0.05
        
        res = `Salário Bruto: ${salario.toFixed(2)}\nDesconto INSS: ${descontoINSS.toFixed(2)}\nDesconto IR: ${descontoIR.toFixed(2)}\nDesconto Sindicato: ${descontoSind.toFixed(2)}\nSalário Líquido: ${(sal-descontoINSS-descontoIR-descontoSind).toFixed(2)}`

        setResult(res);

    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.subtext}>
                    Calcula Salário
                </Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Ganho por hora"
                keyboardType="numeric"
                onChangeText={setValor}
            />
            <TextInput
                style={styles.input}
                placeholder="Horas trabalhadas"
                keyboardType="numeric" 
                onChangeText={setHora}
            />
            <View style={styles.form}>
                <Button
                    type='solid'
                    title="Calcular Salário"
                    onPress={calculos}
                />
            </View>
            <Text style={styles.text}>{result}</Text>
        </View>
    )
}