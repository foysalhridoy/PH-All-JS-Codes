// const subject = "bangla";
// const book = "BANGLa";

// console.log(book.toLowerCase);
// if(subject === book){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

const emailUserProvided = 'hridoy@Mia.com';
const emailStoredInDatabase = 'hridoy@MIA.com';

if(emailUserProvided.toLowerCase() === emailStoredInDatabase.toLowerCase()){
    console.log('user can log in');
}
else{
    console.log('user can not log in');
}