import signUp from "../components/SignUp.jsx";
function SignupSender (){
    const SignupSenderForm = signUp.sender;
    return(
        <>
        <SignupSenderForm/>
        </>
    );

}
function SignupTraveller (){
    const SignupTravellerForm = signUp.traveller;
    return(
        <>
        <SignupTravellerForm/>
        </>
    );
}
const SignUp = {
    signUpsender: SignupSender,
    signUptraveller: SignupTraveller
}
export default SignUp;