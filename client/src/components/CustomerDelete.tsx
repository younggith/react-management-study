import React from "react";

interface CustomerDeleteState {
  id: number;
  stateRefresh: () => void;
}

const CustomerDelete = (props: CustomerDeleteState) => {
  const deleteCustomer = (id: number): void => {
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    });
    props.stateRefresh();
  };

  return (
    <button
      onClick={(e) => {
        deleteCustomer(props.id);
      }}
    >
      삭제
    </button>
  );
};

export default CustomerDelete;
