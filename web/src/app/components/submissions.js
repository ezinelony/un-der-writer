import React from "react";
import {RecordRow} from './record-row';

export class Submissions extends React.Component {

	constructor(props){
		super(props);
		this.state = props;
	}
	
	getChildren() {
		let len, r = [], i = 0;
		let data  = this.state.records || this.props.records || [];

		for(i, len = data.length; i < len; i++){
			r.push(<RecordRow record={data[i]} key={`row_${i}`}/>);
		}
		debugger;
		return r;
	}

	render(){
		return (
			<table className={"submissions"}>
				<tbody>
					<tr><th>Agent Name</th>
						<th>Agent Code</th>
						<th>Insured State</th>
						<th>Policy Number</th>
						<th>Quoted Count</th>
						<th>Quoted Date</th>
						<th>Submission Number </th>
						<th>Under Writer Name</th>
					</tr>
					{this.getChildren()}
				</tbody>
			</table>
		);
	}
}