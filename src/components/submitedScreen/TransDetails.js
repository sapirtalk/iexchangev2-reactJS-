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
					Amount to exchange :{' '}
					<span>
						{getVals.prefixFrom}
						{getVals.amount}
					</span>
				</p>
				<p>
					Current market exchange rate: <span>{getVals.PrefixTo}1</span> ={' '}
					<span>
						{getVals.prefixFrom}
						{getVals.exchangeRate}
					</span>
				</p>
				<p>
					You will recieve in <span>{getVals.to}</span> : <span>{getVals.PrefixTo}</span>
					{getVals.outcome}
				</p>
				<h3>
					Our bank details in <span>{getVals.accCountry}</span>:
				</h3>
				<p>
					AccountNo: <span>{getVals.bankDetails.AccountNo}</span>
				</p>
				<p>
					BranchNo: <span>{getVals.bankDetails.BranchNo}</span>
				</p>
				<p>
					BankNo: <span>{getVals.bankDetails.BankNo}</span>
				</p>
				<p>
					Those details are valid until : <span>{nextDay}</span>{' '}
				</p>
				<p>After the date mentiond these details wont be valid due to rate change in the market</p>
			</div>
		</div>
	);
};
