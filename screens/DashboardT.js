// screens/DashboardT.js
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Importando todos os componentes e telas
import MoradorDashboard from '../components/dashboard/MoradorDashboard';
import SindicoDashboardT from '../components/dashboard/SindicoDashboardT';
import PorteiroDashboardT from '../components/dashboard/PorteiroDashboardT'; // <-- 1. Importe o dashboard do porteiro
import Header from '../components/dashboard/Header';
import AmbientesT from './AmbientesT';
import MinhasReservasT from './MinhasReservasT';
import ComunicadosT from './ComunicadosT';
import CadastroVisitantesT from './CadastroVisitantesT';
import MinhaContaT from './MinhaContaT';
import ConfiguracoesT from './ConfiguracoesT';
import GestaoAmbientesT from './sindico/GestaoAmbientesT';
import GestaoMoradoresT from './sindico/GestaoMoradoresT';
import TodasReservasT from './sindico/TodasReservasT';

const Tab = createBottomTabNavigator();

const DashboardT = ({ user, setUser }) => {
  // Abas do MORADOR
  const moradorTabs = [
    { name: "Início", component: MoradorDashboard, icon: "home" },
    { name: "Ambientes", component: AmbientesT, icon: "swim" },
    { name: "Visitantes", component: CadastroVisitantesT, icon: "account-multiple-plus" },
    { name: "Reservas", component: MinhasReservasT, icon: "calendar-check" },
    { name: "Conta", component: MinhaContaT, icon: "account-circle" },
    { name: "Config", component: ConfiguracoesT, icon: "cog" },
  ];

  // Abas do SÍNDICO
  const sindicoTabs = [
    { name: "Início", component: SindicoDashboardT, icon: "view-dashboard" },
    { name: "Ambientes", component: GestaoAmbientesT, icon: "office-building-cog" },
    { name: "Moradores", component: GestaoMoradoresT, icon: "account-group" },
    { name: "Reservas", component: TodasReservasT, icon: "calendar-multiselect" },
    { name: "Comunicados", component: ComunicadosT, icon: "bullhorn" },
    { name: "Conta", component: MinhaContaT, icon: "account-circle" },
  ];
  
  // 2. Crie a lista de abas do PORTEIRO
  const porteiroTabs = [
      { name: "Início", component: PorteiroDashboardT, icon: "cctv" },
      { name: "Comunicados", component: ComunicadosT, icon: "bullhorn-outline" },
      { name: "Conta", component: MinhaContaT, icon: "account-circle" },
  ];

  // 3. Atualize a lógica para escolher a lista de abas correta
  const getTabs = () => {
      switch(user.user_tipo) {
          case 'sindico': return sindicoTabs;
          case 'porteiro': return porteiroTabs;
          default: return moradorTabs;
      }
  }

  const tabsToShow = getTabs();

  return (
    <View style={{ flex: 1 }}>
      <Header user={user} setUser={setUser} />
      <Tab.Navigator
        initialRouteName="Início"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#4a90e2',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        {tabsToShow.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            initialParams={{ user: user }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name={tab.icon} color={color} size={size} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default DashboardT;