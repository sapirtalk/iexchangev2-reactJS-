import React from 'react';
import { TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import CountryDrop from './countryDrop/CountryDrop';
import './UserDetails.css';
import PrefixSelect from './mobilePrefix/PrefixSelect';
import ReCAPTCHA from 'react-google-recaptcha';
import camera from '../../assets/camera.png';
import check from '../../assets/check.png';
import id from '../../assets/id.png';
import passport from '../../assets/passport.png';
import selfie from '../../assets/selfie.png';

export default function UserDetails(props) {
	const getVals = props.getVals;
	const setVals = props.setVals;

	const recieveBankDetails = (value) => {
		var message = '';
		switch (value) {
			case 'US':
				message = {
					AccountNo: 'usNo',
					BranchNo: 'usBranch',
					BankNo: 'usBank'
				};
				return message;
			case 'Israel':
				message = {
					AccountNo: 'IsraelNo',
					BranchNo: 'IsraelBranch',
					BankNo: 'IsraelBank'
				};
				return message;
			default:
				message = {
					AccountNo: 'usNo',
					BranchNo: 'usBranch',
					BankNo: 'usBank'
				};
				return message;
		}
	};

	const handleAccCountryChange = (value) => {
		setVals.setAccCountry(value);
		console.log(recieveBankDetails(value));
		const newBankDetails = recieveBankDetails(value);
		setVals.setBankDetails(newBankDetails);
	};

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
							value={getVals.firstName}
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
							value={getVals.LastName}
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
						value={getVals.email}
					/>
				</div>
				<div className="mobile">
					<PrefixSelect value={getVals.mobilePrefix} label="Prefix:" handleChange={setVals.setMobilePrefix} />
					<TextField
						onChange={setVals.setMobile}
						required
						id="outlined-required"
						label="Phone Number:"
						size="small"
						sx={{ width: 250 }}
						type="number"
						value={getVals.mobile}
					/>
				</div>
				<div className="countryDrop">
					<CountryDrop
						value={getVals.accCountry}
						label="Where is your bank?:"
						handleChange={handleAccCountryChange}
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
					<div className="file-uploader-items">
						<label className="file-uploader-label">
							<img src={camera} alt="IDpic" />
							<input onChange={setVals.setIdPic} type="file" capture />
						</label>
						{getVals.idPic !== null ? <img className="checkIcon" src={check} alt="done" /> : <div />}
						<div className="pic">
							<img className="picIcon" src={id} alt="idillu" />
							<img className="picIcon" src={passport} alt="passillu" />
						</div>
					</div>
					<p className="description-selfie">Please take a photo of your ID or Passport</p>
				</div>

				<div className="file-uploader">
					<p>*Face Photo:</p>
					<div className="file-uploader-items">
						<label className="file-uploader-label">
							<img src={camera} alt="IDpic" />
							<input onChange={setVals.setSelfie} type="file" capture />
						</label>
						{getVals.selfie !== null ? <img className="checkIcon" src={check} alt="done" /> : <div />}
						<div className="pic">
							<img className="picIcon" src={selfie} alt="selfie" />
						</div>
					</div>
					<p className="description-selfie">
						We need to verify that it is really you and no one is taking advantage of you *Please make sure
						your face is visible and the picture is taken at a well lit area
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
							control={<Checkbox onChange={props.amountsFlag} value={getVals.amountsFlag} />}
							label="I approve the amounts and the exchange rate."
						/>
					</FormGroup>
				</div>
				<div className="approval-checkBox">
					<FormGroup>
						<FormControlLabel
							control={<Checkbox onChange={props.termsFlag} value={getVals.termsFlag} />}
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
			<div className="buttons">
				<button className="buttons-back" onClick={props.handleBack}>
					Back
				</button>
				<button className="buttons-submit" onClick={props.submit}>
					Submit
				</button>
			</div>
		</div>
	);
}
