import React from 'react';
import CountUp from 'react-countup';

const NumberCounter = () => {
    return (
        <div className='md:px-16'>

            <div className='text-center pb-20'>
                <h1 className='text-3xl font-extrabold capitalize'>Millons business trust us</h1>
                <h4 className='text-3xl font-medium uppercase py-4 text-teal-500'>try to understand user expectation</h4>
            </div>

            <div className='grid md:grid-cols-4 gap-10'>
                <div className='my-custom-style p-10'>
                    <CountUp
                        start={0}
                        end={100}
                        duration={4.75}
                        separator=" "
                        decimals={0}
                        decimal=","
                        suffix=" +"
                    >
                        {({ countUpRef }) => (
                            <div className='text-xl font-semibold text-teal-500 text-center capitalize'>
                                <i class="fas fa-flag -pl-5"></i>
                                <br />
                                <span className='my-2 inline-block' ref={countUpRef} />
                                <br />
                                <span className="text-md inline-block">Countries</span>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className='my-custom-style p-10'>
                    <CountUp
                        start={0}
                        end={535}
                        duration={4.75}
                        separator=" "
                        decimals={0}
                        decimal=","
                        suffix=" +"
                    >
                        {({ countUpRef }) => (
                            <div className='text-xl font-semibold text-teal-500 text-center capitalize'>
                                <i class="fas fa-file-archive -pl-5"></i>
                                <br />
                                <span className='my-2 inline-block' ref={countUpRef} />
                                <br />
                                <span className="text-md inline-block">compelets project</span>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className='my-custom-style p-10'>
                    <CountUp
                        start={0}
                        end={273}
                        duration={4.75}
                        separator=" "
                        decimals={0}
                        decimal=","
                        suffix=" +"
                    >
                        {({ countUpRef }) => (
                            <div className='text-xl font-semibold text-teal-500 text-center capitalize'>
                                <i class="fas fa-users -pl-5"></i>
                                <br />
                                <span className='my-2 inline-block' ref={countUpRef} />
                                <br />
                                <span className="text-md inline-block">happy clients</span>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className='my-custom-style p-10'>
                    <CountUp
                        start={0}
                        end={432}
                        duration={4.75}
                        separator=" "
                        decimals={0}
                        decimal=","
                        suffix=" +"
                    >
                        {({ countUpRef }) => (
                            <div className='text-xl font-semibold text-teal-500 text-center capitalize'>
                                <i class="fas fa-thumbs-up -pl-5"></i>
                                <br />
                                <span className='my-2 inline-block' ref={countUpRef} />
                                <br />
                                <span className="text-md inline-block">feedback</span>
                            </div>
                        )}
                    </CountUp>
                </div>

            </div>


            <div className='grid md:grid-cols-5 my-custom-style py-20 px-10 my-24'>
                <h1 className='text-3xl font-bold capitalize col-span-3 text-teal-900'>Have any question about us or get a <br /> products request?</h1>
                <div className='col-span-2 flex justify-between'>
                    <button className='btn my-custom-style bg-main border-0 text-teal-500 font-bold'>request a quote</button>
                    <button className='btn my-custom-style bg-main border-0 text-black font-bold hover:text-white'>contact us</button>
                </div>

            </div>


        </div>
    );
};

export default NumberCounter;