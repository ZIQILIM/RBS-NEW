const form = document.querySelector("form")

form.addEventListener("confirm",(e)=>{
e.preventDefault()

const roomname = form.roomname.value
const location = form.location.value
const maxcapacity= form.maxcapacity.value
const availablefrom= form.availablefrom.value
const openinghours= form.openinghours.value
const closinghours= form.closinghours.value
const price= form.price.value
const promotionalcode= form.promotionalcode.value

const authenticated = authentication(roomname,location,maxcapacity,availablefrom,openinghours,price,promotionalcode)

if(authenticated){
    window.location.href ="logout.html"
}else{
    alert("WRONG PASSWORD OR USERID!")
}
})

function authentication(roomname,location,maxcapacity,availablefrom,openinghours,price,promotionalcode){
if(roomname === "any") {
return true
}else{
return false
}

}

var readonly = true;
$('.example input[type="button"]').on('click', function() {
$('.example input[type="text"]').attr('readonly', !readonly);

readonly = !readonly;
$('.example input[type="button"]').val( readonly ? 'Edit' : 'Confirm' );
return false;
});