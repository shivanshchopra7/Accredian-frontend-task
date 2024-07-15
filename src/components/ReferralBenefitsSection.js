import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const ReferralBenefitsSection = ({ onReferNowClick }) => {
  const programs = [
    { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  ];

  return (
    <div id='refer' className="md:p-16 p-4 text-center">
      <h2 className="md:text-4xl text-3xl font-bold mb-12 pt-8">What Are The  <span className='text-blue-600'> Referral Benefits? </span></h2>
      <div className="max-w-6xl md:mx-auto">
        <TableContainer component={Paper} className="rounded-lg shadow-lg">
          <Table aria-label="referral benefits table">
            <TableHead>
              <TableRow className="bg-blue-100">
                <TableCell><p className='font-bold'>Programs</p></TableCell>
                <TableCell className="font-bold"><p className='font-bold'>Referrer Bonus</p></TableCell>
                <TableCell className="font-bold"><p className='font-bold'>Referee Bonus</p></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {programs.map((program, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center border-t py-2 px-4 ">
                    <SchoolIcon className="md:mr-8 mr-4 " />
                    {program.name}
                  </TableCell>
                  <TableCell className="border-t py-2 px-4 ">{program.referrerBonus}</TableCell>
                  <TableCell className="border-t py-2 px-4">{program.refereeBonus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <button className="mb-8 mt-8 bg-blue-600 text-white px-6 py-3 rounded-full" onClick={onReferNowClick}>Refer Now</button>
      </div>
    </div>
  );
}

export default ReferralBenefitsSection;
