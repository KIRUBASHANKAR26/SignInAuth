const userDetails = document.getElementById("user-details")
userDetails.style.color = "blue"
const lsGetData = JSON.parse(localStorage.getItem('userData'))
console.log(lsGetData)
const renderUserData = (data) => {
    //console.log(data)
  let userProfile = document.createElement('div');
  userProfile.classList.add("user-profile");
    console.log(data.url);
  userProfile.innerHTML = `<img src=${data.url} alr=""/>
  <p>User Name:${data.name}</p>
  <p>User Email:${data.email}</p>
  `
  userDetails.appendChild(userProfile);
}
renderUserData(lsGetData);