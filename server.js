const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
