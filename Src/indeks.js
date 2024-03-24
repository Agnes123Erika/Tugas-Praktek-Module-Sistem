import Table from "./Module_1.js";

const appElement = document.getElementById("app");
const tableInstance = new Table({
  columns: ["Nama", "Umur", "Kelas", "Nilai"],
  data: [
    ["Budi", "17", "12 SMA", "85"],
    ["Dodi", "18", "12 SMA", "75"],
    ["Ekang", "16", "11 SMA", "80"],
    ["Siti", "17", "12 SMA", "90"],
  ],
});

tableInstance.render(appElement);
