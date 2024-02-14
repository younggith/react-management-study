import React, { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

interface CustomerAddState {
  file: File | null;
  userName: string;
  birthday: string;
  gender: string;
  job: string;
  fileName: string;
  stateRefresh: () => void;
}

type Headers = {
  headers: {
    [key: string]: string;
  };
};

const CustomerAdd = (props: CustomerAddState) => {
  const [state, setState] = useState<CustomerAddState>({
    file: null,
    userName: "",
    birthday: "",
    gender: "",
    job: "",
    fileName: "",
    stateRefresh: () => {},
  });

  const addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    if (state.file instanceof File) {
      formData.append("image", state.file);
    }
    formData.append("name", state.userName);
    formData.append("birthday", state.birthday);
    formData.append("gender", state.gender);
    formData.append("job", state.job);
    const config: Headers = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  };
  const handleFormSubmit = (event: FormEvent) => {
    console.log("handleSubmit", event.target);
    event.preventDefault();
    addCustomer().then((response: any) => {
      console.log("response", response.data);
    });
    setState({
      file: null,
      userName: "",
      birthday: "",
      gender: "",
      job: "",
      fileName: "",
      stateRefresh: () => {},
    });
    // window.location.reload();
    props.stateRefresh();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    console.log("handleFileChange", file);
    setState((prevState) => ({
      ...prevState,
      file,
      fileName: file ? event.target.value : "",
    }));
  };

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("handleValueChange", event.target);
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>고객 추가</h1>
      프로필 이미지:{" "}
      <input
        type="file"
        name="file"
        // file={state.file}
        value={state.fileName}
        onChange={handleFileChange}
      />
      <br />
      이름:{" "}
      <input
        type="text"
        name="userName"
        value={state.userName}
        onChange={handleValueChange}
      />
      <br />
      생년월일:{" "}
      <input
        type="text"
        name="birthday"
        value={state.birthday}
        onChange={handleValueChange}
      />
      <br />
      성별:{" "}
      <input
        type="text"
        name="gender"
        value={state.gender}
        onChange={handleValueChange}
      />
      <br />
      직업:{" "}
      <input
        type="text"
        name="job"
        value={state.job}
        onChange={handleValueChange}
      />
      <br />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default CustomerAdd;
