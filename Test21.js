/*
Importing Desired Libraries 
*/
import { createTestCafe , Selector , RequestLogger ,ClientFunction } from 'testcafe';
import fs from 'fs';
import path from 'path';
import page from './page-model';

/*
Writing the url of the desired page and preparing a client for inspecting the new update 
*/
const getPageUrl = ClientFunction(() => window.location.href);
const url = 'https://www.phptravels.net/register' ;
const filePath = path.join(__dirname,'httpLog.txt');
/*
Creating a logger for saving the Https interception Hooks  	 
*/
const logger = RequestLogger({url}, {
    logResponseHeaders	: true,
	logRequestHeaders: true ,
	logResponseBody:    true,
	logRequestBody: true
});
/*
A function for saving the http logging request
*/
function mylogging(logg)
{
	 let r  = logg.requests[0].response.headers ;
	 r = JSON.stringify(r) ;
	 console.log(r) ;
	 fs.writeFileSync(filePath,r);
}
/*
Setting Json file for Entering Different fields Values 
*/
let rawdata = fs.readFileSync('testFieldValues.json');
let parsedValues = JSON.parse(rawdata);
var attrValue = new Array()  ;

function setData(Obj)
{
for (var key in Obj){
        attrValue[key] = Obj[key];
    }
}

/*
all assertions are done on the url of the page (checking that the submit request is processed or not)
*/

/*
using the Fixture global function for Creating Tests and including the page url, and adding the requestHooks 
*/

fixture `TEST`
	.disablePageCaching `TEST`
    .page(url)
    .requestHooks(logger);		
/*
Verifying that all fields are empty on page
*/
test('checking Different Fields', async t => {  
	  
	try
	{
	await t
	 .expect(page.firstName.value).eql('','First Name Field is not empty')
	 .expect(page.secondName.value).eql('','Second Name Field is not empty')
	 .expect(page.mobileNumber.value).eql('','Mobile Field is not empty')
	 .expect(page.email.value).eql('','Email Field is not empty')
	 .expect(page.passWord.value).eql('','Password Field is not empty')	
	 .expect(page.passWordConfirm.value).eql('','Confirm Password Field is not empty')
	}
	catch(e)
	{
		console.log('there is a field not empty with error:', e.errMsg) 
	}
});
	
/*
Test Responsible for checking of casual way with no errors
*/
test('casual test', async t => {
	let obj = parsedValues.Test2 ;
	setData(obj) ;
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	 .expect(getPageUrl()).contains('account','did not accept right inputs');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
	 mylogging(logger) ;
});
/*
Testing First Name by inserting lowercase letters as first letter
*/

test('Lower case Letter', async t => {
	let obj = parsedValues.Test3 ;
	setData(obj) ;	
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	 .expect(getPageUrl()).contains('register','Assertion due to Lower case Letter');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});

/*
Testing First Name Containing unauthorized symbols 
*/
test('First Name Contain Symbols and numbers', async t => {  
	
	let obj = parsedValues.Test4 ;
	setData(obj) ;
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	 .expect(getPageUrl()).contains('register','error due to symbols tolerance in first name');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});

/*
Checking second name which has un-authorized symbols
*/
test('Second Name Contain Symbols and numbers', async t => {  
	let obj = parsedValues.Test5 ;
	setData(obj) ;
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	 .expect(getPageUrl()).contains('register','error due to symbols tolerance in second name ');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});


/*
Checking phone Number by entering letters in phone number field
*/

test('Phone Number contains letters', async t => {  
	let obj = parsedValues.Test6 ;
	setData(obj) ;
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	.expect(getPageUrl()).contains('register','register','error due to tolerance in phone numbers (phone number contain letters)');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});

/*
Phone Numbers are less than 6 by entering a less than 6 phone number
*/

	 
test('Phone Numbers are less than 6', async t => {  
	
	let obj = parsedValues.Test7 ;
	setData(obj) ;
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	.expect(getPageUrl()).contains('register','error due to tolerance in phone numbers (less than 6)');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});

/*
Siging up using e-mail the casual way
*/
test('E-mail sign up', async t => {  
	let obj = parsedValues.Test8 ;
	setData(obj) ;
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	.expect(getPageUrl()).contains('account','error due to E-mail');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});

/*
signing by an E-mail already exist
*/


test('E-mail already exist', async t => {  
	let obj = parsedValues.Test9 ;
	setData(obj) ;
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	.expect(getPageUrl()).contains('register','E-mail already exist is not supported');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});

/*
checking for e-mail structure, by not adding @ sign to mail
*/

test('wrong e-mail structure', async t => {  
	let obj = parsedValues.Test10 ;
	setData(obj) ;
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	.expect(getPageUrl()).contains('register','error due to E-mail doesnot contain @');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});

/*
checking Entering different password and confirmed password
*/

test('Different passwords', async t => {  
	let obj = parsedValues.Test11 ;
	setData(obj) ;
	
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	.expect(getPageUrl()).contains('register','error due to different passwords');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});
/*
Checking Giving wrong E-mail Domain  
*/

test('Invalid E-mail Domain', async t => {  
	let obj = parsedValues.Test12 ;
	setData(obj) ;
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	.expect(getPageUrl()).contains('register','error due to Writing Invalid E-mail domain like p2@gg.com');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});
/*
Invalid Email .com .. part  
*/
test('Invalid E-mail', async t => {  
	let obj = parsedValues.Test13 ;
	setData(obj) ;
	await t 
	 /*
	 Filling first name
	 */
     .typeText(page.firstName,attrValue.firstName) 
	 /*
	 Fillin last name
	 */
	 .typeText(page.secondName,attrValue.secondName)
	 /*
	 Filling the Mobile Nupage.mobileNumberer
	 */
	 .typeText(page.mobileNumber,attrValue.mobileNumber)
	 /*
	 Email req
	 */
	 .typeText(page.email,attrValue.Email)
	 /*
	 ُPassword confirmation
	 */
	 .typeText(page.passWord,attrValue.passWord)
	 /*
	 Password confirmation
	 */
	 .typeText(page.passWordConfirm,attrValue.passWordConfirm)
	 /*
	 Pushing the submit button
	 */
	 .click(page.submitButton)
	 /*
	 Checking the Interceptor logger
	 */
	 .expect(logger.contains(r => r.response.statusCode === 200)).ok()
	 /*
	 Assertion Checking for the Test Subject
	 */
	.expect(getPageUrl()).contains('register','error due to Page tolerance to wrong e-mail strucutre .com -.net');
	 /*
	 Creating a file for saving the interceptor logger and writing on it 
	 */
     mylogging(logger) ;
});





