import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Customer from "./components/Customer";
import CustomerAdd from "./components/CustomerAdd";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles, Theme, StyleRules } from "@material-ui/core/styles";

const styles = (theme: Theme): StyleRules => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});
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
  id: number | string;
  image: string;
}

interface Customers {
  customers: Array<CustomerArray>;
  completed?: number;
}

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

function App(props: any) {
  const { classes } = props;
  const stateInit: Customers = {
    customers: [
      {
        id: "",
        image: "",
        name: "",
        birthday: "",
        gender: "",
        job: "",
      },
    ],
    completed: 0,
  };
  const [state, setState] = useState(stateInit);

  const stateRefresh = () => {
    setState(stateInit);
    callApi()
      .then((res) => setState({ customers: res }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    callApi()
      .then((res) => setState({ customers: res }))
      .catch((err) => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  return (
    <Fragment>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.customers
              ? state.customers.map((customer: CustomerArray, idx: number) => {
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
                })
              : null}
          </TableBody>
        </Table>
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
      </Paper>
      <CustomerAdd
        file={null}
        userName=""
        birthday=""
        gender=""
        job=""
        fileName=""
        stateRefresh={stateRefresh}
      />
    </Fragment>
  );
}

export default withStyles(styles)(App);
