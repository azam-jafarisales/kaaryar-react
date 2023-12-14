import './App.css';
import invalidEmails from './data/invalidEmails.json'
import { useState } from 'react';
import validEmails from './data/validEmails.json'
import weakPasses from './data/weak-passwords.json'
import cities from './data/cityies.json'
import skills from './data/skills.json'

function App() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmPass, setConfirmPass] = useState("")
  const [confirmPassError, setConfirmPassError] = useState("");
  const [city, setCity] = useState("");
  // const [cityError, setCityErropr] = useState("")
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState('');
  const [skill , setSkill]= useState("");
  const [skillError , setSkillError]= useState("")


  function handleSubmit(event) {

    event.preventDefault();
    const pattern = /[a-zA-Z]/
    const passPattern = /^[A-ZA-z0-9]+$/
    let newNameError = "";
    let newEmailError = "";
    let newPassError = "";
    let newConfirmPassError = "";
    let newGenderError = "";
    let newSkillsError ="";
    if (name.length === 0 || !name) {
      newNameError = "نام اجباریست"

    }
    else if (pattern.test(name)) {
      newNameError = "فارسی لطفا"
    }

    if (!email || email.length === 0) {
      newEmailError = "ایمیل اجباریست"

    }
    else if (invalidEmails.find(em => em === email)) {
      newEmailError = "ایمیل معتبر نیست"

    } else if (validEmails.find(em => em === email)) {
      newEmailError = "ایمیل تکراریست "
    }

    if (!pass || pass.length < 8) {
      newPassError = "طول رمزعبور باید حداقل 8 کاراکتر باشد"
    } else if (passPattern.test(pass)) {
      newPassError = "توی مقدار این فیلد، باید حتما از حروف بزرگ و کوچیک انگلیسی و حتما از عدد استفاده شده باشه"
    } else if (weakPasses.find(password => password === pass)) {
      newPassError = "رمز عبور وارد شده، در لیست رمزهای عبور ضعیف است"
    }

    if (!confirmPass || (confirmPass !== pass)) {
      newConfirmPassError = "تکرار رمزعبور، باید دقیقاً مشابه رمزعبور باشد"
    }

    if (gender === "") {
      newGenderError = "لطفا یک مورد را انتخاب کنید"
    }

    if(skill===""){
      newSkillsError ="لطفا یک مورد را انتخاب کنید"
    }

    if (newEmailError || newNameError || newPassError || newConfirmPassError || newGenderError || newSkillsError ) {
      setEmailError(newEmailError);
      setNameError(newNameError);
      setPassError(newPassError);
      setConfirmPassError(newConfirmPassError);
      setGenderError(newGenderError);
      setSkillError(newSkillsError)
      return;
    }
    setNameError("");
    setEmailError("");
    setPassError("");
    setSkillError("");
    setGenderError("");
    setConfirmPassError("")

  }

  function handleSets() {
    setName("");
    setNameError("");
    setEmail("");
    setEmailError("")
    setGender("");
    setGenderError("");
    setCity("");
    setConfirmPass("");
    setConfirmPassError("")
    setPass("");
    setPassError("")
  }



  return (
    <form onSubmit={handleSubmit}>
      <p>{gender}</p>

      <label>
        <h2>name and last name</h2>
        <input type='text' placeholder='name & lastName' value={name} onChange={(e)=>{setName(e.target.value)}} required />
        <p>{nameError}</p>
      </label>
      <hr />
      <label>
        <h2>Enter Email</h2>
        <input type='email' placeholder='Email ...' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <p>{emailError}</p>
      </label>
      <hr />
      <label>
        <h2>password</h2>
        <input type='password' placeholder='password' value={pass} onChange={(e)=>{setPass(e.target.value)}} />
        <p>{passError}</p>
      </label>

      <hr />
      <label>
        <h2>confirm password</h2>
        <input type='password' placeholder='confirm password' value={confirmPass} onChange={(e) => { setConfirmPass(e.target.value) }} />
        <p>{confirmPassError}</p>
      </label>

      <label>
        <h2>city</h2>
        <select value={city} onChange={(e) => setCity(e.target.value)} >
          <option value="">انتحاب کنید</option>
          {cities.map((city) => (<option>{city}</option>))}
        </select>
      </label>
      <hr />
      <h2>Gender</h2>
      <label htmlFor='male'>
        <input type='radio' value="male" name='gender' onChange={(e) => setGender(e.target.value)} />مرد
      </label>
      <label htmlFor='female'>

        <input type='radio' value="female" name='gender' onChange={(e) => setGender(e.target.value)} />زن
      </label>
      <label htmlFor='prefer not to say'>
        <input type='radio' value=" prefer not to say" name='gender' onChange={(e) => setGender(e.target.value)} /> نامشخص
      </label>
      <p>{genderError}</p>
      <hr />
      <label>
        <h2>skills</h2>
        {skills.map((item)=>(<label htmlFor={item}><input type='checkbox' value={item} onChange={(e)=>setSkill(e.target.checked)}/>{item}</label>))}
       <p>{String(skillError)}</p>
      </label>
      <hr />
      <button type='submit' onClick={handleSubmit} >submit</button>
      <button type='reset' onClick={handleSets}>reset</button>
    </form>
  );
}

export default App;
