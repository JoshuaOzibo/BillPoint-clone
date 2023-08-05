import React from 'react'
import { useState } from 'react'
const CheckOut = () => {

  const [general, setGeneral] = useState(false);
  const [Data, setData] = useState(false);
  const [Airtime, setAirtime] = useState(false);
  const [Betting, setBetting] = useState(false);
  const [Utility, setUtility] = useState(false);
  const [Cable, setCable] = useState(false);


  {/** QUESTIONS */}

  const [why, setWhy] = useState(false);
  const [HowC, setHowC] = useState(false);
  const [HowD, setHowD] = useState(false);
  const [What, setWhat] = useState(false);
  const [Debit, setDebit] = useState(false);
  const [wBillPoint, setWBillPoint] = useState(false);
  const [IBillPoint, setIBillPoint] = useState(false);
  const [AddMonet, setAddMoney] = useState(false);

  const ClickBtnGeneral =() =>{
    setGeneral(true);
    setData(false)
    setAirtime(false);
    setBetting(false)
    setUtility(false);
    setCable(false);
  }

  const clickData =() =>{
    setGeneral(false);
    setData(true)
    setAirtime(false);
    setBetting(false)
    setUtility(false);
    setCable(false);
  }

  const clickAirtime = () =>{
    setGeneral(false);
    setData(false)
    setAirtime(true);
    setBetting(false)
    setUtility(false);
    setCable(false);
  }  

  const clickBetting = () =>{
    setGeneral(false);
    setData(false)
    setAirtime(false);
    setBetting(true)
    setUtility(false);
    setCable(false);
  }

  const clickUtility =() =>{
    setGeneral(false);
    setData(false)
    setAirtime(false);
    setBetting(false)
    setUtility(true);
    setCable(false);
  }

  const clickCable =() =>{
    setGeneral(false);
    setData(false)
    setAirtime(false);
    setBetting(false)
    setUtility(false);
    setCable(true);
  }



  {/** QUESTIONS */}

  const clickWhy =() =>{
    setWhy(why => !why);
    if(!why){
      setHowC(false);
      setHowD(false);
      setWhat(false);
      setDebit(false)
      setWBillPoint(false)
      setIBillPoint(false)
      setAddMoney(false);
    }
  }
  const clickHowCan =() =>{
    setHowC(HowC => !HowC);
    if(!HowC){
      setWhy(false);
      setHowD(false);
      setWhat(false);
      setDebit(false)
      setWBillPoint(false)
      setIBillPoint(false)
      setAddMoney(false);
    }
  }
  const clickHowDo =() =>{
    setHowD(HowD => !HowD);
    if(!HowD){
      setWhy(false);
      setHowC(false);
      setWhat(false);
      setDebit(false)
      setWBillPoint(false)
      setIBillPoint(false)
      setAddMoney(false);
    }
  }
  const clickWhat =() =>{
    setWhat(What => !What);
    if(!What){
      setWhy(false);
      setHowC(false);
      setHowD(false);
      setDebit(false)
      setWBillPoint(false)
      setIBillPoint(false)
      setAddMoney(false);
    }
  }
  const clickDebit =() =>{
    setDebit(Debit => !Debit);
    if(!Debit){
      setWhy(false);
      setHowC(false);
      setHowD(false);
      setWhat(false)
      setWBillPoint(false)
      setIBillPoint(false)
      setAddMoney(false);
    }
  }
  const clickWhatB =() =>{
    setWBillPoint(wBillPoint => !wBillPoint);
    if(!wBillPoint){
      setWhy(false);
      setHowC(false);
      setHowD(false);
      setWhat(false)
      setDebit(false)
      setIBillPoint(false)
      setAddMoney(false);
    }
  }
  const clickIsB =() =>{
    setIBillPoint(IBillPoint => !IBillPoint);
    if(!IBillPoint){
      setWhy(false);
      setHowC(false);
      setHowD(false);
      setWhat(false)
      setDebit(false)
      setWBillPoint(false)
      setAddMoney(false);
    }
  }
  const clickAddMoney =() =>{
    setAddMoney(AddMonet => !AddMonet);
    if(!AddMonet){
      setWhy(false);
      setHowC(false);
      setHowD(false);
      setWhat(false)
      setDebit(false)
      setWBillPoint(false)
      setIBillPoint(false);
    }
  }
  return (
    <div className='container overflow-hidden m-auto'>
        <div className=''>
          <h1 className='font-bold md:w-[55%] w-full text-center m-auto md:text-center md:text-3xl lg:text-5xl text-2xl mt-10 mb-4'>Checkout our <span className='text-[#ff7b24]'>FAQs</span></h1>
          <p className='lg:w-[40%] w-[90%] md:w-[60%] text-center m-auto'>Have a question about our 
              services? Our FAQ section has 
              got you covered with helpful 
              information on all of our 
              offerings.
          </p>
        </div>

        <div className='md:flex p-10 w-full space-x-6'>

            <div className='w-full p-2'>
              <div className='space-y-4 lg:w-[78%] md:w-[80] hidden md:block rounded-[15px] m-auto lg:p-3 md:p-5 bg-[#ff7b24]'>
                <button onClick={ClickBtnGeneral} className={general ? 'border lg:text-start md:text-center p-4 w-[100%] text-[#ff7b24] bg-white rounded-full': 'border hover:text-black] text-white lg:text-start md:text-center p-4 w-[100%] rounded-full'}>General Questions</button>
                <br />
                <button onClick={clickData} className={Data ? 'border lg:text-start md:text-center p-4 w-[100%] text-[#ff7b24] bg-white rounded-full' : 'border text-white lg:text-start md:text-center p-4 w-[100%] rounded-full'}>Data Bundle Questions</button>
                <br />
                <button onClick={clickAirtime} className={Airtime ? 'border lg:text-start md:text-center p-4 w-[100%] text-[#ff7b24] bg-white rounded-full' : 'border text-white lg:text-start md:text-center p-4 w-[100%] rounded-full'}>Airtime Topup Questions</button>
                <br />
                <button onClick={clickBetting} className={Betting ? 'border lg:text-start md:text-center p-4 w-[100%] text-[#ff7b24] bg-white rounded-full' : 'border text-white lg:text-start md:text-center p-4 w-[100%] rounded-full'}>Betting Questions</button>
                <br />
                <button onClick={clickUtility} className={Utility ? 'border lg:text-start md:text-center p-4 w-[100%] text-[#ff7b24] bg-white rounded-full' : 'border text-white lg:text-start md:text-center p-4 w-[100%] rounded-full'}>Utility Bills Questions</button>
                <br />
                <button onClick={clickCable} className={Cable ? 'border lg:text-start md:text-center p-4 w-[100%] text-[#ff7b24] bg-white rounded-full' : 'border text-white lg:text-start md:text-center p-4 w-[100%] rounded-full'}>Cable TV Questions</button>
                <br />
                <button className='border bg-white text-[#ff7b24] lg:text-start md:text-center p-4 w-[100%] rounded-full'>Still have questions? Contact us</button>
                <br />
              </div>
            </div>


            {/** QUESTIONS */}

            <div className='w-[100%] overflow-hidden -mt-5'>
            <div className=' rounded-[15px] space-y-10 mr-7  m-auto pt-7 pb-7'>
              <div className={why ? 'bg-[#e05a00ec]  transition-all p-5 text-white rounded-xl' : 'transition-all'}>
                <h4 onClick={clickWhy} className="cursor-pointer md:w-[58%] lg:w-[58%]">Why Should I use Bill Point</h4>
                {why && <p className='pt-4'> Using Bill Point is simply the safest and easiest 
                    way to pay for Utilities in Nigeria. It is faster 
                    than any other payment platform.You can also use 
                    USSD to recharge, it's that easy. Bill Point 
                    strives to give you access to constant Cheap 
                    Services and also keep your data safe through our 
                    military grade safety and security system.
                </p>}
              </div>
              <div className={HowC ? 'bg-[#e05a00ec]  p-5 transition-all text-white rounded-xl' : 'transition-all'}>
                <h4 onClick={clickHowCan} className="cursor-pointer md:w-[58%] lg:w-[58%]">How Can I Pay For Utility On Bill Point</h4>
                {HowC && <p className='pt-4 '> Using Bill Point is simply the safest and easiest 
                    way to pay for Utilities in Nigeria. It is faster 
                    than any other payment platform.You can also use 
                    USSD to recharge, it's that easy. Bill Point 
                    strives to give you access to constant Cheap 
                    Services and also keep your data safe through our 
                    military grade safety and security system.
                </p>}
              </div>
              <div className={HowD ? 'bg-[#e05a00ec] p-5 text-white transition-all rounded-xl' : 'transition-all'}>
                <h4 onClick={clickHowDo} className="cursor-pointer md:w-[58%] lg:w-[58%]">How do I Pay Or depoist on BillPoint?</h4>
                {HowD && <p className='pt-4 '> Using Bill Point is simply the safest and easiest 
                    way to pay for Utilities in Nigeria. It is faster 
                    than any other payment platform.You can also use 
                    USSD to recharge, it's that easy. Bill Point 
                    strives to give you access to constant Cheap 
                    Services and also keep your data safe through our 
                    military grade safety and security system.
                </p>}
              </div>
              <div className={What ? 'bg-[#e05a00ec] p-5 transition-all text-white rounded-xl' : 'transition-all'}>
                <h4 onClick={clickWhat} className="cursor-pointer md:w-[58%] lg:w-[58%]">What Happen If my card doesn't work?</h4>
                {What &&<p className='pt-4 '> Using Bill Point is simply the safest and easiest 
                    way to pay for Utilities in Nigeria. It is faster 
                    than any other payment platform.You can also use 
                    USSD to recharge, it's that easy. Bill Point 
                    strives to give you access to constant Cheap 
                    Services and also keep your data safe through our 
                    military grade safety and security system.
                </p>}
              </div>
              <div className={Debit ? 'bg-[#e05a00ec] p-5 transition-all text-white rounded-xl' : 'transition-all'}>
                <h4 onClick={clickDebit} className="cursor-pointer md:w-[58%] lg:w-[58%]">I was debited for a failed transaction</h4>
                {Debit && <p className='pt-4 '> Using Bill Point is simply the safest and easiest 
                    way to pay for Utilities in Nigeria. It is faster 
                    than any other payment platform.You can also use 
                    USSD to recharge, it's that easy. Bill Point 
                    strives to give you access to constant Cheap 
                    Services and also keep your data safe through our 
                    military grade safety and security system.
                </p>}
              </div>
              <div className={wBillPoint ? 'bg-[#e05a00ec] p-5 transition-all text-white rounded-xl' : 'transition-all'}>
                <h4 onClick={clickWhatB} className="cursor-pointer md:w-[58%] lg:w-[58%]">What is BillPoint?</h4>
                {wBillPoint && <p className='pt-4 '> Using Bill Point is simply the safest and easiest 
                    way to pay for Utilities in Nigeria. It is faster 
                    than any other payment platform.You can also use 
                    USSD to recharge, it's that easy. Bill Point 
                    strives to give you access to constant Cheap 
                    Services and also keep your data safe through our 
                    military grade safety and security system.
                </p>}
              </div>
              <div className={IBillPoint ? 'bg-[#e05a00ec] p-5 transition-all text-white rounded-xl' : 'transition-all'}>
                <h4 onClick={clickIsB} className="cursor-pointer md:w-[58%] lg:w-[58%]">Is BillPoint safe and secure to use?</h4>
                {IBillPoint && <p className='pt-4 '> Using Bill Point is simply the safest and easiest 
                    way to pay for Utilities in Nigeria. It is faster 
                    than any other payment platform.You can also use 
                    USSD to recharge, it's that easy. Bill Point 
                    strives to give you access to constant Cheap 
                    Services and also keep your data safe through our 
                    military grade safety and security system.
                </p>}
              </div>
              <div className={AddMonet ? 'bg-[#e05a00ec] transition-all text-white p-5 rounded-xl' : 'transition-all'}>
                <h4 onClick={clickAddMoney} className="cursor-pointer md:w-[58%] lg:w-[58%]">How do I add money to my BillPoint wallet?</h4>
                {AddMonet && <p className='pt-4 '> Using Bill Point is simply the safest and easiest 
                    way to pay for Utilities in Nigeria. It is faster 
                    than any other payment platform.You can also use 
                    USSD to recharge, it's that easy. Bill Point 
                    strives to give you access to constant Cheap 
                    Services and also keep your data safe through our 
                    military grade safety and security system.
                </p>}
              </div>
        
            </div>
        </div>



        </div>
    </div>
  )
}

export default CheckOut