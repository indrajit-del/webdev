function data()
{
    var a=document.getElementById("fname").value;
    var b=document.getElementById("dob").value;
    var c=document.getElementById("email").value;
    var d=document.getElementById("mnumber").value;
    var e=document.getElementById("gen").value;
    var f=document.getElementById("occ").value;
    var g=document.getElementById("idt").value;
    var h=document.getElementById("idn").value;
    var i=document.getElementById("isa").value;
    var j=document.getElementById("isd").value;
    var k=document.getElementById("iss").value;
    var l=document.getElementById("exd").value;
    if(a==""|| b==""||c==""||d==""||e==""||f==""||g==""||h==""||i==""||j==""||k==""||l=="" )
        {
            alert("you must feel all the field");
        }
}