export class Form {
  ten = "";
  ho = "";
  email = "";
  soDienThoai = "";
  ngay = "";
  thang = "";
  nam = "";
  diaChi = "";
  thongTinDiChuyen = "";
  loaiNhiem = "";

  checkValidate = (input, id, mess) => {
    if (input.trim() === "") {
      document.getElementById(id).innerHTML = mess;
      return false;
    }
    document.getElementById(id).innerHTML = "";
    return true;
  };
}
