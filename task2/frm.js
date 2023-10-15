document.getElementById("sf").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rno = document.getElementById("rno").value;

    const studentInfo = {
        name: name,
        email : email,
        rno: rno,
    };

    console.log("Student Information:");
    console.log(studentInfo);
});
