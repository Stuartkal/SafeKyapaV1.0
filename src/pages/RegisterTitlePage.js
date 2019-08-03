import React, { Component } from "react";
import {
	TextField,
	MenuItem,
	Select,
	Button,
    CircularProgress,
    Grid,
    Paper
} from "@material-ui/core";
import Firebase from "../firebase";
import { thisExpression } from "@babel/types";
import './theme.css'

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
            <center>
					<Grid container spacing={2}>
						<Grid  item xs={6}>
						<Paper style={{padding:'10px'}}>
						<h1>Register Land</h1>
						<div>
				<h3>Personal/Ownership Data</h3>
				<hr className="separator" />
				<form autoComplete="off">
                    
                                <p>
                                    <TextField className="textField"
                                        name="name"
                                        label="Name"
                                        value={this.state.name}
                                        placeholder="Enter Full Name"
                                        onChange={e => this.setState({ name: e.target.value })}
                                    />
                                    </p>
                                   <p>
                                        <TextField className="textField"
                                        name="email"
                                        label="Email"
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                    </p>

                                    <p>
                                    <TextField className="textField"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    placeholder="Enter Phone Number"
                                    value={this.state.phoneNumber}
                                    onChange={e =>
                                        this.setState({ phoneNumber: e.target.value })
                                    }
                                />
                                </p>
                                    <p>
                                    <TextField className="textField"
                                    name="Incumberace"
                                    label="Incumberace"
                                    placeholder="People who have claim on the land(Bank, Relatives)"
                                    value={this.state.incumberace}
                                    onChange={e =>
                                        this.setState({ incumberace: e.target.value })
                                    }
                                />
                                </p>
                                    <p>
                                    <TextField className="textField"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Password for verification"
                                    value={this.state.password}
                                    onChange={e =>
                                        this.setState({ password: e.target.value })
                                    }
                                />
                                </p>
                                    
                                    Upload Photo
                                <input
                                    type="file"
                                    name="profile-photo"
                                    ref={ref => (this.profilePhotoRef = ref)}
                                />

					<h3>Land/Boundary Data</h3>
					<hr className="separator" />
                    <p>
					<TextField className="textField"
						name="district"
						label="District"
						placeholder="Enter District"
						value={this.state.district}
						onChange={e =>
							this.setState({ district: e.target.value })
						}
					/>
                    </p>
                    <p>
					<TextField className="textField"
						name="county"
						label="county"
						placeholder="Enter county"
						value={this.state.county}
						onChange={e =>
							this.setState({ county: e.target.value })
						}
					/>
                    </p>
                    <p>
					<TextField className="textField"
						name="blockNumber"
						label="Block Number"
						placeholder="Enter Block Number "
						value={this.state.blockNumber}
						onChange={e =>
							this.setState({ blockNumber: e.target.value })
						}
					/>
                    </p>
					<TextField className="textField"
						name="plot number"
						label="Plot Number"
						placeholder="Enter Plot Number"
						value={this.state.plotNumber}
						onChange={e =>
							this.setState({ plotNumber: e.target.value })
						}
					/>
                    <p>
					<TextField className="textField"
						name="landSize"
						label="Land Size"
						placeholder="Enter land size"
						value={this.state.landSize}
						onChange={e =>
							this.setState({ landSize: e.target.value })
						}
					/>
                    </p>
                    <p>
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
                    </p>
                    <p>
					Upload land survey Map PDF
					<input
						type="file"
						name="file"
						ref={ref => (this.landTitleRef = ref)}
					/>
                    </p>
				</form>
				<p><Button style={{backgroundColor:'#3CAEA3'}} onClick={this.submitForm}>Submit</Button></p>
			</div>
						</Paper>
						</Grid>
						<Grid item xs={6}>
						<Paper style={{padding:'10px'}}>
								<h1>Transfer Land</h1>
								<div>
				<h3>Personal/Ownership Data</h3>
				<hr className="separator" />
				<form autoComplete="off">
                    
                                <p>
                                    <TextField className="textField"
                                        name="name"
                                        label="Name"
                                        value={this.state.name}
                                        placeholder="Enter Full Name"
                                        onChange={e => this.setState({ name: e.target.value })}
                                    />
                                    </p>
                                   <p>
                                        <TextField className="textField"
                                        name="email"
                                        label="Email"
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                    </p>

                                    <p>
                                    <TextField className="textField"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    placeholder="Enter Phone Number"
                                    value={this.state.phoneNumber}
                                    onChange={e =>
                                        this.setState({ phoneNumber: e.target.value })
                                    }
                                />
                                </p>
                                    <p>
                                    <TextField className="textField"
                                    name="Incumberace"
                                    label="Incumberace"
                                    placeholder="People who have claim on the land(Bank, Relatives)"
                                    value={this.state.incumberace}
                                    onChange={e =>
                                        this.setState({ incumberace: e.target.value })
                                    }
                                />
                                </p>
                                    <p>
                                    <TextField className="textField"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Password for verification"
                                    value={this.state.password}
                                    onChange={e =>
                                        this.setState({ password: e.target.value })
                                    }
                                />
                                </p>
                                    
                                    Upload Photo
                                <input
                                    type="file"
                                    name="profile-photo"
                                    ref={ref => (this.profilePhotoRef = ref)}
                                />

					<h3>Land/Boundary Data</h3>
					<hr className="separator" />
                    <p>
					<TextField className="textField"
						name="district"
						label="District"
						placeholder="Enter District"
						value={this.state.district}
						onChange={e =>
							this.setState({ district: e.target.value })
						}
					/>
                    </p>
                    <p>
					<TextField className="textField"
						name="county"
						label="county"
						placeholder="Enter county"
						value={this.state.county}
						onChange={e =>
							this.setState({ county: e.target.value })
						}
					/>
                    </p>
                    <p>
					<TextField className="textField"
						name="blockNumber"
						label="Block Number"
						placeholder="Enter Block Number "
						value={this.state.blockNumber}
						onChange={e =>
							this.setState({ blockNumber: e.target.value })
						}
					/>
                    </p>
					<TextField className="textField"
						name="plot number"
						label="Plot Number"
						placeholder="Enter Plot Number"
						value={this.state.plotNumber}
						onChange={e =>
							this.setState({ plotNumber: e.target.value })
						}
					/>
                    <p>
					<TextField className="textField"
						name="landSize"
						label="Land Size"
						placeholder="Enter land size"
						value={this.state.landSize}
						onChange={e =>
							this.setState({ landSize: e.target.value })
						}
					/>
                    </p>
                    <p>
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
                    </p>
                    <p>
					Upload land survey Map PDF
					<input
						type="file"
						name="file"
						ref={ref => (this.landTitleRef = ref)}
					/>
                    </p>
				</form>
				<p><Button style={{backgroundColor:'#3CAEA3'}} onClick={this.submitForm}>Submit</Button></p>
			</div>
						</Paper>
						</Grid>
					</Grid>
			
            </center>
		);
	}
}

export default RegisterTitlePage;
