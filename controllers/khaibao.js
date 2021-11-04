import { Form } from "../models/form.js";
// import { Form } from "../../models/form.js";
let Arronclick = document.querySelectorAll(".actions ul li a");
let Content = document.querySelectorAll(".content");
let form = new Form();
Arronclick[1].onclick = () => {
  let Fieldset = document.querySelectorAll("fieldset");
  let isValid = true;

  if (
    Fieldset[0] &&
    Fieldset[1].style.display === "none" &&
    Fieldset[2].style.display === "none"
  ) {
    let Array1 = document.querySelectorAll(" .trang1 .fieldset-content input");
    for (let theInput1 of Array1) {
      let { id, value } = theInput1;
      form[id] = value;
    }
    isValid &= form.checkValidate(
      form.ten,
      "tbTen",
      "(*) Vui lòng không để trống"
    );
    isValid &= form.checkValidate(
      form.ho,
      "tbHo",
      "(*) Vui lòng không để trống"
    );
    isValid &= form.checkValidate(
      form.email,
      "tbEmail",
      "(*) Vui lòng không để trống"
    );
    isValid &= form.checkValidate(
      form.soDienThoai,
      "tbSDT",
      "(*) Vui lòng không để trống"
    );
    isValid &= form.checkValidate(
      form.ngay,
      "tbNgay",
      "(*) Vui lòng không để trống"
    );
    isValid &= form.checkValidate(
      form.thang,
      "tbThang",
      "(*) Vui lòng không để trống"
    );
    isValid &= form.checkValidate(
      form.nam,
      "tbNam",
      "(*) Vui lòng không để trống"
    );
    isValid &= form.checkValidate(
      form.diaChi,
      "tbDiaChi",
      "(*) Vui lòng không để trống"
    );
    console.log(isValid);
    if (!isValid) {
      Arronclick[0].click();
    }
  } else {
    if (
      Fieldset[1] &&
      Fieldset[0].style.display === "none" &&
      Fieldset[2].style.display === "none"
    ) {
      let Array2 = document.querySelectorAll(
        ".trang2 .fieldset-content input, .trang2 .fieldset-content select"
      );
      console.log(Array2);
      for (let theInput of Array2) {
        let { id, value } = theInput;
        form[id] = value;
      }
      isValid &= form.checkValidate(
        form.thongTinDiChuyen,
        "tbThongTin",
        "(*) Vui lòng không để trống"
      );
      isValid &= form.checkValidate(
        form.loaiNhiem,
        "tbLoaiNhiem",
        "(*) Vui lòng không để trống"
      );
      if (!isValid) {
        Arronclick[0].click();
      }
    }
  }
  let content = ``;
  for (let tenThuocTinh in form) {
    if (tenThuocTinh !== "checkValidate") {
      content += `<li style="list-style:none ; margin-bottom" class="list-group-item d-flex justify-content-between lh-condensed">
    <span class="text-muted" style="color:red">${tenThuocTinh}:</span>
    <span class="text-muted">${form[tenThuocTinh]}</span>
    </li>
`;
    }
  }
  Arronclick[2].onclick = () => {
    document.querySelector(".content3").innerHTML += content;
  };
};
