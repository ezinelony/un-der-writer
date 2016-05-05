import React from "react";
import {Link} from 'react-router';

export class RecordRow extends React.Component {

	render(){
		let data = this.props.record;
		return (
			<tr className={"row"}>
					<td>
						<span> {data.agentName || ""} </span>
					</td>
					<td>
						<span> {data.agentCode || ""} </span>
					</td>
					<td>
						<span> {data.insuredState || ""} </span>
					</td>
					<td>
						<span> {data.policyNumber || ""} </span>
					</td>
					<td>
						<span> {data.quotedCount || ""} </span>
					</td>
					<td>
						<span> {data.quotedDate || ""} </span>
					</td>
					<td>
						<Link  to={`submissions/${data.submissionNumber}`}  params={{submissionNumber: data.submissionNumber }}>
							<span> {data.submissionNumber || ""} </span> </Link>
					</td>
					<td>
						<span> {data.underWriterName || ""} </span>
					</td>

			</tr>
		);
	}
}