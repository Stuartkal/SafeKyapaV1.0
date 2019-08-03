import firebase from "firebase";
import { firebaseConfig } from "./config";
import { file } from "@babel/types";

firebase.initializeApp(firebaseConfig);

export default class Firebase {
	registerTitle = title => {
		return firebase
			.firestore()
			.collection("Titles")
			.doc()
			.set(title)
			.then(() => console.log("Saved Succesffully"))
			.catch(error => console.log(error));
	};

	searchTitle = async title => {
		const data = await firebase
			.firestore()
			.collection("Titles")
			.where("district", "==", title.district)
			.where("county", "==", title.county)
			.where("plotNumber", "==", title.plotNumber)
			.where("blockNumber", "==", title.blockNumber)
			.get()
			.then(querySnapshot => {
				return querySnapshot;
			})
			.catch(error => console.log(error));

		return data;
	};

	transferTitle = async title => {
		const titleToBeTransferred = await this.searchTitle({
			district: title.district,
			county: title.county,
			plotNumber: title.plotNumber,
			blockNumber: title.blockNumber,
		});

		if (titleToBeTransferred) {
			titleToBeTransferred.forEach(doc => {
				return firebase
					.firestore()
					.collection("PendingTransactions")
					.doc()
					.set({ ...title, orginalTitleId: doc.id })
					.then(() => console.log("Transfer initiated"))
					.catch(error => console.log(error));
			});
		}
	};

	storeFile = async file => {
		const storageRef = firebase.storage().ref();

		const fileRef = storageRef.child(`files/${file.name + Date.now()}`);

		const path = await fileRef
			.put(file)
			.then(() => {
				return fileRef
					.getDownloadURL()
					.then(url => url)
					.catch(error => console.log(error));
			})
			.catch(error =>
				console.log("There was an error uploading the file")
			);

		return path;
	};
}
