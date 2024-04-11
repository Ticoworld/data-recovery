import Form from "../components/Form";

const Quotes = () => {
  return (
    <div className="px-8 py-10  bg-slate-200">
        <div>
            <h3 className="text-blue-950 text-4xl font-semi-bold py-2 pt-8">Get A Free Quote</h3>
            <p className="text-gray-700">Get a free analysis and quote from the leading data recovery experts. To get started, fill out the form below and we will email you a ticket number and the next steps.
            </p>
            <p className="py-2">For immediate assistance, call 800.237.4200 now.</p>
            <Form />
            <div className="py-3">
                <h3 className="text-xl font-semibold text-blue-950">Your information is safe with us.</h3> 
            <p className="text-gray-700">We understand the importance of data security, and we take all necessary precautions to protect your personal information.</p>
            </div>
           
        </div>
    </div>);
};

export default Quotes;
