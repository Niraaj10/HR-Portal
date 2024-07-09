import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LeaveContainer = () => {
    const [empNo, setEmpNo] = useState([]);


    useEffect(() => {
        axios.get('/src/data/EmpData.json')
            .then(resp => {
                setEmpNo(resp.data);
                // console.log(resp.data)
            }).catch(err => console.error("Error fetching data", err));
    }, []);

    // console.log(empNo.emp_id);
    return (
        <>

            <div className='bg-white p-3 px-5 h-[339px] rounded-2xl flex flex-col justify-center hover:shadow-md'>
                {/* <div className='text-xl text-center pb-4'>
                    Leave Reuests
                </div> */}


                <div className='overflow-y-scroll scrollbar-hide overflow-x-hidden h-[300px]'>


                    <table className='w-full'>
                        <thead className='sticky top-0 border-b bg-white'>
                            <tr className=''>
                                <th className='pb-3'>Name</th>
                                <th className='pb-3'>Reason</th>
                                <th className='pb-3'>Dates</th>
                            </tr>
                        </thead>

                        <tbody className=' '>
                            {
                                empNo.map(emp => (
                                    <tr className='border-b '>
                                        <td className='p-2'>{emp.name}</td>

                                        <td className='text-center p-2 '>

                                            {emp.leaveRequests ? (
                                                emp.leaveRequests.map(Req => (
                                                    Req.status === 'Pending' ? (<>
                                                        <tr className='flex justify-center '>{Req?.reason}</tr>
                                                        {/* <tr>{Req?.startDate}</tr> */}
                                                    </>) : ('')
                                                ))
                                            ) : (
                                                <>
                                                    <tr className='flex justify-center'>No </tr>
                                                    <tr></tr>
                                                </>
                                            )}
                                        </td>

                                        <td className='p-2'>

                                            {emp.leaveRequests ? (
                                                emp.leaveRequests.map(Req => (
                                                    Req.status === 'Pending' ? (<>
                                                        {/* <tr>{Req?.reason}</tr> */}
                                                        <tr className='flex justify-center'>{Req.startDate}</tr>
                                                    </>) : ('')
                                                ))
                                            ) : (
                                                <>
                                                    <tr className='flex justify-center'>Requests </tr>
                                                    <tr></tr>
                                                </>
                                            )}
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>

                {/* <div>{empNo.map(emp => (
                    <div>

                        {emp.leaveRequests ? (
                            emp.leaveRequests.map(Req => (
                                
                                <div>
                                    <div>{Req.reason}</div>
                                    <div>{Req.startDate}</div>
                                    <div>{Req.endDate}</div>
                                </div>
                            ))
                        ) : (
                            <div>No Request Found</div>
                        )}
                    </div>
                    
                ))}</div> */}
            </div>

        </>
    )

}

export default LeaveContainer
