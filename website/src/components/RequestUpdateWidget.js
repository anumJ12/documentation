import React from 'react';

export default function RequestUpdateWidget({ children, color }) {
	return (
		<span
			style={{
				backgroundColor: color,
				borderRadius: '2px',
				color: '#fff',
				padding: '0.2rem',
			}}>
			{children}
		</span>
	);
}



export const RequestUpdateWidget = ({ children, color }) => (
	<span
		style={{
			backgroundColor: color,
			borderRadius: '2px',
			color: '#fff',
			padding: '0.2rem',
		}}>
		{children}
	</span>
);