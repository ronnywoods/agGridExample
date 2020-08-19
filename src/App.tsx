import React from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "./App.css";

import { CellComponent } from "./CellComponent";
import { getRandomRows } from "./rowData";

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.getRowNodeId = this.getRowNodeId.bind(this);
		this.state = {
			columnDefs: [
				{
					headerName: "Make",
					field: "make",
					cellRenderer: "cellComponent",
				},
				{
					headerName: "Model",
					field: "model",
					cellRenderer: "cellComponent",
				},
				{
					headerName: "Price",
					field: "price",
					cellRenderer: "cellComponent",
				},
			],
			rowData: [],
		};
	}
	getRowNodeId = (data: any) => data.id;
	render() {
		return (
			<div
				className="ag-theme-balham"
				style={{
					height: "500px",
					width: "600px",
				}}
			>
				<button
					onClick={() => {
						const newData = getRandomRows();
						this.setState({ rowData: newData });
					}}
				>
					Get New Data
				</button>
				<AgGridReact
					columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}
					frameworkComponents={{ cellComponent: CellComponent }}
					deltaRowDataMode
					getRowNodeId={this.getRowNodeId}
					suppressHorizontalScroll
					suppressContextMenu
					animateRows
					colResizeDefault="shift"
				></AgGridReact>
			</div>
		);
	}
}

export default App;
