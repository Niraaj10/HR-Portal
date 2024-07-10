import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './ChangingProgressProvider';

const EmpLeavInfo = () => {
    const percentage = 66;
    return (
        <>

            <div>
                <div className="empInfo grid grid-cols-3 gap-6 pt-5">

                    <div className="emp  bg-white rounded-xl p-5 flex gap-6 justify-between hover:shadow-lg">
                        <div className='w-24'>
                            <ChangingProgressProvider values={[0, 66]}>
                                {percentage => (
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={10} 
                                        text={`4/7`}
                                        styles={buildStyles({
                                            pathColor: '#3354F4',
                                            textColor: '#3354F4', 
                                            pathTransitionDuration: 0.55
                                        })}
                                    />
                                )}
                            </ChangingProgressProvider>
                        </div>

                        <div className='flex flex-col'>
                            {/* //////////////////////////////////////// */}
                            <div className='text-xl pb-2'>Casual leave</div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#d6d6d6"></path></g></svg>
                                </span>
                                <div>Remaining - 3</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                                <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#0c174e"></path></g></svg>
                                </span>
                                <div>Used - 4</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#3354F4"></path></g></svg>
                                </span>
                                <div>Total - 7</div>
                            </div>           
                            
                        </div>
                    </div>

                    
                    <div className="emp  bg-white rounded-xl p-5 flex gap-6 justify-between hover:shadow-lg">
                        <div className='w-24'>
                            <ChangingProgressProvider values={[0, 66]}>
                                {percentage => (
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={10} 
                                        text={`4/7`}
                                        styles={buildStyles({
                                            pathColor: '#3354F4',
                                            textColor: '#3354F4', 
                                            pathTransitionDuration: 0.55
                                        })}
                                    />
                                )}
                            </ChangingProgressProvider>
                        </div>

                        <div className='flex flex-col'>
                            {/* //////////////////////////////////////// */}
                            <div className='text-xl pb-2'>Sick leave</div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#d6d6d6"></path></g></svg>
                                </span>
                                <div>Remaining - 3</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                                <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#0c174e"></path></g></svg>
                                </span>
                                <div>Used - 4</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#3354F4"></path></g></svg>
                                </span>
                                <div>Total - 7</div>
                            </div>           
                            
                        </div>
                    </div>

                    <div className="emp  bg-white rounded-xl p-5 flex gap-6 justify-between hover:shadow-lg">
                        <div className='w-24'>
                            <ChangingProgressProvider values={[0, 66]}>
                                {percentage => (
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={10} 
                                        text={`4/7`}
                                        styles={buildStyles({
                                            pathColor: '#3354F4',
                                            textColor: '#3354F4', 
                                            pathTransitionDuration: 0.55
                                        })}
                                    />
                                )}
                            </ChangingProgressProvider>
                        </div>

                        <div className='flex flex-col'>
                            {/* //////////////////////////////////////// */}
                            <div className='text-xl pb-2'>Earned leave</div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#d6d6d6"></path></g></svg>
                                </span>
                                <div>Remaining - 3</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                                <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#0c174e"></path></g></svg>
                                </span>
                                <div>Used - 4</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#3354F4"></path></g></svg>
                                </span>
                                <div>Total - 7</div>
                            </div>           
                            
                        </div>
                    </div>

                    <div className="emp  bg-white rounded-xl p-5 pr-[2px] flex gap-6 justify-between hover:shadow-lg">
                        <div className='w-24'>
                            <ChangingProgressProvider values={[0, 66]}>
                                {percentage => (
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={10} 
                                        text={`4/7`}
                                        styles={buildStyles({
                                            pathColor: '#3354F4',
                                            textColor: '#3354F4', 
                                            pathTransitionDuration: 0.55
                                        })}
                                    />
                                )}
                            </ChangingProgressProvider>
                        </div>

                        <div className='flex flex-col'>
                            {/* //////////////////////////////////////// */}
                            <div className='text-lg pb-2'>Adjustment leave</div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#d6d6d6"></path></g></svg>
                                </span>
                                <div>Remaining - 3</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                                <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#0c174e"></path></g></svg>
                                </span>
                                <div>Used - 4</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#3354F4"></path></g></svg>
                                </span>
                                <div>Total - 7</div>
                            </div>           
                            
                        </div>
                    </div>

                    <div className="emp  bg-white rounded-xl p-5 flex gap-6 justify-between hover:shadow-lg">
                        <div className='w-24'>
                            <ChangingProgressProvider values={[0, 66]}>
                                {percentage => (
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={10} 
                                        text={`4/7`}
                                        styles={buildStyles({
                                            pathColor: '#3354F4',
                                            textColor: '#3354F4', 
                                            pathTransitionDuration: 0.55
                                        })}
                                    />
                                )}
                            </ChangingProgressProvider>
                        </div>

                        <div className='flex flex-col'>
                            {/* //////////////////////////////////////// */}
                            <div className='text-xl pb-2'>Unpaid leave</div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#d6d6d6"></path></g></svg>
                                </span>
                                <div>Remaining - 3</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                                <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#0c174e"></path></g></svg>
                                </span>
                                <div>Used - 4</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#3354F4"></path></g></svg>
                                </span>
                                <div>Total - 7</div>
                            </div>           
                            
                        </div>
                    </div>

                    <div className="emp  bg-white rounded-xl p-5 flex gap-6 justify-between hover:shadow-lg">
                        <div className='w-24'>
                            <ChangingProgressProvider values={[0, 66]}>
                                {percentage => (
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={10} 
                                        text={`4/7`}
                                        styles={buildStyles({
                                            pathColor: '#3354F4',
                                            textColor: '#3354F4', 
                                            pathTransitionDuration: 0.55
                                        })}
                                    />
                                )}
                            </ChangingProgressProvider>
                        </div>

                        <div className='flex flex-col'>
                            {/* //////////////////////////////////////// */}
                            <div className='text-xl pb-2'>Half leave</div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#d6d6d6"></path></g></svg>
                                </span>
                                <div>Remaining - 3</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                                <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#0c174e"></path></g></svg>
                                </span>
                                <div>Used - 4</div>
                            </div>
                            <div className='flex gap-3 items-center text-gray-400 text-sm'>
                            <span className=''>
                                <svg width="15px" height="15px" viewBox="0 0 6 6" id="meteor-icon-kit__solid-circle-xxxs" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z" fill="#3354F4"></path></g></svg>
                                </span>
                                <div>Total - 7</div>
                            </div>           
                            
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default EmpLeavInfo
