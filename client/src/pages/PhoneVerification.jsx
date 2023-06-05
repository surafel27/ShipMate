import React from 'react';
import MobileIdentity from "../components/PhoneVerify.jsx";
import Headers from "../components/Header.jsx"

function SenderMobileIdentity (){
    const Header = Headers.header;
   const SenderMobileIdentityForm = MobileIdentity.senderPhone
    return(
        <>
        <Header/>
        <SenderMobileIdentityForm/>
        </>
    );
}
function TravellerMobileIdentity (){
    const Header = Headers.header;
   const TravellerMobileIdentityForm = MobileIdentity.travellerPhone
    return(
        <>
        <Header/>
        <TravellerMobileIdentityForm/>
        </>
    );
}
const PhoneIdentity = {
    sender: SenderMobileIdentity,
    traveller: TravellerMobileIdentity
}
export default PhoneIdentity;