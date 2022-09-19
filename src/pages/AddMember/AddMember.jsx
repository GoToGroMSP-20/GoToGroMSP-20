import React from 'react'
import { Button } from '../../components/Button/Button'
import { InputField } from '../../components/InputField/InputField'
import "./AddMember.css"

export const AddMember = () => {
  return (
    <div className='addmember'>
        <h1 className="white-text">Add New Member</h1>
        <h3 className="white-text">Personal Info</h3>
        <form>
            <InputField label={"First Name"}/>
            <InputField label={"Last Name"}/>
            <InputField label={"Date of Birth"} type={"date"}/>
            <InputField label={"Email"}/>
            <InputField label={"Add Number"}/>
            <Button buttonType={"primary"} isDisabled={true}>Add Member</Button>
        </form>
    </div>
  )
}
