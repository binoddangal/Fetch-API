

var usersDetails = ''

//Fetch API Call
fetch('https://mock-io.herokuapp.com/users')
.then(function(response){
    return response.json()
})
.then(function(details){
    usersDetails = details;


    //loop for data
    usersDetails.forEach(function(element){
        //Display firstName
        var firstName = document.createElement('div')
        firstName.innerHTML = element.firstName;
        firstName.style.paddingRight = '8px';
        firstName.style.fontSize = '18px';

        //Display lastName
        var lastName = document.createElement('div')
        lastName.innerHTML = element.lastName;
        lastName.style.paddingRight = '8px';
        lastName.style.fontSize = '18px';
        
        //Display Phone Number
        var phone = document.createElement('div')
        phone.innerHTML = element.phone;
        phone.style.fontSize = '18px';
        
        //Display Users Profile Image
        var profileImage = document.createElement('img')
        profileImage.src = element.profileImage;
        profileImage.style.borderRadius = '50%';
        profileImage.style.height = '50px';
        profileImage.style.width = '50px';
        profileImage.style.marginRight = '10px';

        //Merge usersData
        var merge = document.createElement('div')
        merge.appendChild(profileImage);
        merge.appendChild(firstName);
        merge.appendChild(lastName);
        merge.appendChild(phone);
        merge.style.display = 'flex';
        merge.style.padding = '10px';
        merge.style.alignItems = 'center';
        merge.style.width = '40%';
        merge.style.margin = '5px auto';
        merge.style.backgroundColor = '#d4f8e8'
        document.body.appendChild(merge);
    })

})