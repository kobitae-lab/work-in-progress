import { mergeSort } from './index.js';
import { fullRecordsArray } from './index.js';
import { fullRecords } from './index.js';

const itemsPerPage = 50;
let currentPage = 1; 



function sortNameAscending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray, "storeName");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortNameAscending = sortNameAscending;

function sortNameDescending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray, "storeName", "dsc");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortNameDescending = sortNameDescending;

function sortCostAscending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray,"cost" , "asc");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortCostAscending = sortCostAscending;

function sortCostDescending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray,"cost" , "dsc");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortCostDescending = sortCostDescending;

function sortReviewAscending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray, "review" , "asc");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortReviewAscending = sortReviewAscending;

function sortReviewDescending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray,"review", "dsc");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortReviewDescending = sortReviewDescending;

function sortXAscending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray, "x" , "asc");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortXAscending = sortXAscending;

function sortXDescending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray,"x", "dsc");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortXDescending = sortXDescending;

function sortYAscending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray,"y", "dsc");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortYAscending = sortYAscending;

function sortYDescending(): void {
    console.log("sortNameAscending");
    let ascNamesArray = mergeSort(fullRecordsArray,"y", "dsc");
    setupPagination(ascNamesArray);

}

// Attach the function to the window object to make it accessible globally
(window as any).sortYDescending = sortYDescending;


// Pagination setup function for fullRecords[]
function setupPagination(arr: fullRecords[]): void {
    const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
    const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;

    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            populateTable(arr, currentPage);
        }
    });

    nextBtn.addEventListener("click", () => {
        const totalPages = Math.ceil(arr.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            populateTable(arr, currentPage);
        }
    });

    populateTable(arr, currentPage); // Initial population of the table
}

// Populate the table with an array of fullRecords
function populateTable(arr: fullRecords[], page: number): void {
    const tableBody = document.querySelector("#table tbody") as HTMLTableSectionElement;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    tableBody.innerHTML = ""; // Clear existing table rows

    for (let i = startIndex; i < endIndex; i++) {
        if (i < arr.length) {
            const record = arr[i];
            const row = document.createElement("tr");

            // Create cells for each property in fullRecords
            const cellID = document.createElement("td");
            const cellName = document.createElement("td");
            const cellType = document.createElement("td");
            const cellCost = document.createElement("td");
            const cellReview = document.createElement("td");
            const cellX = document.createElement("td");
            const cellY = document.createElement("td");

            // Set cell text content based on fullRecords properties
            cellID.textContent = record.ID;
            cellName.textContent = record.storeName;
            cellType.textContent = record.type;
            cellCost.textContent = record.cost.toString();
            cellReview.textContent = record.review.toString();
            cellX.textContent = record.x.toString();
            cellY.textContent = record.y.toString();

            // Append each cell to the row
            row.appendChild(cellID);
            row.appendChild(cellName);
            row.appendChild(cellType);
            row.appendChild(cellCost);
            row.appendChild(cellReview);
            row.appendChild(cellX);
            row.appendChild(cellY);

            // Append the row to the table body
            tableBody.appendChild(row);
        }
    }
}
