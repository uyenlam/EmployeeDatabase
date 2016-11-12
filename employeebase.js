// Initialize Firebase
var config = {
    apiKey: "AIzaSyANh2StiQqbe_OVE5Fold9QbYhr7CF22TY",
    authDomain: "employee-databse.firebaseapp.com",
    databaseURL: "https://employee-databse.firebaseio.com",
    storageBucket: "employee-databse.appspot.com",
    messagingSenderId: "651168611237"
};
firebase.initializeApp(config);

database = firebase.database();

//Initial varibales

var empName = "";
var empRole = "";
var startDate = "";
var months_worked = "";
var monthly_rate = 0;


$("#submit").on("click", function() {


    name = $('#employeeName').val().trim();
    empRole = $('#employeeRole').val().trim();
    startDate = $('#employeeStartDate').val().trim();
    monthly_rate = $('#employeeMonthlyRate').val().trim();

    database.ref().push({
        employeeName: name,
        empRole: empRole,
        empStartDate: startDate,
        monthly_rate: monthly_rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });
    //Don't refresh the page
    return false;

})


database.ref().on('child_added', function(childSnapshot) {

    // all records after the last continue to invoke this function
    console.log(childSnapshot.val().employeeName);
    console.log(childSnapshot.val().empRole);
    console.log(childSnapshot.val().empStartDate);
    console.log(childSnapshot.val().monthly_rate);
    console.log(childSnapshot.val().dateAdded);

    $('#fullMemberList').append('<tr><td>' + employeeName +
        '</td><td>' + empRole +
        '</td><td>' + empStartDate +
        '</td><td>' + monthly_rate + '</td></tr>');



});
