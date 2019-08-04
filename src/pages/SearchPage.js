import React, { Component } from "react";
import { Paper, Button, TextField,Grid, Typography } from "@material-ui/core";
import Firebase from "../firebase";
import Maps from './Maps'

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blockNumber: "",
			plotNumber: "",
			county: "",
			district: "",
			data: [],
		};
		this.firebase = new Firebase();
	}
	searchLandTitle = async e => {
		await this.firebase.searchTitle(this.state).then(data => {
			data.forEach(doc => {
				this.setState({ data: [...this.state.data, doc.data()] });
			});
		});

		console.log(this.state.data);
	};

	render() {
		return (
			<div>
				<Grid container spacing={2}>
					<Grid align="center"  item xs={4}>
					<Paper style={{padding:'10px', marginBottom:'10px'}}>
						<h3>Search for Title</h3>
					<p>
					<TextField
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
					<TextField
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
					<TextField
						name="blockNumber"
						label="Block Number"
						placeholder="Enter Block Number "
						value={this.state.blockNumber}
						onChange={e =>
							this.setState({ blockNumber: e.target.value })
						}
					/>
					</p>

					<p>
					<TextField
						name="plot number"
						label="Plot Number"
						placeholder="Enter Plot Number"
						value={this.state.plotNumber}
						onChange={e =>
							this.setState({ plotNumber: e.target.value })
						}
					/>
					</p>
					<p>
					<Button style={{backgroundColor:'#3CAEA3'}} onClick={this.searchLandTitle}>Search Title</Button>
					</p>
					
				</Paper>
				<Paper style={{padding:'10px'}}>
						<h3>Title Details</h3>
						<p>
							<h4>Name: </h4>
						<Typography variant="h6" gutterBottom>
							....data
						</Typography>
						</p>
						<p>
							<h4>Email: </h4>
						<Typography variant="h6" gutterBottom>
							....
						</Typography>
						</p>
						<p>
							<h4>Phone Number: </h4>
						<Typography variant="h6" gutterBottom>
							....
						</Typography>
						</p>
						<p>
							<h4>Encumbrance: </h4>
						<Typography variant="h6" gutterBottom>
							....
						</Typography>
						</p>
						<p>
							<h4>District: </h4>
						<Typography variant="h6" gutterBottom>
							....
						</Typography>
						</p>
						<p>
							<h4>County: </h4>
						<Typography variant="h6" gutterBottom>
							....
						</Typography>
						</p>
						<p>
							<h4>Block Number: </h4>
						<Typography variant="h6" gutterBottom>
							....
						</Typography>
						</p>
						<p>
							<h4>Plot Number: </h4>
						<Typography variant="h6" gutterBottom>
							....
						</Typography>
						</p>
						<p>
							<h4>Land Size: </h4>
						<Typography variant="h6" gutterBottom>
							....
						</Typography>
						</p>
						<p>
							<h4>Land Type: </h4>
						<Typography variant="h6" gutterBottom>
							....
						</Typography>
						</p>
						
				</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper>
							<Maps/>
						</Paper>
					</Grid>
				</Grid>
				
			</div>
		);
	}
}

export default SearchPage;
