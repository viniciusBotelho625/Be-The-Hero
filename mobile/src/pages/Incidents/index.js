import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assents/logo.png';

import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();
    
    function navigateToDetail() {
        navigation.navigate('Detail');
    }
        
    return(
        <View style={styles.container}> 
           <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de<Text style={styles.TextBold}> O casos</Text>.
                </Text>
            </View> 

            <Text style={styles.title}>Bem vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                data={[1, 2, 3]}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG</Text>
                        <Text style={styles.incidentValeu}>CAMP</Text>
                        
                        <Text style={styles.incidentProperty}>CASO</Text>
                        <Text style={styles.incidentValeu}>Cadelinha atropelada</Text>

                        <Text style={styles.incidentProperty}>VALOR</Text>
                        <Text style={styles.incidentValeu}>R$ 120,00</Text>

                        <TouchableOpacity style={styles.detailButton} 
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}