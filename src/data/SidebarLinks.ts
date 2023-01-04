// ICONS
import {
	BadgePercent,
	BriefCase,
	Galaxy,
	Bank,
	ChartBar,
	ClipboardList,
	CoinsSolid,
	Handshake,
	LoanRequest,
	MoneySack,
	PiggyBank,
	Scroll,
	Sliders,
	Transaction,
	UserCheck,
	UserCog,
	UserTimes,
	Users,
	UserGroup,
} from '../assets/icons/index';

export const SideBarLinks = [
	{
		title: 'customers',
		links: [
			{	
				title: "",
				name: 'Users',
				logo: Users,
			},
			{	
				title: "guarantors",
				name: 'Guarantors',
				logo: UserGroup,
			},
			{
				title: "loans",
				name: 'Loans',
				logo: MoneySack,
			},
			{
				title: "decision-models",
				name: 'Decision Models',
				logo: Handshake,
			},
			{
				title: "savings",
				name: 'Savings',
				logo: PiggyBank,
			},
			{
				title: "loan-requests",
				name: 'Loan Requests',
				logo: LoanRequest,
			},
			{
				title: "whitelist",
				name: 'Whitelist',
				logo: UserCheck,
			},
			{
				title: "karma",
				name: 'Karma',
				logo: UserTimes,
			},
		],
	},
	{
		title: 'Business',
		links: [
			{	
				title: "organisation",
				name: 'Organization',
				logo: BriefCase,
			},
			{
				title: "loan-products",
				name: 'Loan Products',
				logo: LoanRequest,
			},
			{title: "savings-product",
				name: 'Savings Product',
				logo: Bank,
			},
			{
				title: "fees-and-charges",
				name: 'Fees and Charges',
				logo: CoinsSolid,
			},
			{
				title: "transaction",
				name: 'Transaction',
				logo: Transaction,
			},
			{
				title: "services",
				name: 'Services',
				logo: Galaxy,
			},
			{
				title: "service-account",
				name: 'Service Account',
				logo: UserCog,
			},
			{
				title: "settlements",
				name: 'Settlements',
				logo: Scroll,
			},
			{
				title: "reports",
				name: 'Reports',
				logo: ChartBar,
			},
		],
	},
	{
		title: 'Settings',
		links: [
			{
				title: "preferences",
				name: 'Preferences',
				logo: Sliders,
			},
			{
				title: "fees-and-pricing",
				name: 'Fees and Pricing',
				logo: BadgePercent,
			},
			{
				title: "audit-logs",
				name: 'Audit Logs',
				logo: ClipboardList,
			},
		],
	},
];
