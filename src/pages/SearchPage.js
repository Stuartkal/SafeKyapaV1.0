import React, { Component } from "react";
import { Paper, Button, TextField } from "@material-ui/core";
import Firebase from "../firebase";
import SearchIcon from "@material-ui/icons/Search";

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
				<Paper>
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
					<Button onClick={this.searchLandTitle}>Search Title</Button>
				</Paper>
			</div>
		);
	}
}

export default SearchPage;
