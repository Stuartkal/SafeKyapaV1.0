import React from 'react'
import {TextField,MenuItem,Select, Button} from '@material-ui/core'
function TransferPage() {
    return (
        <div>
            <div>
                <h3>Peronal/Ownership Data</h3>
                <hr/>
                <form autoComplete="off">
                <TextField
                name="name"
                lable="Name"
                placeholder="Enter Full Name"
                />
                <TextField
                name="nin"
                lable="NIN"
                placeholder="Enter NIN"
                />
                <TextField
                name="email"
                lable="Email"
                placeholder="Enter Email "
                />
                <TextField
                name="phoneNumber"
                lable="Phone Number"
                placeholder="Enter Phone Number"
                />
                <TextField
                name="Incumberace"
                lable="Incumberace"
                placeholder="People who have claim on the land"
                />
                <TextField
                name="date"
                lable="Date of Transfer"
                placeholder="Enter Date of transfer"
                />
                Upload Photo <input type="file" name="file"/>
                <h3>Land/Boundary Data</h3>
                <hr/>
                <TextField
                name="district"
                lable="District"
                placeholder="Enter District"
                />
                <TextField
                name="county"
                lable="county"
                placeholder="Enter county"
                />
                <TextField
                name="blockNumber"
                lable="Block Number"
                placeholder="Enter Block Number "
                />
                <TextField
                name="plot number"
                lable="Plot Number"
                placeholder="Enter Plot Number"
                />
                <TextField
                name="landSize"
                lable="Land Size"
                placeholder="Enter land size"
                />
                Land Type
                <Select>
                    <MenuItem value={10}>Mailo</MenuItem>
                    <MenuItem value={20}>Leased</MenuItem>
                    <MenuItem value={30}>Freehold</MenuItem>
                </Select>
                Upload land survey Map PDF
                <input type="file" name="file"/>
                <Button>Transfer</Button>
                </form>
            </div>
        </div>
    )
}

export default TransferPage
