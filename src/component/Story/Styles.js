import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({

    viewStory: {
        height: 140,
        width: '100%',
        backgroundColor: 'white',
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        padding: 5,
    },

    story: {
        height: '100%',
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    storyIcon: {
        width: 95,
        height: '72%',
        backgroundColor: 'gray',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#9966ff',
    },
    icons: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    
    },
    storyContent: {
        marginTop: 2
    },
    content: {
        fontSize: 17,
        fontWeight: '500',
        color: 'gray'
    }
});

export default Styles;