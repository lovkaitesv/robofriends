import React from 'react';

const Scroll = (prors) => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
		`{prors.children}
		</div>
	)
};

export default Scroll;