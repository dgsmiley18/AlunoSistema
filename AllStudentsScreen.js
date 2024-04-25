import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewStudentsScreen = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const loadStudents = async () => {
      try {

        const studentsData = await AsyncStorage.getItem('students');

        if (studentsData) {
          // Isso irá converter os dados dos alunos para um JSON
          const parsedStudents = JSON.parse(studentsData);
          setStudents(parsedStudents);
        } else {
          console.log('Nenhum aluno cadastrado ainda.');
        }
      } catch (error) {
        console.log('Erro ao carregar os dados dos alunos:', error);
      }
    };

    loadStudents();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {students.length > 0 ? (
        <FlatList
          data={students}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>Nome: {item.name}</Text>
              <Text>Matrícula: {item.id}</Text>
              <Text>Média: {item.grade}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>Nenhum aluno cadastrado ainda.</Text>
      )}
    </View>
  );
};

export default ViewStudentsScreen;
