import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

interface CustomerProps extends CustomerInfoType {
  id: number | string;
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
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell>
        <img src={props.image} alt="profile" />
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow>
  );
};

export default Customer;
