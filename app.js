// var viz = new tableau.Viz(placeholderDiv, url, options);
// 1. create a variable to store the placeholderDiv

let viz;
const placeholderDiv = document.getElementById("VizContainer");
// 2. create a variable to store the URL
const URL =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?:language=en-US&:display_count=n&:origin=viz_share_link";
// 3. crate a varibale to store the dashboard options
const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

function initViz() {
  console.log("Viz is ready to load");
  viz = new tableau.Viz(placeholderDiv, URL, options);
}

// Listen for the content to be loaded, when finished, load the viz

document.addEventListener("DOMContentLoaded", initViz);

// Buttons
// Where are my buttons?

const exportpdfbutton = document.getElementById("ExportPDF");

const exportPPbutton = document.getElementById("ExportPP");

const exportImagebutton = document.getElementById("ExportImage");

// Listen for buttons clicked

exportpdfbutton.addEventListener("click", exportPDFfunction);

exportPPbutton.addEventListener("click", exportPPfunction);

exportImagebutton.addEventListener("click", exportImagefunction);

// What happens when buttons are clicked

function exportPDFfunction() {
  viz.showExportPDFDialog();
}

function exportPPfunction() {
  viz.showExportPowerPointDialog();
}

function exportImagefunction() {
  viz.showExportImageDialog();
}

//----------------------------------------

// Filter range buttons

const filterButton = document.getElementById("FilterButton");

filterButton.addEventListener("click", getRangeValues);

function getRangeValues() {
  const minValue = document.getElementById("MinValue").value;

  const maxValue = document.getElementById("MaxValue").value;
  console.log(minValue, maxValue);

  filterButton;
  const workbook = viz.getWorkbook();
  console.log(workbook);

  const activeSheet = workbook.getActiveSheet();
  console.log(activeSheet);
  const sheets = activeSheet.getWorksheets();

  console.log(sheets);
  const sheetToFilter = sheets[0];
  console.log(sheetToFilter);

  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", {
      min: minValue,
      max: maxValue,
    })
    .then(alert("Viz Filtered"));
}

// Need to get the active sheet and then list of worksheets

//const workbook = viz.getWorkbook();

//const activeSheet = workbook.getActiveSheet();

//const sheets = activeSheet.getWorksheets();

//console.log(sheet);

//const sheetToFilter = sheets[0];
