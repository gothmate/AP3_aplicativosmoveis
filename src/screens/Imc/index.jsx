import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { CheckBox, Button } from 'react-native-elements';
import { styles } from './styles';

export function Imc() {
	const [altura, setAltura] = useState(0.0);
	const [peso, setPeso] = useState(0.0);
	const [man, setMan] = useState(true);
	const [woman, setWoman] = useState(false);
	const [gender, setGender] = useState('');
	const [resposta, setResposta] = useState('O seu IMC é...');

	const genderMan = () => {
		setMan(true);
		setWoman(false);
		setGender('Homem');
	};

	const genderWoman = () => {
		setMan(false);
		setWoman(true);
		setGender('Mulher');
	};

	const calculaImc = () => {
		let alt = altura;
		let pes = peso;
		alt = alt.replace(',', '.');
		alt = parseFloat(alt);
		pes = pes.replace(',', '.');
		pes = parseFloat(pes);
		let imc = (pes / (alt ^ 2)).toFixed(1);

		if (gender == 'Homem') {
			if (imc < 20.7) {
				setResposta(`Seu IMC é ${imc}. (Abaixo do peso)`);
			} else if (imc >= 20.7 && imc < 26.4) {
				setResposta(`Seu IMC é ${imc}. (Peso normal)`);
			} else if (imc >= 26.4 && imc < 27.8) {
				setResposta(`Seu IMC é ${imc}. (Sobrepeso)`);
			} else if (imc >= 27.8 && imc < 31.1) {
				setResposta(`Seu IMC é ${imc}. (Acima do peso ideal)`);
			} else if (imc >= 31.1) {
				setResposta(`Seu IMC é ${imc}. (Obeso)`);
			} else if (imc >= 40) {
				setResposta(`Seu IMC é ${imc}. (Obesidade mórbida)`);
			}
		} else if (gender == 'Mulher') {
			if (imc < 19.1) {
				setResposta(`Seu IMC é ${imc}. (Abaixo do peso)`);
			} else if (imc >= 19.1 && imc < 25.8) {
				setResposta(`Seu IMC é ${imc}. (Peso normal)`);
			} else if (imc >= 25.8 && imc < 27.3) {
				setResposta(`Seu IMC é ${imc}. (Sobrepeso)`);
			} else if (imc >= 27.3 && imc < 32.3) {
				setResposta(`Seu IMC é ${imc}. (Acima do peso ideal)`);
			} else if (imc >= 32.3) {
				setResposta(`Seu IMC é ${imc}. (Obesa)`);
			} else if (imc >= 38) {
				setResposta(`Seu IMC é ${imc}. (Obesidade mórbida)`);
			}
		}
	};

	return (
		<View style={styles.container}>
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
					checkedColor='pink'
					checked={woman}
					checkedIcon='dot-circle-o'
					uncheckedIcon='circle-o'
					onPress={genderWoman}
				/>
			</View>
			<TextInput
				style={styles.digite}
				placeholder='Digite sua altura 0.00'
				onChangeText={setAltura}
				keyboardType='numeric'
			/>
			<TextInput
				style={styles.digite}
				placeholder='Digite seu peso 0.00'
				onChangeText={setPeso}
				keyboardType='numeric'
			/>
			<View style={styles.box_result}>
				<Text style={styles.text}>Sua altura: {altura}</Text>
				<Text style={styles.text}>Seu Peso: {peso}</Text>
				<Button
					type='solid'
					title='Calcular IMC'
					style={styles.button}
					onPress={calculaImc}
				/>
				<Text style={styles.text_res}>{resposta}</Text>
			</View>
		</View>
	);
}
