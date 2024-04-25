import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddStudentScreen = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [grade, setGrade] = useState('');

  const handleAddStudent = async () => {
    try {
      if (!name || !id || !grade) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        return;
      }

      // Carrega os alunos existentes para não colocar um cima do outro
      const existingStudents = await AsyncStorage.getItem('students');
      const parsedStudents = existingStudents ? JSON.parse(existingStudents) : [];

      // Adiciona o novo aluno à lista e depois atualiza
      const newStudent = { name, id, grade };
      const updatedStudents = [...parsedStudents, newStudent];

      await AsyncStorage.setItem('students', JSON.stringify(updatedStudents));

      Alert.alert('Sucesso', 'Aluno cadastrado com sucesso.');

      // Vai limpar os inputs pro usuário poder colocar novas informações
      setName('');
      setId('');
      setGrade('');
    } catch (error) {
      console.log('Erro ao cadastrar aluno:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o aluno.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome:</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        style={{ borderWidth: 1, padding: 5, marginBottom: 10, width: 200 }}
      />
      <Text>Matrícula:</Text>
      <TextInput
        value={id}
        onChangeText={text => setId(text)}
        style={{ borderWidth: 1, padding: 5, marginBottom: 10, width: 200 }}
      />
      <Text>Média:</Text>
      <TextInput
        value={grade}
        onChangeText={text => setGrade(text)}
        style={{ borderWidth: 1, padding: 5, marginBottom: 10, width: 200 }}
      />
      <Button title="Adicionar Aluno" onPress={handleAddStudent} />
    </View>
  );
};

export default AddStudentScreen;
