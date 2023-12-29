import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        gap: 12,
        marginTop: 36,
        marginBottom: 42
    },
    input: {
        backgroundColor: '#1F1E25',
        flex: 1,
        height: 56,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 22,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31CF67",
        alignItems: 'center',
        justifyContent: 'center'
    },
    listEmptyText: {
        color: "#FFF",
        fontSize: 16,
        textAlign: 'center'
    }
});

export default styles;
