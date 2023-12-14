// import logo from './logo.svg';
import './App.css';
import userData from './users.json';
import formData from './form.json';

function renderUser(client) {
  if (client.gender === "Male") {
    return (<div className='card'>
      <div className='text'><p className='blue'>{client.first_name}</p>
      <p>{client.last_name}</p>
      <p>{client.gender}</p></div>
      <img src={client.avatar} className='avatar' alt='' />
    </div>)
  } else {
    return (<div className='card'>
      <p className='red'>{client.first_name}</p>
      <p>{client.last_name}</p>
      <p>{client.gender}</p>
    </div>)
  }
}

export function RenderUsers() {
  return (
    <div className='wrapper'>
      {userData.map((user) => {
        return renderUser(user);
      })}
    </div>
  );
}

function renderInputs(data) {
  return (
    <div>
      <label>{data.label}</label>
      <input type={data.type} placeholder={data.placeholder} id={data.id} name={data.name} />
    </div>
  )
}

function renderSelected(selector) {
  return (
    <div>
      <label>{selector.label}</label>
      <select name={selector.name} id={selector.id} >
        {selector.options.map((item) => (
          <option label={item.label}></option>
        ))}
      </select>
    </div>
  )
}

function renderRadio(choosen) {
  return (
    <fieldset>
      <legend>select one of this</legend>

      {choosen.options.map((item) => (
        <div>
          <input type={choosen.type} />
          <label>{item.value}</label>
        </div>
      ))}

    </fieldset>
  )
}

export function RenderForm() {
  return (
    <div className='wrapper'>
      {formData.map((item) => {
         if (item.type === "select") {
                return renderSelected(item)
              } else if (item.type === "radio") {
                return renderRadio(item)
              } else {
                return renderInputs(item)
              }
      })}
    </div>
  );
}
