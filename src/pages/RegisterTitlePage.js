import React, { Component } from "react";
import {
	TextField,
	MenuItem,
	Select,
	Button,
	CircularProgress,
} from "@material-ui/core";
import Firebase from "../firebase";
import { thisExpression } from "@babel/types";

export class RegisterTitlePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			phoneNumber: "",
			incumberace: "",
			photoUrl: null,
			landTitleFileUrl: null,
			district: "",
			county: "",
			blockNumber: "",
			plotNumber: "",
			landSize: "",
			password: "",
			landType: "",
		};
		this.firebase = new Firebase();
	}

	submitForm = e => {
		e.preventDefault();

		this.firebase
			.storeFile(this.profilePhotoRef.files[0])
			.then(photoUrl => {
				this.setState({ photoUrl });
				return this.firebase
					.storeFile(this.landTitleRef.files[0])
					.then(landTitleFileUrl => {
						this.setState({ landTitleFileUrl });

						return this.firebase.registerTitle(this.state);
					});
			});
	};

	render() {
		return (
			<div>
				<h3>Bio Data</h3>
				<hr />
				<form autoComplete="off">
					<TextField
						name="name"
						lable="Name"
						value={this.state.name}
						placeholder="Enter Full Name"
						onChange={e => this.setState({ name: e.target.value })}
					/>
					<TextField
						name="email"
						lable="Email"
						placeholder="Enter Email"
						value={this.state.email}
						onChange={e => this.setState({ email: e.target.value })}
					/>
					<TextField
						name="phoneNumber"
						lable="Phone Number"
						placeholder="Enter Ponhe Number"
						value={this.state.phoneNumber}
						onChange={e =>
							this.setState({ phoneNumber: e.target.value })
						}
					/>
					<TextField
						name="Incumberace"
						lable="Incumberace"
						placeholder="People who have claim on the land(Bank, Relatives)"
						value={this.state.incumberace}
						onChange={e =>
							this.setState({ incumberace: e.target.value })
						}
					/>
					<TextField
						name="password"
						lable="Password"
						type="password"
						placeholder="Password for verification"
						value={this.state.password}
						onChange={e =>
							this.setState({ password: e.target.value })
						}
					/>
					Upload Photo
					<input
						type="file"
						name="profile-photo"
						ref={ref => (this.profilePhotoRef = ref)}
					/>
					<h3>BoundaryData</h3>
					<hr />
					<TextField
						name="district"
						lable="District"
						placeholder="Enter District"
						value={this.state.district}
						onChange={e =>
							this.setState({ district: e.target.value })
						}
					/>
					<TextField
						name="county"
						lable="county"
						placeholder="Enter county"
						value={this.state.county}
						onChange={e =>
							this.setState({ county: e.target.value })
						}
					/>
					<TextField
						name="blockNumber"
						lable="Block Number"
						placeholder="Enter Block Number "
						value={this.state.blockNumber}
						onChange={e =>
							this.setState({ blockNumber: e.target.value })
						}
					/>
					<TextField
						name="plot number"
						lable="Plot Number"
						placeholder="Enter Plot Number"
						value={this.state.plotNumber}
						onChange={e =>
							this.setState({ plotNumber: e.target.value })
						}
					/>
					<TextField
						name="landSize"
						lable="Land Size"
						placeholder="Enter land size"
						value={this.state.landSize}
						onChange={e =>
							this.setState({ landSize: e.target.value })
						}
					/>
					Land Type
					<Select
						value={this.state.landType}
						onChange={e =>
							this.setState({ landType: e.target.value })
						}>
						<MenuItem value="Mailo Land">Mailo</MenuItem>
						<MenuItem value="Leased Land">Leased</MenuItem>
						<MenuItem value="Freehold Land">Freehold</MenuItem>
					</Select>
					Upload land survey Map PDF
					<input
						type="file"
						name="file"
						ref={ref => (this.landTitleRef = ref)}
					/>
				</form>
				<Button onClick={this.submitForm}>Submit</Button>
			</div>
		);
	}
}

export default RegisterTitlePage;
