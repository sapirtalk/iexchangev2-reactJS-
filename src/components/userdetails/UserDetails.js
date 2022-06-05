import React from 'react';
import { TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import CountryDrop from './countryDrop/CountryDrop';
import './UserDetails.css';
import ReCAPTCHA from 'react-google-recaptcha';

export default function UserDetails(props) {
	const getVals = props.getVals;
	const setVals = props.setVals;

	return (
		<div>
			<div className="form">
				<div className="names">
					<span>
						<TextField
							required
							id="outlined-required"
							label="First Name:"
							size="small"
							sx={{ width: 160 }}
							onChange={setVals.setFirstName}
						/>
					</span>
					<span>
						<TextField
							required
							id="outlined-required"
							label="Last Name:"
							size="small"
							sx={{ width: 160 }}
							onChange={setVals.setLastName}
						/>
					</span>
				</div>
				<div className="email">
					<TextField
						onChange={setVals.setEmail}
						required
						id="outlined-required"
						label="Email:"
						size="small"
						sx={{ width: 250 }}
					/>
				</div>
				<div className="mobile">
					<TextField
						onChange={setVals.setMobile}
						required
						id="outlined-required"
						label="Phone Number:"
						size="small"
						sx={{ width: 250 }}
						type="number"
					/>
				</div>
				<div className="countryDrop">
					<CountryDrop
						value={getVals.accCountry}
						label="Where is your bank?:"
						handleChange={setVals.setAccCountry}
						helperText="so you can use your local bank with no extra fee"
					/>
					<CountryDrop
						value={getVals.toCountry}
						label="Heading to:"
						handleChange={setVals.setToCountry}
						helperText="what is your destination"
					/>
				</div>
				<div className="file-uploader">
					<p>*ID/PASSPORT:</p>
					<input onChange={setVals.setIdPic} type="file" />
					<p className="description-selfie">*.PDF or .JEPG ,5mb or less</p>
				</div>

				<div className="file-uploader">
					<p>*Self-Photo:</p>
					<input onChange={setVals.setSelfie} type="file" id="capture" capture />
					<p className="description-selfie">
						*Please make sure your face is visible and the picture is taken at a well lit area
					</p>
				</div>
				<h1 className="approval-headline">Please approve the following:</h1>
				<div className="approval">
					<span>
						I want to exchange{' '}
						<span className="number">
							{getVals.prefixFrom}
							{getVals.amount.toLocaleString(undefined, { maximumFractionDigits: 3 })}
						</span>{' '}
						to{' '}
						<span className="number">
							{getVals.prefixTo}
							{getVals.outcome.toLocaleString(undefined, { maximumFractionDigits: 3 })}
						</span>{' '}
						at the current rate of:{' '}
						<span className="number">
							1{getVals.prefixFrom} ={' '}
							<span className="number">
								{getVals.prefixTo}
								{getVals.exchangeRate}
							</span>
						</span>
					</span>
				</div>
				<div className="approval-checkBox">
					<FormGroup>
						<FormControlLabel
							control={<Checkbox onChange={props.amountsFlag} />}
							label="I approve the amounts and the exchange rate."
						/>
					</FormGroup>
				</div>
				<div className="approval-checkBox">
					<FormGroup>
						<FormControlLabel
							control={<Checkbox onChange={props.termsFlag} />}
							label="i have read the terms & conditions and agree."
						/>
					</FormGroup>
				</div>
			</div>
			<ReCAPTCHA
				theme="dark"
				onChange={props.recapchaFlag}
				sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
				ref={props.recaptchaRef}
				size="invisible"
				badge="bottomright"
			/>
			<button onClick={props.handleBack}>Back</button>
			<button onClick={props.submit}>SUBMIT</button>
		</div>
	);
}
