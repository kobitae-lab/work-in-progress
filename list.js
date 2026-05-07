var data2 = loadJSON("../DO_NOT_TOUCH/data.json");
function sortNameAscending(storeName) {
    var n = storeName.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeInc2(storeName, left, mid, right < n ? right : n);
            }
        }
    }
    return storeName;
}
function sortNameDescending(storeName) {
    var n = storeName.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeDec(storeName, left, mid, right < n ? right : n);
            }
        }
    }
    // document.getElementById("time").textContent = performance.now() + ' ms';
    return storeName;
}
function sortCostAscending(cost) {
    var n = cost.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeInc(cost, left, mid, right < n ? right : n);
            }
        }
    }
    // document.getElementById("time").textContent = performance.now() + ' ms';
    return cost;
}
function sortCostDescending(cost) {
    var n = cost.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeDec(cost, left, mid, right < n ? right : n);
            }
        }
    }
    // document.getElementById("time").textContent = performance.now() + ' ms';
    return cost;
}
function sortReviewAscending(review) {
    var n = review.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeInc(review, left, mid, right < n ? right : n);
            }
        }
    }
    // document.getElementById("time").textContent = performance.now() + ' ms';
    return review;
}
function sortReviewDescending(review) {
    var n = review.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeDec(review, left, mid, right < n ? right : n);
            }
        }
    }
    // document.getElementById("time").textContent = performance.now() + ' ms';
    return review;
}
function sortXAscending(x) {
    var n = x.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeInc(x, left, mid, right < n ? right : n);
            }
        }
    }
    // document.getElementById("time").textContent = performance.now() + ' ms';
    return x;
}
function sortXDescending(x) {
    var n = x.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeDec(x, left, mid, right < n ? right : n);
            }
        }
    }
    // document.getElementById("time").textContent = performance.now() + ' ms';
    return x;
}
function sortYAscending(y) {
    var n = y.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeInc(y, left, mid, right < n ? right : n);
            }
        }
    }
    // document.getElementById("time").textContent = performance.now() + ' ms';
    return y;
}
function sortYDescending(y) {
    var n = y.length;
    //Iterative merging
    for (var size = 1; size < n; size *= 2) {
        for (var left = 0; left < n; left += 2 * size) {
            var mid = left + size;
            var right = left + 2 * size;
            if (mid < n) {
                mergeDec(y, left, mid, right < n ? right : n);
            }
        }
    }
    // document.getElementById("time").textContent = performance.now() + ' ms';
    return y;
}
function mergeInc(arr, left, mid, right) {
    var Lside = mid - left;
    var Rside = right - mid;
    //Create temp arrays for left and right
    var Larr = new Array(Lside);
    var Rarr = new Array(Rside);
    //Fill temp arrays
    for (var i_1 = 0; i_1 < Lside; i_1++) {
        Larr[i_1] = arr[left + i_1];
    }
    for (var j_1 = 0; j_1 < Rside; j_1++) {
        Rarr[j_1] = arr[mid + j_1];
    }
    //Merge temp arrays back into the array
    var i = 0, j = 0, k = left;
    while (i < Lside && j < Rside) {
        if (Larr[i] <= Rarr[j]) {
            arr[k++] = Larr[i++];
        }
        else {
            arr[k++] = Rarr[j++];
        }
    }
    while (i < Lside) {
        arr[k++] = Larr[i++];
    }
    while (j < Rside) {
        arr[k++] = Rarr[j++];
    }
}
function mergeDec(arr, left, mid, right) {
    var Lside = mid - left;
    var Rside = right - mid;
    //Create temp arrays for left and right
    var Larr = new Array(Lside);
    var Rarr = new Array(Rside);
    //Fill temp arrays
    for (var i_2 = 0; i_2 < Lside; i_2++) {
        Larr[i_2] = arr[left + i_2];
    }
    for (var j_2 = 0; j_2 < Rside; j_2++) {
        Rarr[j_2] = arr[mid + j_2];
    }
    //Merge temp arrays back into the array
    var i = 0, j = 0, k = left;
    while (i < Lside && j < Rside) {
        if (Larr[i] > Rarr[j]) {
            arr[k++] = Larr[i++];
        }
        else {
            arr[k++] = Rarr[j++];
        }
    }
    while (i < Lside) {
        arr[k++] = Larr[i++];
    }
    while (j < Rside) {
        arr[k++] = Rarr[j++];
    }
}
function mergeInc2(arr, left, mid, right) {
    var i = left; // Starting index for the left subarray
    var j = mid; // Starting index for the right subarray
    var k = left; // Starting index for the merged portion
    // Temporary array to help in merging (in-place)
    var tempArr = new Array(right - left);
    // Merge two halves into tempArr
    while (i < mid && j < right) {
        if (arr[i] <= arr[j]) {
            tempArr[k - left] = arr[i];
            i++;
        }
        else {
            tempArr[k - left] = arr[j];
            j++;
        }
        k++;
    }
    // If there are remaining elements in the left half
    while (i < mid) {
        tempArr[k - left] = arr[i];
        i++;
        k++;
    }
    // If there are remaining elements in the right half
    while (j < right) {
        tempArr[k - left] = arr[j];
        j++;
        k++;
    }
    // Copy the sorted elements from tempArr back to the original array
    for (var i_3 = left; i_3 < right; i_3++) {
        arr[i_3] = tempArr[i_3 - left];
    }
}
// Pagination logic
var rowsPerPage = 100;
var currentPage = 1;
// Render a specific page of data
function renderPage(page) {
    var tableBody = document.querySelector("#storeTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows
    var startIndex = (page - 1) * rowsPerPage;
    var endIndex = startIndex + rowsPerPage;
    // Manually iterate over the array and display the rows for the current page
    var fragment = document.createDocumentFragment();
    for (var i = startIndex; i < endIndex && i < data.storeName.length; i++) {
        var row = document.createElement("tr");
        var indexCell = document.createElement("td");
        indexCell.textContent = (i + 1).toString(); // Display the correct index (1-based)
        row.appendChild(indexCell);
        var valueCell = document.createElement("td");
        valueCell.textContent = data.storeName[i];
        row.appendChild(valueCell);
        fragment.appendChild(row);
    }
    tableBody.appendChild(fragment);
}
// Create pagination controls
function setupPagination() {
    var totalPages = Math.ceil(data.storeName.length / rowsPerPage);
    var paginationContainer = document.querySelector("#pagination");
    paginationContainer.innerHTML = ""; // Clear previous pagination buttons
    var _loop_1 = function (i) {
        var button = document.createElement("button");
        button.textContent = "".concat(i);
        button.onclick = function () { return goToPage(i); };
        paginationContainer.appendChild(button);
    };
    for (var i = 1; i <= totalPages; i++) {
        _loop_1(i);
    }
}
// Change page and render the corresponding data
function goToPage(page) {
    currentPage = page;
    renderPage(currentPage);
}
// Initialize the table and pagination on page load
function initialize() {
    setupPagination();
    renderPage(currentPage);
}
// Call the initialize function on page load
initialize();
// Expose functions globally
window.sortNameAscending = sortNameAscending;
window.sortNameDescending = sortNameDescending;
window.sortCostAscending = sortCostAscending;
window.sortCostDescending = sortCostDescending;
window.sortReviewAscending = sortReviewAscending;
window.sortReviewDescending = sortReviewDescending;
window.sortXAscending = sortXAscending;
window.sortXDescending = sortXDescending;
window.sortYAscending = sortYAscending;
window.sortYDescending = sortYDescending;
