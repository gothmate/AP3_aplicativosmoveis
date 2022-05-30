import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      paddingBottom: 40,
      paddingInline: 40,
      flex: 1,
      backgroundColor: '#131a30',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        margin: 10,
    },
    text_res: {
        color: '#fff',
        marginTop: 10,
        fontSize: 30,
        marginBottom: 30,
    },
    subtext: {
        fontSize: 14,
        marginBottom: 30,
        color: '#c4c4c4',
    },
    digite: {
        width: '80%',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#c4c4c4',
        borderRadius: 3,
        margin: 10,
        paddingLeft: 10,
    },
    button: {
        width: '80%',
        borderRadius: 3,
        marginTop: 30,
    },
    radio_container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        margin: 15,
    },
    box_result: {
        flex: 1,
        width: '80%',
    }
  });