import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { CheckBox, Button } from 'react-native-elements';
import {styles} from './styles'

export function Imc(props) {
    const [altura, setAltura] = useState(0.0);
    const [man, setMan] = useState(true);
    const [woman, setWoman] = useState(false);
    const [gender, setGender] = useState('')
    const [resposta, setResposta] = useState('O seu IMC é...')

    const genderMan = () => {
        setMan(true)
        setWoman(false)
        setGender("Homem")
    }
    
    const genderWoman = () => {
        setMan(false);  
        setWoman(true)
        setGender("Mulher")
    }

    const calculaPeso = () => {
        let alt = altura
        alt = alt.replace(',', '.')
        alt = parseFloat(alt)

        if(gender == 'Homem') {
            let pesoIdeal = (72.7 * alt) - 58
            setResposta(`O peso ideal para um ${gender} de ${altura}m é ${pesoIdeal.toFixed(2)}Kg.`)
        } else if(gender == 'Mulher') {
            let pesoIdeal = (62.1 * alt) - 44.7
            setResposta(`O peso ideal para uma ${gender} de ${altura}m é ${pesoIdeal.toFixed(2)}Kg.`) 
        }     
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>
                    AP3 - Desenvolvimento de Aplicações Móveis
                </Text>
                <Text style={styles.subtext}>
                    Redes de computadores - UNIGRANRIO
                </Text>
            </View>
            
            <View style={styles.radio_container}>
                <CheckBox
                    title='Homem'
                    center
                    checked={man}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={genderMan}
                />

                <CheckBox
                    title='Mulher'
                    center
                    checkedColor="pink"
                    checked={woman}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={genderWoman}
                />
               
            </View>
                <TextInput
                    style={styles.digite} 
                    placeholder="Digite sua altura 0.00"
                    onChangeText={setAltura} 
                    keyboardType="numeric"
                />
            <View style={styles.box_result}>
                <Text style={styles.text}>Sua altura: {altura}</Text>
                <Button 
                    type='solid'
                    title="Calcular IMC"
                    style={styles.button}
                    onPress={calculaPeso}
                />
                <Text style={styles.text}>{resposta}</Text>
            </View>
        </View>
    );

}
