import"./Profile.css";
import React,{useState,useEffect} from "react";
function Profile(){
    const[user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        city:"",
        state:"",
        pincode:"",
    });
    useEffect(()=>{
        const savedUser=JSON.parse(localStorage.getItem("userProfile"));
        if(savedUser){
            setUser(savedUser);
        }
    },[]);
const handleChange=(e)=>{
    setUser({
        ...user,[e.target.name]:e.target.value,
    });
};
const saveProfile=()=>{
    localStorage.setItem("userProfile",JSON.stringify(user));
    alert("Profile Updated Successfully!");
};
const logout=()=>{
    localStorage.removeItem("isAdmin");
    alert("Logged Out Successfully");
    window.location.href="/login";
};
return(
    <div className="profile-container"><h2>My Profile</h2>
    <div style ={{textAlign:"center"}}>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Profile"
        width="120"
     />
    </div>
<input type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleChange}/>
<input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange}/>
<input type="text" name="phone" placeholder="Phone Number" value={user.phone} onChange={handleChange}/>
<textarea name="Address"  placeholder="Address" value={user.address} onChange={handleChange}></textarea>
<input type="text" name="city" placeholder="City" value={user.city} onChange={handleChange}/>
<input type="text" name="state" placeholder="State" value={user.state} onChange={handleChange}/>
<input type="text" name="pincode" placeholder="PIN code" value={user.pincode} onChange={handleChange}/>
<button onClick={saveProfile}>Save Changes</button>
<button onClick={logout}>Save Logout</button>
    </div>
);
}
export default Profile;