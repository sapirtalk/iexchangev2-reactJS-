import React, { useEffect } from 'react';
import AmountInput from './amountInput/AmountInput';
import CurrencyDrop from './currencydrop/CurrencyDrop';
import './Convertor.css';
import Toggle from '../../Hooks/Toggle';
import axios from 'axios';
import { findPrefix } from './Currencies';

export default function Convertor(props) {
	const getFormVals = props.getFormVals;
	const setFormVals = props.setFormVals;
	const [ isApi, setApi ] = Toggle(false);

	const handleSwitch = () => {
		let temp = getFormVals.to;
		let prefixFrom = findPrefix(temp);
		let prefixTo = findPrefix(getFormVals.from);
		setFormVals.setPrefixFrom(prefixFrom);
		setFormVals.setPrefixTo(prefixTo);
		setFormVals.setTo(getFormVals.from);
		setFormVals.setFrom(temp);
		setApi(isApi);
	};

	const handleAmountChange = (e) => {
		var value = e.target.value;
		if (value !== 0 && getFormVals.exchangeRate !== 0) {
			var calc = value * getFormVals.exchangeRate;
			var rounded = calc.toFixed(3);
			setFormVals.setOutcome(rounded);
		}
		setFormVals.setAmount(value);
	};

	useEffect(
		() => {
			async function getData() {
				const res = await axios.get(
					`https://v6.exchangerate-api.com/v6/65e3ee71401d1a45e1c4fa6c/pair/${getFormVals.from}/${getFormVals.to}`
				);
				setFormVals.setExchangeRate(res.data.conversion_rate);
			}
			getData();
		},
		[ isApi ]
	);
	useEffect(
		() => {
			async function updateBySwitch() {
				var calc = getFormVals.amount * getFormVals.exchangeRate;
				var rounded = calc.toFixed(3);
				setFormVals.setOutcome(rounded);
			}
			updateBySwitch();
		},
		[ getFormVals.exchangeRate ]
	);

	return (
		<div className="Convertor">
			<div className="amount">
				<AmountInput
					setAmount={handleAmountChange}
					prefix={getFormVals.prefixFrom}
					initialPre="$"
					label="Amount:"
					size="small"
				/>
			</div>
			<div className="convertor-grid">
				<div className="from">
					<CurrencyDrop
						label="From:"
						setPrefix={setFormVals.setPrefixFrom}
						setValue={setFormVals.setFrom}
						value={getFormVals.from}
						setApi={setApi}
					/>
				</div>
				<div className="switch">
					<i onClick={handleSwitch} className="fa-solid fa-repeat" />
				</div>
				<div className="to">
					<CurrencyDrop
						label="To:"
						setValue={setFormVals.setTo}
						value={getFormVals.to}
						setApi={setApi}
						setPrefix={setFormVals.setPrefixTo}
					/>
				</div>
				<div className="outcome">
					<p>you will recieve:</p>
					<h1>
						{getFormVals.prefixTo}
						{getFormVals.outcome.toLocaleString(undefined, { maximumFractionDigits: 2 })}
					</h1>
				</div>
				<div className="rateContainer">
					<p className="rateContainer-label">rate:</p>
					<p className="rateContainer-output">
						<span className="rateContainer-outputNum">1</span>
						{getFormVals.prefixFrom} =
						<span className="rateContainer-outputNum">{getFormVals.exchangeRate}</span>
						{getFormVals.prefixTo}
					</p>
				</div>
				<div className="toFormBtn">
					<button>Continue</button>
				</div>
			</div>
		</div>
	);
}
