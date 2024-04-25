import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AddStudentScreen from './AddStudentScreen';
import AllStudentsScreen from './AllStudentsScreen';
import { Button } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddStudent">
        <Stack.Screen
          name="AddStudent"
          component={AddStudentScreen}
          options={({ navigation }) => ({
            title: 'Cadastro de Alunos',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('AllStudents')}
                title="Ver Notas"
              />
            ),
          })}
        />
        <Stack.Screen
          name="AllStudents"
          component={AllStudentsScreen}
          options={({ navigation }) => ({
            title: 'Todos os Alunos',
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate('AddStudent')}
                title="Cadastrar"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
