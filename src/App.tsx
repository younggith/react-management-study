import React, { Fragment } from "react";
import "./App.css";
import Customer from "./components/Customer";

type CustomerType = string | number; // type지정할떄는 보통 대문자
type Member = {
  [key: string]: string; // key이름은 아무거나 적어도 상관없다 type만 된다 interface는 X
};
// const customer = {
//   name: "홍길동",
//   birthday: "941003",
//   gender: "남자1",
//   job: "대학생2",
// };
interface CustomerArray {
  name: string;
  birthday: string;
  gender: string;
  job: string;
  id: string;
  image: string;
}
const customers: CustomerArray[] = [
  {
    id: "dudrl1",
    image: "https://placeimg.com/64/64/any",
    name: "홍길동",
    birthday: "941003",
    gender: "남자1",
    job: "대학생2",
  },
  {
    id: "dudrl2",
    image: "https://placeimg.com/64/64/1",
    name: "나동빈",
    birthday: "001003",
    gender: "여자22",
    job: "백수",
  },
  {
    id: "dudrl3",
    image: "https://placeimg.com/64/64/2",
    name: "테스터",
    birthday: "981003",
    gender: "중성",
    job: "사업자",
  },
  {
    id: "dudrl444",
    image: "https://placeimg.com/64/64/3",
    name: "후니",
    birthday: "241003",
    gender: "강아지",
    job: "음식점",
  },
];
const customer: {
  name: string;
  birthday: string;
  gender: string;
  job: string;
  id: string;
  image: string;
} = {
  id: "dudrl1",
  image: "https://placeimg.com/64/64/any",
  name: "홍길동",
  birthday: "941003",
  gender: "남자1",
  job: "대학생2",
};

function App() {
  return (
    <Fragment>
      {customers.map((customer, idx) => {
        return (
          <Customer
            key={customer.id + "_" + idx}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        );
      })}
      {/* <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      /> */}
    </Fragment>
  );
}

export default App;
