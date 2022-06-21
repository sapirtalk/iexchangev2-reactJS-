import React from 'react';
import './TransDetails.css';
export const TransDetails = (props) => {
	const getVals = props.getVals;

	var nextDay = new Date();
	nextDay.setHours(nextDay.getHours() + 23);
	nextDay = nextDay.toString();

	return (
		<div className="transDetails">
			<h3> Transaction Details:</h3>
			<div className="transDetails-body">
				<p>
					Amount to exchange : {getVals.prefixFrom}
					{getVals.amount}
				</p>
				<p>
					Current market exchange rate: {getVals.PrefixTo}1 = {getVals.prefixFrom}
					{getVals.exchangeRate}
				</p>
				<p>
					You will recieve in {getVals.to} : {getVals.PrefixTo}
					{getVals.outcome}
				</p>
				<h3>Our bank details in {getVals.accCountry}:</h3>
				<p>AccountNo: {getVals.bankDetails.AccountNo}</p>
				<p>BranchNo: {getVals.bankDetails.BranchNo}</p>
				<p>BankNo: {getVals.bankDetails.BankNo}</p>
				<p>Those details are valid until : {nextDay} </p>
				<p>After the date mentiond those details wont be valid due to rate change in the market</p>
			</div>
		</div>
	);
};
