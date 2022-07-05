import React, { useState } from 'react';
import './introComponents.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import information from '../../../assets/information.png';

const FAQ_ITEMS = [
	{
		question: 'What is the purpose of IExchange?',
		answer:
			'IExchange is a currency exchange service, that you can use before or while traveling abroad. With our system you get the cheapest way of exchanging currency + a modern and convinient way to pay while abroad.',
		panel: 'panel1',
		aria_controls: 'panel1bh-content',
		id: 'panel1bh-header'
	},
	{
		question: 'How do I use IExchange?',
		answer: `You just need to follow the simple steps presented in 'Instructions' section.`,
		panel: 'panel2',
		aria_controls: 'panel2bh-content',
		id: 'panel2bh-header'
	},
	{
		question: 'What is the currency exchange rate presented on IExchange?',
		answer:
			'To give you the best experience, we use the mid-market value (represetitive) of currency, that means we take absolutly NO fee of the conversion.',
		panel: 'panel3',
		aria_controls: 'panel3bh-content',
		id: 'panel3bh-header'
	},
	{
		question: 'Where do you get the currency exchange rate data from?',
		answer:
			'Our spot exchange rates are sourced from a very broad base of commercial sources and banks around the world, each of varying types and frequencies. The exhcange rates are updated every 10 minutes in order to give you the most accurate rate.',
		panel: 'panel4',
		aria_controls: 'panel4bh-content',
		id: 'panel4bh-header'
	},
	{
		question: 'Is the service safe and secure?',
		answer:
			'Yes, we are 100% secure and we use the best security measures to protect your data. Also , money transfers are happening via bank wire, so you can be sure that your data is safe.',
		panel: 'panel5',
		aria_controls: 'panel5bh-content',
		id: 'panel5bh-header'
	},
	{
		question: 'How do I get support?',
		answer: 'You can contact us at iexchange55@gmail.com, or on our linkedin page. We are always happy to help.',
		panel: 'panel6',
		aria_controls: 'panel6bh-content',
		id: 'panel6bh-header'
	},
	{
		question: 'How much do I need to pay for the service?',
		answer:
			'We charge 8$ for each exchange , fixed fee for every exchange no matter the amount!. meaing you can exchange up to 2500$ while only paying 8$ in the proccess.',
		panel: 'panel7',
		aria_controls: 'panel7bh-content',
		id: 'panel7bh-header'
	},
	{
		question: 'On which step of the proccess do you charge me?',
		answer:
			'You dont need to enter your credit card details, we just add additional 8$ when you transfer the money. meaning it all happens via the bank wire.',
		panel: 'panel8',
		aria_controls: 'panel8bh-content',
		id: 'panel8bh-header'
	}
];

const Faq = () => {
	const [ expanded, setExpanded ] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className="Faq">
			<div className="Faq-heading">
				<img src={information} alt="information" />
				<p>FAQ</p>
			</div>
			<div>
				{FAQ_ITEMS.map((item, index) => (
					<Accordion
						sx={{ margin: '20px 0' }}
						id={index}
						expanded={expanded === item.panel}
						onChange={handleChange(item.panel)}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={item.aria_controls}
							id={item.id}
						>
							<Typography
								sx={{
									width: '80%',
									flexShrink: 0,
									color: 'black',
									fontSize: '15px',
									fontWeight: '700'
								}}
							>
								{item.question}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>{item.answer}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
			<div className="Faq-btn-container">
				<a href="/home" className="intro-btn">
					Try now!
				</a>
			</div>
		</div>
	);
};

export default Faq;
