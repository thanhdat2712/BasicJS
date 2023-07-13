// var fullName = 'adaseasdasdas';

// var age= 26;
// alert(fullName);
// alert(age)
// console.log("day la log")
// let x, y;
// x = 5 + 6;
// y = x * 10
// console.log(y);

// function myFunction() {
//     document.getElementById("demo").innerHTML= "Paragraph changed";
// }
// let your_name = null;
// let name_default = "Khong ten";
// let value = your_name ?? name_default;
// console.log(value);

// function toCelsius(f) {
//     return (5/9) * (f-32);
//   }
//   let value = toCelsius();
// document.getElementById("demo").innerHTML = value;

// let  =  text = "The temperature is " + toCelsius(77) + " Celsius.";
// document.getElementById("demo").innerHTML = text
// function toCelsius(f) {
//     return (5/9) * (f-32);
//   }
//   let value = toCelsius();
// document.getElementById("demo").innerHTML = value;

// Object:
// const car = {type:"Volvo", model: "500", color: "Black" };
// document.getElementById("demo").innerHTML = car.model

// const main = document.querySelector("main")
// main.innerHTML = "hello"

// var myString = 'Ham JS trong tai F8'

//===================================
var array = [];
//Bai 1:

function myFunction() {
  document.getElementById("bai1").style.display = "block";
  document.getElementById("btnBai1").style.display = "none";
}

// Hàm hiển thị mảng
function displayArray() {
  var arrayDisplay = document.getElementById("arrayDisplay");
  arrayDisplay.innerHTML = "";

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    arrayDisplay.innerHTML += element + " ";
  }
}

// Hàm thêm phần tử vào mảng
function addToArray() {
  var inputValue = document.getElementById("inputValue").value;
  if (inputValue !== "") {
    if (array.length < 10) {
      array.push(inputValue);
      displayArray();
    } else {
      alert("Mảng đã đạt đến giới hạn 10 phần tử.");
    }
  }
}

// Hàm nhân đôi mảng
function doubleArray() {
  array = array.map((a) => a * 2);
  displayArray();
}
// function myFunction1(num) {
//   return num * 2;

// }

// Hàm sửa phần tử trong mảng
function editArray() {
  var index = prompt(
    "Nhập chỉ số của phần tử cần sửa (0 - " + (array.length - 1) + "):"
  );
  var newValue = prompt("Nhập giá trị mới:");
  if (index >= 0 && index < array.length) {
    array[index] = newValue;
    displayArray();
  } else {
    alert("Không tìm thấy phần tử của mảng.");
  }
}

// Hàm xóa phần tử khỏi mảng
function deleteArray() {
  var index = prompt(
    "Nhập chỉ số của phần tử cần xóa (0 - " + (array.length - 1) + "):"
  );
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
    displayArray();
  } else {
    alert("Không tìm thấy phần tử của mảng");
  }
}
// Hàm sắp xếp theo thứ tự tăng dần:
function sortIncreaseArray() {
  array.sort(function (a, b) {
    return a - b;
  });
  displayArray();
}
// Hàm sắp xếp theo thứ tự giảm dần
function sortDecreaseArray() {
  array.reverse(function (a, b) {
    return a - b;
  });
  displayArray();
}
// Bai 2: nhập chuỗi có độ lớn 10 kí tự:
function myFunction2() {
  document.getElementById("bai2").style.display = "block";
  document.getElementById("btnBai2").style.display = "none";
}
// Hiển thị chuỗi
function displayString() {
  const input = document.getElementById("inputString").value;
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";
  const textNote = document.createTextNode(input);
  if (textNote.length >= 10) {
    outputElement.appendChild(textNote);
  } else {
    alert("Chuỗi có độ dài lớn hơn 10 kí tự");
  }
}
//Hiển thị độ dài chuỗi
function displayLength() {
  const input = document.getElementById("inputString").value;
  const outputElement = document.getElementById("output");
  const resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "Độ dài chuỗi: " + outputElement.childNodes[0].nodeValue.length;
}
// Hàm  xóa kĩ tự chuỗi
function deleteString() {
  const input = document.getElementById("inputString").value;
  const output = document.getElementById("output");
  const deleteIndex = prompt("Nhập vị trí bắt đầu xóa: ");
  const deleteLength = prompt("Nhập số kí tự cần xóa: ");
  const modifiedString =
    output.innerText.slice(0, deleteIndex) +
    output.innerText.slice(parseInt(deleteIndex) + parseInt(deleteLength));
  const outputElement = document.getElementById("outString");
  outputElement.innerHTML = "";
  const textNode = document.createTextNode(modifiedString);
  outputElement.appendChild(textNode);
}
// Hàm thêm chuỗi
function insertString() {
  const input = document.getElementById("inputString").value;
  const output = document.getElementById("output");
  const insertIndex = prompt("Nhập vị trí cần chèn chuỗi: ");
  const insertString = prompt("Nhập chuỗi cần chèn: ");
  const modifiedString =
    output.innerText.slice(0, insertIndex) +
    insertString +
    output.innerText.slice(insertIndex);
  const outputElement = document.getElementById("outString");
  outputElement.innerText = modifiedString;

  // const textNode = document.createTextNode(modifiedString);
  // outputElement.appendChild(textNode);
}
// Hàm thay thế chuõi
function replaceString() {
  const input = document.getElementById("inputString").value;
  const output = document.getElementById("output");

  const selectString = prompt("Nhập chuỗi cần thay thế:");
  let isExit = output.innerText.includes(selectString);
  if (!isExit) {
    alert("Chuỗi bạn tìm không tồn tại");
    return;
  }
  const replaceWith = prompt("Nhập chuỗi thay thế:");

  const modifiedString = output.innerText.replace(selectString, replaceWith);
  const outputElement = document.getElementById("outString");
  outputElement.innerText = modifiedString;
  // const textNode = document.createTextNode(modifiedString);
  // outputElement.appendChild(textNode);
}
function upperCase() {
  const input = document.getElementById("inputString").value;
  const outputElement = document.getElementById("output");
  const resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "Chuỗi in hoa: " +
    outputElement.childNodes[0].nodeValue.toLocaleUpperCase();
}
function lowerCase() {
  const input = document.getElementById("inputString").value;
  const outputElement = document.getElementById("output");
  const resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "Chuỗi in thường: " +
    outputElement.childNodes[0].nodeValue.toLocaleLowerCase();
}
// Bai 3:
// Dữ liệu học sinh:
var students = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 15,
    gender: "Nam",
    literature: 8.5,
    math: 9,
    total: 17.5,
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    age: 15,
    gender: "Nữ",
    literature: 9,
    math: 9,
    total: 18,
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    age: 15,
    gender: "Nữ",
    literature: 7,
    math: 7,
    total: 14,
  },
  {
    id: 4,
    name: "Nguyễn Văn D",
    age: 15,
    gender: "Nữ",
    literature: 9.5,
    math: 8,
    total: 17.5,
  },
];
function generateStudentTable() {
  var table = document.getElementById("studentTable");

  for (var i = 0; i < students.length; i++) {
    let student = students[i];
    console.log(1);

    var row = document.createElement("tr");
    console.log(row);
    row.innerHTML =
      "<td>" +
      student.id +
      "</td>" +
      "<td>" +
      student.name +
      "</td>" +
      "<td>" +
      student.age +
      "</td>" +
      "<td>" +
      student.gender +
      "</td>" +
      "<td>" +
      student.literature +
      "</td>" +
      "<td>" +
      student.math +
      "</td>" +
      "<td>" +
      student.total +
      "</td>";

    table.appendChild(row);
  }
}

// Hiển thị học sinh có điểm toán cao nhất, văn cao nhất và tổng điểm cao nhất
function displayHighestScores() {
  var highestMath = 0;
  var highestLiterature = 0;
  var highestTotal = 0;
  var highestMathStudent = null;
  var highestLiteratureStudent = null;
  var highestTotalStudent = null;

  for (var i = 0; i < students.length; i++) {
    var student = students[i];

    if (student.math > highestMath) {
      highestMath = student.math;
      highestMathStudent = student;
    }

    if (student.literature > highestLiterature) {
      highestLiterature = student.literature;
      highestLiteratureStudent = student;
    }

    if (student.total > highestTotal) {
      highestTotal = student.total;
      highestTotalStudent = student;
    }
  }

  alert(
    "Học sinh có điểm toán cao nhất: " +
      highestMathStudent.name +
      "\nHọc sinh có điểm văn cao nhất: " +
      highestLiteratureStudent.name +
      "\nHọc sinh có tổng điểm cao nhất: " +
      highestTotalStudent.name
  );
}
// Sắp xép théo môn toán
function sortByMath(ascending) {
  students.sort(function (a, b) {
    return ascending ? a.math - b.math : b.math - a.math;
  });

  refreshTable();
}
// Sắp xếp theo môn văn
function sortByLiterature(ascending) {
  students.sort(function (a, b) {
    return ascending
      ? a.literature - b.literature
      : b.literature - a.literature;
  });

  refreshTable();
}
// Sắp xếp theo tổng điểm
function sortByTotalScores(ascending) {
  students.sort(function (a, b) {
    return ascending ? a.total - b.total : b.total - a.total;
  });
  refreshTable();
}
// Cập nhật bảng sau khi sắp xếp
function refreshTable() {
  var table = document.getElementById("studentTable");

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  generateStudentTable();
}
//Hiên thị bảng danh sách học sinh
generateStudentTable();
