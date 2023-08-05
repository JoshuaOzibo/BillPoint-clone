import React from 'react';

import { useState } from 'react';
const FaqQuest = () => {
    const [WhyShould, setWhyShould] = useState(false);
    const [HowCan, setHowCan] = useState(false);
    const [HowDo, setHowDo] = useState(false);
    const [WhatHappen, setWhatHappen] = useState(false);;
    const [IWas, setIWas] = useState(false);;
    const [WhatIsB, setWhatIsB] = useState(false);;
    const [IsBillPoint, setIsBillPoint] = useState(false);;
    const [HowDoIA, setHowDoIA] = useState(false);;
    const [Howlong, setHowlong] = useState(false);;
    const [CanICancel, setCanICancel] = useState(false);;
    const [WhatHappensIf, setWhatHappensIf] = useState(false);;
    const [HowCanIView, setHowCanIView] = useState(false);;
    const [AreThereAny, setAreThereAny] = useState(false);;
    const [CanIsetUp, setCanIsetUp] = useState(false);;
    const [WhatHappensIfMyPayment, setWhatHappensIfMyPayment] = useState(false);;
    const [HowCanIContact, setHowCanIContact] = useState(false);;
    const [CanIReceive, setCanIReceive] = useState(false);;
    const [WhatHappenIfMyBillpointA, setWhatHappenIfMyBillpointA] = useState(false);;
    const [IsThereAMobileA, setIsThereAMobileA] = useState(false);
    const [HowCanIUpdate, setHowCanIUpdate] = useState(false);
    const [AreThereAnyR, setAreThereAnyR] = useState(false);
    const [HowdoesBillpointProtect, setHowdoesBillpointProtect] = useState(false);

    const WhyShouldBtn =() =>{
        setWhyShould(state => !state);
        if(!WhyShould){
            setWhyShould(true)
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const HowCanBtn =() =>{
        setHowCan(state => !state);
        if(!HowCan){
            setWhyShould(false)
            setHowCan(true);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }

    const HowDoBtn =() =>{
        setHowDo(state =>!state);
        if(!HowDo){
            setHowCan(false);
            setHowDo(true);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const WhatHappenBtn =() =>{
        setWhatHappen(state =>!state);
        if(!WhatHappen){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(true);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const IWasBtn =() =>{
        setIWas(state =>!state);;
        if(!IWas){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(true);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const WhatIsBdBtn =() =>{
        setWhatIsB(state =>!state);
        if(!WhatIsB){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(true);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const IsBillPointBtn =() =>{
        setIsBillPoint(state => !state);;
        if(!IsBillPoint){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(true);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const HowDoIABtn =() =>{
        setHowDoIA(state => !state);;
        if(!HowDoIA){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(true);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const HowlongBtn =() =>{
        setHowlong(state => !state);
        if(!Howlong){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(true);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const CanICancelBtn =() =>{
        setCanICancel(state => !state);
        if(!CanICancel){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(true);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const WhatHappensIfBtn =() =>{
        setWhatHappensIf(state => !state);;
        if(!WhatHappensIf){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(true);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const HowCanIViewBtn =() =>{
        setHowCanIView(state => !state);;
        if(!HowCanIView){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(true);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const AreThereAnyBtn =() =>{
        setAreThereAny(state => !state);
        if(!AreThereAny){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(true);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const CanIsetUpBtn =() =>{
        setCanIsetUp(state => !state);
        if(!CanIsetUp){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(true);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const WhatHappensIfMyPaymentBtn =() =>{
        setWhatHappensIfMyPayment(state => !state);
        if(!WhatHappensIfMyPayment){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(true);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const HowCanIContactBtn =() =>{
        setHowCanIContact(state => !state);
        if(!HowCanIContact){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(true);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const CanIReceiveBtn =() =>{
        setCanIReceive(state => !state);
        if(!CanIReceive){
            setHowCan(false);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(true);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
        
    }
    const WhatHappenIfMyBillpointABtn =() =>{
        setWhatHappenIfMyBillpointA(state => !state);
        if(!WhatHappenIfMyBillpointA){
            setHowCan(state => !state);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(true);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const IsThereAMobileABtn =() =>{
        setIsThereAMobileA(state => !state);
        if(!IsThereAMobileA){
            setHowCan(state => !state);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(true);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const HowCanIUpdateBtn =() =>{
        setHowCanIUpdate(state => !state);
        if(!HowCanIUpdate){
            setHowCan(state => !state);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(true);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(false);
        }
    }
    const AreThereAnyRBtn =() =>{
        setAreThereAnyR(state => !state);
        if(!AreThereAnyR){
            setHowCan(state => !state);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(true);
            setHowdoesBillpointProtect(false);
        }
    }
    const HowdoesBillpointProtectBtn =() =>{
        setHowdoesBillpointProtect(state => !state);
        if(!HowdoesBillpointProtect){
            setHowCan(state => !state);
            setHowDo(false);
            setWhatHappen(false);
            setIWas(false);;
            setWhatIsB(false);
            setIsBillPoint(false);;
            setHowDoIA(false);;
            setHowlong(false);
            setCanICancel(false);
            setWhatHappensIf(false);;
            setHowCanIView(false);;
            setAreThereAny(false);
            setCanIsetUp(false);
            setWhatHappensIfMyPayment(false);
            setHowCanIContact(false);
            setCanIReceive(false);
            setWhatHappenIfMyBillpointA(false);
            setIsThereAMobileA(false);
            setHowCanIUpdate(false);
            setAreThereAnyR(false);
            setHowdoesBillpointProtect(true);
        }
    }
    
  return (
    <div className='py-28 w-[100%]'>
        <div className='w-[80%] m-auto space-y-10'>
            <div className={WhyShould ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={WhyShouldBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>Why Should I use Bill Point</h4>
                </div>
                {WhyShould && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}  
                
            </div>
            <div className={HowCan ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div >
                    <h4 onClick={HowCanBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>How Can I Pay For Utility On Bill Point</h4>        
                </div>
                {HowCan && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={HowDo ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={HowDoBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>How do I Pay Or depoist on BillPoint?</h4>        
                </div>
                {HowDo &&<p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={WhatHappen ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={WhatHappenBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>What Happen If my card doesn't work?</h4>        
                </div>
                {WhatHappen && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={IWas ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={IWasBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>I was debited for a failed transaction</h4>        
                </div>
                {IWas && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={WhatIsB ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={ WhatIsBdBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>What is BillPoint?</h4>        
                </div>
                {WhatIsB && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={IsBillPoint ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={IsBillPointBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>Is BillPoint safe and secure to use?</h4>        
                </div>
                {IsBillPoint && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={HowDoIA ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={HowDoIABtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>How do I add money to my BillPoint wallet?</h4>        
                </div>
                {HowDoIA && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={Howlong ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={HowlongBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>How long does it take for a payment to be processed through Billpoint?</h4>        
                </div>
                {Howlong && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={CanICancel ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={CanICancelBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>Can I cancel a payment made through Billpoint?</h4>        
                </div>
                {CanICancel && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={WhatHappensIf ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={WhatHappensIfBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>What happens if I make a payment to the wrong biller or service provider?</h4>        
                </div>
                {WhatHappensIf && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={HowCanIView ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={HowCanIViewBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>How can I view my payment history on Billpoint?</h4>        
                </div>
                {HowCanIView && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={AreThereAny ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={AreThereAnyBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>Are there any fees associated with using Billpoint?</h4>        
                </div>
                {AreThereAny && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            
            <div className={CanIsetUp ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={CanIsetUpBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>Can I set up recurring payments through Billpoint?</h4>        
                </div>
                {CanIsetUp && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={WhatHappensIfMyPayment ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={WhatHappensIfMyPaymentBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>What happens if my payment is rejected or fails to go through?</h4>        
                </div>
                {WhatHappensIfMyPayment &&<p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={HowCanIContact ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={HowCanIContactBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]' >How can I contact Billpoint customer support for assistance?</h4>        
                </div>
                {HowCanIContact && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={CanIReceive ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={CanIReceiveBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>Can I receive refunds for payments made through Billpoint?</h4>        
                </div>
                {CanIReceive && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={WhatHappenIfMyBillpointA ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={WhatHappenIfMyBillpointABtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>What happens if my Billpoint account is compromised or hacked?</h4>        
                </div>
                { WhatHappenIfMyBillpointA && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={IsThereAMobileA ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={IsThereAMobileABtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>Is there a mobile app for Billpoint and where can I download it?</h4>        
                </div>
                {IsThereAMobileA && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={HowCanIUpdate ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={HowCanIUpdateBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>How can I update my personal information or payment methods on Billpoint?</h4>        
                </div>
                {HowCanIUpdate && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={AreThereAnyR ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={AreThereAnyRBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>Are there any rewards or loyalty programs for using Billpoint?</h4>        
                </div>
                {AreThereAnyR &&<p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
            <div className={HowdoesBillpointProtect ? 'bg-[#e05a00ec] transition-all rounded-[15px] p-5 text-white' : 'transition-all'}>
                <div>
                    <h4 onClick={HowdoesBillpointProtectBtn} className='cursor-pointer w-[90%] md:w-[50%] sm:w-[60%] lg:w-[55%]'>How does Billpoint protect my personal and financial information?</h4>        
                </div>
                {HowdoesBillpointProtect && <p className='pt-5'>
                    Using Bill Point is simply the safest and easiest way to pay for Utilities in Nigeria. 
                    It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. 
                    Bill Point strives to give you access to constant Cheap Services and also keep your data safe 
                    through our military grade safety and security system.
                </p>}
            </div>
        </div>
    </div>
  )
}

export default FaqQuest;