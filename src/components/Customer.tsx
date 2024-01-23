import React from "react";

interface CustomerProps extends CustomerInfoType {
  id: string;
  image: string;
  name: string;
}
interface CustomerProfileType {
  id: string;
  image: string;
  name: string;
}
interface CustomerInfoType {
  birthday: string;
  gender: string;
  job: string;
}

const Customer = (props: CustomerProps) => {
  return (
    <div>
      <CustomerProfile id={props.id} image={props.image} name={props.name} />
      <CustomerInfo
        birthday={props.birthday}
        gender={props.gender}
        job={props.job}
      />
    </div>
  );
};

const CustomerProfile = (props: CustomerProfileType) => {
  return (
    <div>
      <img src={props.image} alt="profile" />
      <h2>
        {props.name}({props.id})
      </h2>
    </div>
  );
};

const CustomerInfo = (props: CustomerInfoType) => {
  return (
    <div>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </div>
  );
};

export default Customer;
