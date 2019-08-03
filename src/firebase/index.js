import firebase from "firebase";
import { firebaseConfig } from "./config";
import { file } from "@babel/types";

firebase.initializeApp(firebaseConfig);

export default class Firebase {
	registerTitle = title => {
		this.titleRef = firebase
			.firestore()
			.collection("Titles")
			.doc()
			.set(title)
			.then(() => console.log("Saved Succesffully"))
			.catch(error => console.log(error));
	};

	searchTitle = title => {
		const data = firebase
			.firestore()
			.collection("Titles")
			.where("district", "==", title.district)
			.where("county", "==", title.county)
			.where("plotNumber", "==", title.plotNumber)
			.where("blockNumber", "==", title.blockNumber)
			.get()
			.then(querySnapshot => {
				return querySnapshot.forEach(doc => doc.data());
			})
			.catch(error => console.log(error));

		return data;
	};

	transferTitle = title => {
		this.pendingTitleRef = firebase
			.firestore()
			.collection("PendingTransactions")
			.doc()
			.set(title)
			.then(() => console.log("Transfer initiated"))
			.catch(error => console.log(error));
	};

	storeFile = file => {
		const storageRef = firebase.storage().ref();

		const fileRef = storageRef.child(`files/${file.name + Date.now()}`);

		fileRef
			.put(file)
			.then(() => {
				fileRef
					.getDownloadURL()
					.then(url => console.log(url))
					.catch(error => console.log(error));
			})
			.catch(error =>
				console.log("There was an error uploading the file")
			);
	};
}
