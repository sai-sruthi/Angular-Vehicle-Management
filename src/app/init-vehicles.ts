export class Init{
    load(){
        if(localStorage.getItem('vehicles')==null || localStorage.getItem('vehicles')==undefined){
        console.log('No requests');
           var vehicles=[{
                id:1,
                firstname:"FirstName1",
                lastname:"LastName1",
                vehicleRegNo:"Vehicle1",
                mobileNo:"mobile1",
                address:"address1",
                pickupDta:5/31/2017,
                returnDate:1/6/2017
                            },{
                id:2,
                firstname:"FirstName2",
                lastname:"LastName2",
                vehicleRegNo:"Vehicle2",
                mobileNo:"mobile2",
                address:"address2",
                pickupDta:30/5/20,
                returnDate:2/6/2017
                            },{
                                id:3,
                firstname:"FirstName3",
                lastname:"LastName3",
                vehicleRegNo:"Vehicle3",
                mobileNo:"mobile3",
                address:"address3",
                pickupDta:31/5/2017,
                returnDate:3/6/2017
                            }
            ];
            localStorage.setItem('vehicles',JSON.stringify(vehicles));
            return;
        }
        else{
console.log("Found");
        }
    }
}