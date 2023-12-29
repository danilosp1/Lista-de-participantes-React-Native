import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import styles from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');
    const data = new Date();

    function handleParticipantAdd() {
        if(participants.includes(participantName)){
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
        } else if (participantName.trim() === ""){
            return Alert.alert("Não foi digitado um participante.")
        }

        setParticipants([...participants, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name));
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Lista de participantes
            </Text>

            <Text style={styles.eventDate}>
                {data.getDate()}/{data.getMonth()+1}/{data.getFullYear()}
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={e => setParticipantName(e)}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Renderiza os components apenas quando eles vão aparecer na tela */}
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant name={item} onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />

            {/* Renderiza todos os componentes de uma vez */}
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {participants.map((participant, index) => {
                    return (
                        <Participant key={index} name={participant} onRemove={() => handleParticipantRemove(participant)} />
                    )
                })}
            </ScrollView> */}
        </View>
    );
}
