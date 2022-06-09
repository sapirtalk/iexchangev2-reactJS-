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
	const [ error, setError ] = Toggle(false);

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

	const handleContinue = () => {
		if (getFormVals.amount < 100 && getFormVals.from === 'USD') {
			if (!error) setError();
			return;
		} else if (getFormVals.outcome < 100 && getFormVals.from === 'ILS') {
			if (!error) setError();
			return;
		}
		if (error) setError();
		props.continue();
	};

	const handleAmountChange = (e) => {
		var value = e.target.value;
		if (value !== 0 && getFormVals.exchangeRate !== 0) {
			var calc = value * getFormVals.exchangeRate;
			var fixed = Number(calc.toFixed(3));
			setFormVals.setOutcome(fixed);
		}
		setFormVals.setAmount(Number(value));
	};

	useEffect(
		() => {
			async function getData() {
				const to = getFormVals.to;
				const from = getFormVals.from;
				const res = await axios.get(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}&places=3`);
				const dataKeys = Object.keys(res.data.rates);
				const newData = dataKeys.map((eachId) => {
					return res.data.rates[eachId];
				});
				setFormVals.setExchangeRate(newData[0]);
			}
			getData();
		},
		[ isApi ]
	);
	useEffect(
		() => {
			async function updateBySwitch() {
				var calc = getFormVals.amount * getFormVals.exchangeRate;
				var fixed = Number(calc.toFixed(3));
				setFormVals.setOutcome(fixed);
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
				<div className="convertor-top-row">
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
				</div>
				<div className="convertor-bot-row">
					<div className="outcome">
						<p>you will recieve:</p>
						<h1 className="outcome-number">
							{getFormVals.prefixTo}
							{getFormVals.outcome.toLocaleString(undefined, { maximumFractionDigits: 3 })}
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
				</div>

				{error ? (
					<p style={{ color: 'red', fontSize: '13px' }}>Sorry! we can only exchange $100 or more</p>
				) : (
					<p />
				)}
				<div className="toFormBtn">
					<button className="continue" onClick={handleContinue}>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
}
