// components/dashboard/Header.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Avatar, Text, Menu } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserTypeLabel = (type) => {
    switch (type) {
      case 'sindico': return 'Síndico';
      case 'porteiro': return 'Porteiro';
      case 'morador': return 'Morador';
      default: return 'Usuário';
    }
};

const Header = ({ user, setUser }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleLogout = async () => {
    closeMenu();
    await AsyncStorage.removeItem('userData');
    setUser(null);
  };
  
  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>CW</Text>
        </View>
        <View>
          <Text variant="titleLarge" style={styles.appName}>CondoWay</Text>
          <Text variant="bodySmall" style={styles.condoName}>{user.condominio}</Text>
        </View>
      </View>

      <View style={styles.userContainer}>
        <View style={styles.userInfo}>
            <Text variant="labelLarge" style={styles.userName}>{user.nome}</Text>
            <Text variant="bodySmall" style={styles.userRole}>
                {getUserTypeLabel(user.user_tipo)} • {user.bloco}-{user.apartamento}
            </Text>
        </View>

        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Avatar.Text 
                size={40} 
                label={user.nome.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)} 
                style={styles.avatar}
                onTouchEnd={openMenu}
            />
          }>
          <Menu.Item onPress={handleLogout} title="Sair" leadingIcon="logout" />
        </Menu>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 4, // Sombra no Android
        shadowOpacity: 0.1, // Sombra no iOS
        shadowRadius: 5,
        shadowOffset: { height: 2, width: 0 },
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#4a90e2',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    logoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    appName: {
        fontWeight: 'bold',
    },
    condoName: {
        color: 'gray',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
    userInfo: {
        alignItems: 'flex-end',
        marginRight: 10,
    },
    userName: {
        fontWeight: 'bold',
    },
    userRole: {
        color: 'gray',
    },
    avatar: {
        backgroundColor: '#d6eaff',
    },
});

export default Header;