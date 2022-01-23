import { View, Text } from "native-base";
import { TouchableWithoutFeedback } from "react-native";

export default function DayOfWeekCheck({value, onChange, character}) {
	return(
		<TouchableWithoutFeedback onPress={() => { onChange(!value) }}>
			<View style={{ justifyContent: 'center', alignItems: 'center', padding: 1, backgroundColor: value ? '#454545' : 'black', width: 40, height: 40, borderRadius: 20 }}>
				<Text style={{ color: 'white' }}>{character}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}