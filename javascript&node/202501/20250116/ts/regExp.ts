const regExp: RegExp = /.w+/
const regExpEmail: RegExp = 
/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/i

const regExpPhone: RegExp = 
/^\d{2,3}-\d{3,4}-\d{4}/

const regExpID: RegExp=
/^[a-z0-9_]{4,20}$/

const checkPhoneNumber: RegExp =  
/^01[[0|1|6|7|8|9]?]-?([0-9]{3,4})-?([0-9]{4})$/


const passwordCheck: RegExp = 
/(\w*\d+\w+)(\w*[A-Z]+\w)()/

const testString = "1234Az@"
console.log(testString.match( passwordCheck ));