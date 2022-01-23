import { Modal, Button, Text, View, Center, Box} from "native-base";
import { useState, useEffect } from "react/cjs/react.development";
import { DayOfWeekCheck } from ".";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert } from 'react-native'
import { AsyncStorage } from 'react-native';

export default function CourseSelectModal({showModal, setShowModal, courseName, courseNumber}) {
	let [sunday, setSunday] = useState(false);
	let [monday, setMonday] = useState(false);
	let [tuesday, setTuesday] = useState(false);
	let [wednesday, setWednesday] = useState(false);
	let [thursday, setThursday] = useState(false);
	let [friday, setFriday] = useState(false);
	let [saturday, setSaturday] = useState(false);

	const [time, setTime] = useState(new Date());

	const createAlert = () =>
		Alert.alert(
		"Error",
		"Please select at least one day of the week",
		[
			{ text: "OK" }
		]
		);


	const submit = async () => {
		datesSelected = []

		if(sunday) {
			datesSelected += "Sunday"
		}
		if(monday) {
			datesSelected += "Monday"
		}
		if(tuesday) {
			datesSelected += "Tuesday"
		}
		if(wednesday) {
			datesSelected += "Wednesday"
		}
		if(thursday) {
			datesSelected += "Thursday"
		}
		if(friday) {
			datesSelected += "Friday"
		}
		if(saturday) {
			datesSelected += "Saturday"
		}

		if(datesSelected.length === 0) {
			createAlert();
		}

		await AsyncStorage.setItem(courseName + courseNumber, datesSelected.toString() + ";" + time.getTime());

		setShowModal(false);
	}

	return (
		<Modal isOpen={showModal}
			size="xl"
			_backdrop={{
				bg: "warmGray.500",
			}}>
			<Modal.Content>
				<Modal.Header>Class Period</Modal.Header>
				<Modal.Body>
					<View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch', marginBottom: 15}}>
						<DayOfWeekCheck value={sunday} onChange={setSunday} character={'S'} />
						<DayOfWeekCheck value={monday} onChange={setMonday} character={'M'} />
						<DayOfWeekCheck value={tuesday} onChange={setTuesday} character={'T'} />
						<DayOfWeekCheck value={wednesday} onChange={setWednesday} character={'W'} />
						<DayOfWeekCheck value={thursday} onChange={setThursday} character={'R'} />
						<DayOfWeekCheck value={friday} onChange={setFriday} character={'F'} />
						<DayOfWeekCheck value={saturday} onChange={setSaturday} character={'S'} />
					</View>
					<Box mx="32%">
						<DateTimePicker
							testID="dateTimePicker"
							value={time}
							mode={'time'}
							is24Hour={false}
							style={{}}
							onChange={(event, selectedTime) => {setTime(selectedTime || time)}}
							/>
					</Box>
					
				</Modal.Body>
				<Modal.Footer>
					<Button.Group space={2}>
					<Button
						variant="ghost"
						_text={{
							color: 'dark.100'
						}}
						onPress={() => {
						setShowModal(false)
						}}
					>
						Cancel
					</Button>
					<Button
						bgColor="dark.100"
						_hover={{
							bg: 'dark.200'
						}}
						_pressed={{
							bg: 'dark.200',
							borderRadius: '4'
						}}
						onPress={() => {
							submit()
						}}
					>
						Save
					</Button>
					</Button.Group>
				</Modal.Footer>
			</Modal.Content>
		</Modal>
	);
}
