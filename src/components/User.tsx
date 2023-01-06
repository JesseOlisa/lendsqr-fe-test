import React, { useState, useEffect } from 'react';
import UsersAllImg from '../assets/users-all.png';
import UsersActiveImg from '../assets/users-active.png';
import UsersLoanImg from '../assets/users-with-loan.png';
import UsersSavingimg from '../assets/users-savings.png';

import Pagination from './Pagination';

interface User {
	orgName: 'string';
}

const User = () => {
	const [userList, setUserList] = useState([]);
	// user is currently on this page
	const [currentPage, setCurrentPage] = useState(1);

	const recordsPerPage = 10;
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

	const currentRecords = userList.slice(indexOfFirstRecord, indexOfLastRecord);
	const totalPagesNumber = Math.ceil(userList.length / recordsPerPage);

	const convertToDate = (time: string) => {
		return new Date(time).toLocaleString();
	};

	useEffect(() => {
		fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
			.then((Response) => Response.json())
			.then((result) => setUserList(result))
			.catch((error) => console.log(error));
	}, []);

	// console.log(userList);
	return (
		<div className='user--container'>
			<h4>Users</h4>
			<div className='stats--container'>
				<div>
					<img
						src={UsersAllImg}
						alt=''
					/>
					<p>Users</p>
					<p className='total--user'>2,453</p>
				</div>
				<div>
					<img
						src={UsersActiveImg}
						alt=''
					/>
					<p> Active Users</p>
					<p className='total--user'>2,453</p>
				</div>
				<div>
					<img
						src={UsersLoanImg}
						alt=''
					/>
					<p>Users with Loans</p>
					<p className='total--user'>12,453</p>
				</div>
				<div>
					<img
						src={UsersSavingimg}
						alt=''
					/>
					<p>Users with Savings</p>
					<p className='total--user'>102,453</p>
				</div>
			</div>

			<div className='users-data--container'>
				<table>
					<thead>
						<tr>
							<th>Orgainsation</th>
							<th>Username</th>
							<th>Email</th>
							<th>Phone Number</th>
							<th>Date Joined</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{currentRecords.map((user, index) => {
							return (
								<tr key={index}>
									<td>{user['orgName']}</td>
									<td>{user['userName']}</td>
									<td>{user['email']}</td>
									<td>{user['profile']['phoneNumber']}</td>
									<td>{convertToDate(user['createdAt'])}</td>
									<td>Active</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<Pagination
					totalPages={totalPagesNumber}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
                    recordsPerPage={recordsPerPage}
				/>
			</div>
		</div>
	);
};

export default User;
