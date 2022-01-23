import { Modal, Button, Text } from "native-base";
import { useState, useEffect } from "react/cjs/react.development";

export default function CourseSelectModal({showModal, setShowModal, courseName, courseNumber}) {
	const findSections = async ({ courseName, courseNumber }) => {
		const response = await fetch("https://api.purdue.io/odata/Courses?$expand=Classes($filter=Term/Code eq '202220';$expand=Sections($expand=Meetings))&$filter=Subject/Abbreviation eq '" + courseName + "' and Number eq '" + courseNumber + "'");
		const courses = await response.json();

		console.log(courses);
	}

	useEffect(() => {
		if(showModal === true) {
			findSections(courseName, courseNumber);
		}
	}, [showModal])

	return (
		<Modal isOpen={showModal}
			_backdrop={{
				_dark: {
				bg: "coolGray.800",
				},
				bg: "warmGray.50",
			}}>
			<Modal.Content>
				<Modal.Header>Class Period</Modal.Header>
				<Modal.Body>
					<Text>test</Text>
				</Modal.Body>
				<Modal.Footer>
					<Button.Group space={2}>
					<Button
						variant="ghost"
						onPress={() => {
						setShowModal(false)
						}}
					>
						Cancel
					</Button>
					<Button
						onPress={() => {
						setShowModal(false)
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
