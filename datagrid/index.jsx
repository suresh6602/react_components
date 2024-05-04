/* eslint-disable react/prop-types */
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const CustomDataGrid = ({
	isLoading,
	data,
	cloumn,
	pageSize,
	onPageChange,
	onPageSizeChange,
	rowCount,
}) => {
	return (
		<Paper
			elevation={9}
			style={{
				width: '100%',
				height: '62vh',
				borderRadius: '10px',
			}}
		>
			<DataGrid
				loading={isLoading}
				getRowId={(row) => row._id}
				rows={data}
				columns={cloumn}
				columnHeaderHeight={66}
				rowHeight={45}
				disableColumnFilter={true}
				disableColumnMenu={true}
				disableRowSelectionOnClick={true}
				rowCount={rowCount}
				initialState={{
					...data.initialState,
					pagination: {
						...data.initialState?.pagination,
						paginationModel: { pageSize: pageSize },
					},
				}}
				pageSizeOptions={[5, 10, 20, 50, 100]}
				pagination
				onPaginationModelChange={onPageChange}
				paginationMode="server"
				filterMode="server"
				sortingMode="server"
				onPageSizeChange={onPageSizeChange}
				sx={{
					fontSize: '16px',
					'& .MuiDataGrid-columnHeaderTitle': {
						fontWeight: 'bold',
						color: '#664879',
						fontSize: '18px',
						textTransform: 'capitalize',
					},
				}}
			/>
		</Paper>
	);
};

export default CustomDataGrid;
