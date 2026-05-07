export { 
  constructNamesArray, 
  constructTypesArray, 
  constructCostArray, 
  constructReviewArray, 
  constructXcoordArray, 
  constructYcoordArray, 
  constructFullRecordsArray, 
  mergeSort, 
  binarySearch,
  rangeSearchUsingBinarySearch,
  fullRecords,
  fullRecordsArray 
};

// Don't remove this
interface Data {
  ID: string[];
  storeName: string[];
  type: string[];
  cost: number[];
  review: number[];
  x: number[];
  y: number[];
}

const data: Data = loadJSON("../DO_NOT_TOUCH/data.json") as Data; // Don't delete this line. All your data is here. It does take a few seconds for Replit to load the data because it's so large.

//global declarations
interface restNames { storeName: string; ID: string };
interface restTypes { type: string; ID: string };
interface restCost { cost: number; ID: string };
interface restReviews { review: number; ID: string };
interface restXCoord { x: number; ID: string };
interface restYCoord { y: number; ID: string };
interface fullRecords { ID: string; storeName: string; type: string; cost: number; review: number; x: number; y: number };
interface perfRecords { name: string, value: number, comments: string };

//The Global declarations for arrays
let namesArray: restNames[] = [];
let sortedNamesArray: restNames[] = [];

let typesArray: restTypes[] = [];
let sortedtypesArray: restTypes[] = [];

let costArray: restCost[] = [];
let sortedcostArray: restCost[] = [];

let reviewArray: restReviews[] = [];
let sortedReviewArray: restReviews[] = [];

let xCoordArray: restXCoord[] = [];
let sortedxCoordArray: restXCoord[] = [];

let yCoordArray: restYCoord[] = [];
let sortedyCoordArray: restYCoord[] = [];

let fullRecordsArray: fullRecords[] = [];
let sortedfullRecordsArray: fullRecords[] = [];

//global declarations for time variables

let namesSortTime: number;
let typeSortTime: number;
let reviewSortTime: number;
let costSortTime: number;
let xSortTime: number;
let ySortTime: number;
let fullRecordsSortTime: number;

// We are constrcuting different arrays as it is easy to sort based on individual
// search items and sort each of these arrays. This will provide faster search
function constructNamesArray(storeName: string[], ID: string[]): restNames[] {
  const namesData: restNames[] = [];
  //Finding the minimum of the length so that in case 1 is smaller it will not crash
  const namesLength = data.storeName.length;
  const idLength = data.ID.length;
  let newArraylength: number;
  if (namesLength < idLength) {
    newArraylength = namesLength
  }
  else {
    newArraylength = idLength
  }
  for (let i = 0; i < newArraylength; i++) {
    const namesObj: restNames = {
      storeName: storeName[i],
      ID: ID[i]
    }
    namesData[i] = namesObj;
  }
  return namesData

}

function constructTypesArray(type: string[], ID: string[]): restTypes[] {
  const typesData: restTypes[] = [];
  //Finding the minimum of the length so that in case 1 is smaller it will not crash
  const typesLength = data.type.length;
  const idLength = data.ID.length;
  let newArraylength: number;
  if (typesLength < idLength) {
    newArraylength = typesLength
  }
  else {
    newArraylength = idLength
  }

  for (let i = 0; i < newArraylength; i++) {
    const namesObj: restTypes = {
      type: type[i],
      ID: ID[i]
    }
    typesData[i] = namesObj;
  }
  return typesData
}

function constructCostArray(cost: number[], ID: string[]): restCost[] {
  const costsData: restCost[] = [];
  //Finding the minimum of the length so that in case 1 is smaller it will not crash
  const costsLength = data.cost.length;
  const idLength = data.ID.length;
  let newArraylength: number;
  if (costsLength < idLength) {
    newArraylength = costsLength
  }
  else {
    newArraylength = idLength
  }

  for (let i = 0; i < newArraylength; i++) {
    const namesObj: restCost = {
      cost: cost[i],
      ID: ID[i]
    }
    costsData[i] = namesObj;
  }
  return costsData
}

function constructReviewArray(review: number[], ID: string[]): restReviews[] {
  const reviewsData: restReviews[] = [];
  //Finding the minimum of the length so that in case 1 is smaller it will not crash
  const reviewsLength = data.review.length;
  const idLength = data.ID.length;
  let newArraylength: number;
  if (reviewsLength < idLength) {
    newArraylength = reviewsLength
  }
  else {
    newArraylength = idLength
  }

  for (let i = 0; i < newArraylength; i++) {
    const namesObj: restReviews = {
      review: review[i],
      ID: ID[i]
    }
    reviewsData[i] = namesObj;
  }
  return reviewsData
}



function constructXcoordArray(x: number[], ID: string[]): restXCoord[] {
  const xcoordsData: restXCoord[] = [];
  //Finding the minimum of the length so that in case 1 is smaller it will not crash
  const xcoordsLength = data.x.length;
  const idLength = data.ID.length;
  let newArraylength: number;
  if (xcoordsLength < idLength) {
    newArraylength = xcoordsLength
  }
  else {
    newArraylength = idLength
  }

  for (let i = 0; i < newArraylength; i++) {
    const namesObj: restXCoord = {
      x: x[i],
      ID: ID[i]
    }
    xcoordsData[i] = namesObj;
  }
  return xcoordsData
}

function constructYcoordArray(y: number[], ID: string[]): restYCoord[] {
  const ycoordsData: restYCoord[] = [];
  //Finding the minimum of the length so that in case 1 is smaller it will not crash
  const ycoordsLength = data.y.length;
  const idLength = data.ID.length;
  let newArraylength: number;
  if (ycoordsLength < idLength) {
    newArraylength = ycoordsLength
  }
  else {
    newArraylength = idLength
  }

  for (let i = 0; i < newArraylength; i++) {
    const namesObj: restYCoord = {
      y: y[i],
      ID: ID[i]
    }
    ycoordsData[i] = namesObj;
  }
  return ycoordsData
}


function constructFullRecordsArray(ID: string[], storeName: string[],
  type: string[], cost: number[], review: number[], x: number[], y: number[]): fullRecords[] {
  const fullRecordsData: fullRecords[] = [];
  //Finding the minimum of the length so that in case 1 is smaller it will not crash
  for (let i = 0; i < data.ID.length; i++) {
    const fullRecordsObj: fullRecords = {
      ID: ID[i],
      storeName: storeName[i],
      type: type[i],
      cost: cost[i],
      review: review[i],
      x: x[i],
      y: y[i]
    }
    fullRecordsData[i] = fullRecordsObj;
  }
  return fullRecordsData
}

function constructAll() {
  console.log("constructing & sorting all arrays")
  //constructing and sorting names array
  namesArray = constructNamesArray(data.storeName, data.ID);
  const start = performance.now();
  sortedNamesArray = mergeSort(namesArray, "storeName");
  //sortedNamesArray = mergeSort(namesArray);
  const end = performance.now();
  namesSortTime = end - start;
  console.log("name sort time", namesSortTime);

  //constructing and sorting types array
  typesArray = constructTypesArray(data.type, data.ID);
  const start1 = performance.now();
  sortedtypesArray = mergeSort(typesArray, "type");
  //sortedtypesArray = mergeSort(typesArray);
  const end1 = performance.now();
  typeSortTime = end1 - start1;

  //constructing and sorting cost array
  costArray = constructCostArray(data.cost, data.ID);
  const start2 = performance.now();
  sortedcostArray = mergeSort(costArray, "cost");
  //sortedcostArray = mergeSort(costArray);
  const end2 = performance.now();
  costSortTime = end2 - start2;

  //constructing and sorting review array
  reviewArray = constructReviewArray(data.review, data.ID);

  const start3 = performance.now();
  sortedReviewArray = mergeSort(reviewArray, "review");
  //sortedReviewArray = mergeSort(reviewArray);
  const end3 = performance.now();
  reviewSortTime = end3 - start3;

  //constructing and sorting x array
  xCoordArray = constructXcoordArray(data.x, data.ID);
  const start4 = performance.now();
  sortedxCoordArray = mergeSort(xCoordArray, "x");
  //sortedxCoordArray = mergeSort(xCoordArray);
  const end4 = performance.now();
  xSortTime = end4 - start4;

  //constructing and sorting y array
  yCoordArray = constructYcoordArray(data.y, data.ID);
  const start5 = performance.now();
  sortedyCoordArray = mergeSort(yCoordArray, "y");
  //sortedyCoordArray = mergeSort(yCoordArray);
  const end5 = performance.now();
  ySortTime = end5 - start5;

  //constructing and sorting full records array
  fullRecordsArray = constructFullRecordsArray(data.ID, data.storeName,
    data.type, data.cost, data.review, data.x, data.y);

  const fullRecordStart = performance.now();
  sortedfullRecordsArray = mergeSort(fullRecordsArray, "ID");
  //sortedfullRecordsArray = mergeSort(fullRecordsArray)
  const fullRecordEnd = performance.now();
  fullRecordsSortTime = fullRecordEnd - fullRecordStart;
}

//Had to ask Chatgpt on how to implement the keyof property to make the binary search generic
function binarySearch<T>(arr: T[], target: string | number, property: keyof T,
  findLowerBound: boolean = false, findUpperBound: boolean = false): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  // Normalize the target if it's a string
  const normalizedTarget = typeof target === "string" ? normalizeString(target) : target;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid][property];

    // Normalize the midValue if it's a string
    const normalizedMidValue = typeof midValue === "string" ? normalizeString(midValue) : midValue;

    if (normalizedMidValue === normalizedTarget) {
      result = mid;

      if (findLowerBound) {
        right = mid - 1; // Move left to find the first occurrence
      } else if (findUpperBound) {
        left = mid + 1; // Move right to find the last occurrence
      } else {
        return mid; // Exact match found, return immediately
      }
    } else if (typeof normalizedMidValue === "string" && typeof normalizedTarget === "string") {
      if (normalizedMidValue < normalizedTarget) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else if (typeof normalizedMidValue === "number" && typeof normalizedTarget === "number") {
      if (normalizedMidValue < normalizedTarget) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      return -1; // Incompatible types
    }
  }

  if (findLowerBound) {
    // If we’re looking for a lower bound, return the first element >= target
    return left < arr.length && (arr[left][property] as number) >= (normalizedTarget as number) ? left : -1;
  }

  if (findUpperBound) {
    // If we’re looking for an upper bound, return the last element <= target
    return right >= 0 && (arr[right][property] as number) <= (normalizedTarget as number) ? right : -1;
  }

  return result; // Return the index of the match if found

}

function rangeSearchUsingBinarySearch(
  arr: { cost: number; ID: string }[],
  minPrice: number,
  maxPrice: number
): { cost: number; ID: string }[] {
  const lowerBound = binarySearch(arr, minPrice, "cost", true, false);
  const upperBound = binarySearch(arr, maxPrice, "cost", false, true);

  if (lowerBound !== -1 && upperBound !== -1 && lowerBound <= upperBound) {
    return arr.slice(lowerBound, upperBound + 1);
  } else {
    return [];
  }
}

function normalizeString(str: string): string { // O(n^2)
  // Step 1: Remove special characters
  let cleanedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      cleanedStr += char;
    }
  }

  // Step 2: Remove leading and trailing spaces manually
  let start = 0;
  let end = cleanedStr.length - 1;

  while (start <= end && cleanedStr[start] === ' ') {
    start++;
  }
  while (end >= start && cleanedStr[end] === ' ') {
    end--;
  }

  // Step 3: Convert to lowercase and return the substring from start to end
  let result = "";
  for (let i = start; i <= end; i++) {
    const lowerChar = cleanedStr[i] >= 'A' && cleanedStr[i] <= 'Z'
      ? String.fromCharCode(cleanedStr[i].charCodeAt(0) + 32)
      : cleanedStr[i];
    result += lowerChar;
  }

  return result;
}

//mergeSort();

function mergeSort<T extends object>(items: T[], key: keyof T, order: 'asc' | 'dsc' = 'asc'): T[] {
  const n = items.length;
  const aux = new Array(n); // Single auxiliary array for merging

  for (let size = 1; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size;
      const right = (left + 2 * size < n ? left + 2 * size : n);
      if (mid < n) {
        merge(items, aux, left, mid, right, key, order);
      }
    }
  }
  return items;
}

function getValue<T>(item: T, key: keyof T): any {
  return item[key];
}

function merge<T>(items: T[], aux: T[], left: number, mid: number, right: number, key: keyof T, order: 'asc' | 'dsc'): void {
  // Copy elements to the auxiliary array
  for (let i = left; i < right; i++) {
    aux[i] = items[i];
  }

  // Merge back into items[]
  let i = left, j = mid, k = left;
  while (i < mid && j < right) {
    const a = getValue(aux[i], key);
    const b = getValue(aux[j], key);
    if (compare(a, b, order) <= 0) {
      items[k++] = aux[i++];
    } else {
      items[k++] = aux[j++];
    }
  }

  // Copy any remaining elements from the left half
  while (i < mid) {
    items[k++] = aux[i++];
  }
}

function compare(a: any, b: any, order: 'asc' | 'dsc'): number {
  if (a === undefined) return -1;
  if (b === undefined) return 1;
  let result: number;
  if (typeof a === "number" && typeof b === "number") {
    result = a - b;
  } else if (typeof a === "string" && typeof b === "string") {
    result = a.localeCompare(b);  //
  } else if (typeof a === "number" && typeof b === "string") {
    result = -1;
  } else if (typeof a === "string" && typeof b === "number") {
    result = 1;
  } else {
    result = 0;
  }

  // Adjust for descending order if specified
  return order === 'asc' ? result : -result;
}

// Function to calculate the distance between two points
function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Function to find restaurants between two coordinates
function findPathRestaurants(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  maxTypes: number,
  sortedRestaurants: fullRecords[]
): fullRecords[] {
  // Filter restaurants that are within the path based on x and y boundaries
  const pathRestaurants = sortedRestaurants.filter(restaurant => {
    return (
      (restaurant.x >= Math.min(startX, endX) && restaurant.x <= Math.max(startX, endX)) &&
      (restaurant.y >= Math.min(startY, endY) && restaurant.y <= Math.max(startY, endY))
    );
  });

  // Filter to unique types within the limit
  const typesFound = new Set<string>();
  const result: fullRecords[] = [];
  for (const restaurant of pathRestaurants) {
    if (typesFound.size < maxTypes && !typesFound.has(restaurant.type)) {
      typesFound.add(restaurant.type);
      result.push(restaurant);
    }
  }

  return result;
}

// Function to find the shortest path within a budget
function calculateBudgetRoute(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  budget: number,
  sortedRestaurants: fullRecords[]
): fullRecords[] {
  // Calculate all restaurants along the path
  const restaurants = findPathRestaurants(startX, startY, endX, endY, 6, sortedRestaurants);

  // Filter restaurants to fit within budget
  const budgetPath = [];
  let totalCost = 0;

  for (const restaurant of restaurants) {
    if (totalCost + restaurant.cost <= budget) {
      budgetPath.push(restaurant);
      totalCost += restaurant.cost;
    }
  }

  return budgetPath;
}

// Attach these functions to buttons
function submitBudget(): void {
  const startX = parseFloat((document.getElementById("start-x-coordinate") as HTMLInputElement).value);
  const startY = parseFloat((document.getElementById("start-y-coordinate") as HTMLInputElement).value);
  const endX = parseFloat((document.getElementById("end-x-coordinate") as HTMLInputElement).value);
  const endY = parseFloat((document.getElementById("end-y-coordinate") as HTMLInputElement).value);
  const budget = parseFloat((document.getElementById("budget") as HTMLInputElement).value);

  const results = calculateBudgetRoute(startX, startY, endX, endY, budget, sortedfullRecordsArray);
  displayRouteResults(results);
}

(window as any).submitBudget = submitBudget;

function savingFuel(): void {
  const startX = parseFloat((document.getElementById("start-x-coordinate") as HTMLInputElement).value);
  const startY = parseFloat((document.getElementById("start-y-coordinate") as HTMLInputElement).value);
  const endX = parseFloat((document.getElementById("end-x-coordinate") as HTMLInputElement).value);
  const endY = parseFloat((document.getElementById("end-y-coordinate") as HTMLInputElement).value);

  const results = findPathRestaurants(startX, startY, endX, endY, 6, sortedfullRecordsArray);
  displayRouteResults(results);
}

(window as any).savingFuel = savingFuel;

// Helper function to display results
function displayRouteResults(results: fullRecords[]): void {
  const outputDiv = document.getElementById("route-output") as HTMLElement;
  outputDiv.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    outputDiv.innerHTML = "<p>No restaurants found within the criteria.</p>";
    return;
  }

  const list = document.createElement("ul");
  for (const restaurant of results) {
    const item = document.createElement("li");
    item.textContent = `Restaurant: ${restaurant.storeName} | Type: ${restaurant.type} | Cost: ${restaurant.cost} | Location: (${restaurant.x}, ${restaurant.y})`;
    list.appendChild(item);
  }
  outputDiv.appendChild(list);
}

function submit(): void {
  //const start = performance.now();
  const restaurantName: string = (document.getElementById("name") as HTMLInputElement).value;
  const type: string = (document.getElementById("store-type") as HTMLInputElement).value;
  const xCoordinate: number = parseFloat((document.getElementById("x-coordinate") as HTMLInputElement).value);
  const yCoordinate: number = parseFloat((document.getElementById("y-coordinate") as HTMLInputElement).value);
  const minReview: number = parseInt((document.getElementById("review-input-min") as HTMLInputElement).value);
  const maxReview: number = parseInt((document.getElementById("review-input-max") as HTMLInputElement).value);
  const minPrice: number = parseInt((document.getElementById("price-input-min") as HTMLInputElement).value);
  const maxPrice: number = parseInt((document.getElementById("price-input-max") as HTMLInputElement).value);

  // Proceed only if at least one of the fields is filled
  if (restaurantName || type || !isNaN(xCoordinate) || !isNaN(yCoordinate)
    || !isNaN(minPrice) || !isNaN(maxPrice)) {

    let matchingRecords: fullRecords[] = [];
    let matchingRecordsIndex = 0;
    let nameSearchTime = -1;
    let typeSearchTime = -1;
    let minCostSearchTime = -1;
    let maxCostSearchTime = -1;

    let minReviewSearchTime = -1;
    let maxReviewSearchTime = -1;

    let xSearchTime = -1;
    let ySearchTime = -1;
    let idSearchTime = -1;


    // Perform binary search on each field if it has a value
    if (restaurantName) {
      const searchStart = performance.now();
      const nameIndex = binarySearch(sortedNamesArray, restaurantName, "storeName");
      const searchEnd = performance.now();
      nameSearchTime = searchEnd - searchStart;
      console.log("name search time", nameSearchTime);
      if (nameIndex !== -1) {
        const searchStart = performance.now();
        const idIndex = binarySearch(sortedfullRecordsArray, sortedNamesArray[nameIndex].ID, "ID");
        const searchEnd = performance.now();
        idSearchTime = searchEnd - searchStart;
        if (idIndex !== -1) {
          matchingRecords[matchingRecordsIndex] = sortedfullRecordsArray[idIndex];
          matchingRecordsIndex++;
          //console.log("name:",sortedfullRecordsArray[idIndex]);
        }

      }
    }

    if (type) {
      const typeIndex = binarySearch(sortedtypesArray, type, "type");
      if (typeIndex !== -1) {
        const searchStart = performance.now();
        const idIndex = binarySearch(sortedfullRecordsArray, sortedtypesArray[typeIndex].ID, "ID");
        const searchEnd = performance.now();
        typeSearchTime = searchEnd - searchStart;
        if (idIndex !== -1) {
          matchingRecords[matchingRecordsIndex] = sortedfullRecordsArray[idIndex];
          matchingRecordsIndex++;
          //console.log("type:",sortedfullRecordsArray[idIndex]);
        }

      }
    }

    if (!isNaN(xCoordinate)) {
      const xCoordIndex = binarySearch(sortedxCoordArray, xCoordinate, "x");
      if (xCoordIndex !== -1) {
        const searchStart = performance.now();
        const idIndex = binarySearch(sortedfullRecordsArray, sortedxCoordArray[xCoordIndex].ID, "ID");
        const searchEnd = performance.now();
        xSearchTime = searchEnd - searchStart;
        if (idIndex !== -1) {
          matchingRecords[matchingRecordsIndex] = sortedfullRecordsArray[idIndex];
          matchingRecordsIndex++;
          //console.log("x:",sortedfullRecordsArray[idIndex]);
        }

      }
    }

    if (!isNaN(yCoordinate)) {
      const searchStart = performance.now();
      const yCoordIndex = binarySearch(sortedyCoordArray, yCoordinate, "y");
      const searchEnd = performance.now();
      ySearchTime = searchEnd - searchStart;

      if (yCoordIndex !== -1) {
        const idIndex = binarySearch(sortedfullRecordsArray, sortedyCoordArray[yCoordIndex].ID, "ID");
        if (idIndex !== -1) {
          matchingRecords[matchingRecordsIndex] = sortedfullRecordsArray[idIndex];
          matchingRecordsIndex++;
          //console.log("y:",sortedfullRecordsArray[idIndex]);
        }

      }
    }

    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      const searchStart = performance.now();
      const priceRangeRecords = rangeSearchUsingBinarySearch(sortedcostArray, minPrice, maxPrice);
      const searchEnd = performance.now();
      minCostSearchTime = searchEnd - searchStart;
      maxCostSearchTime = searchEnd - searchStart;

      // Map found records by ID to the `sortedfullRecordsArray`
      for (let i = 0; i < priceRangeRecords.length; i++) {
        const record = priceRangeRecords[i];
        const idIndex = binarySearch(sortedfullRecordsArray, record.ID, "ID");
        if (idIndex !== -1) {
          matchingRecords[matchingRecordsIndex] = sortedfullRecordsArray[idIndex];
          matchingRecordsIndex++;
        }
      }
    }
    if (!isNaN(minReview)) {
      const searchStart = performance.now();
      const minReviewIndex = binarySearch(sortedReviewArray, minReview, "review");
      const searchEnd = performance.now();
      minReviewSearchTime = searchEnd - searchStart;

      if (minReviewIndex !== -1) {
        const idIndex = binarySearch(sortedfullRecordsArray, sortedReviewArray[minReviewIndex].ID, "ID");
        if (idIndex !== -1) {
          matchingRecords[matchingRecordsIndex] = sortedfullRecordsArray[idIndex];
          matchingRecordsIndex++;
          //console.log("min review:",sortedfullRecordsArray[idIndex]);
        }

      }
    }

    if (!isNaN(maxReview)) {
      const searchStart = performance.now();
      const maxReviewIndex = binarySearch(sortedReviewArray, maxReview, "review");
      const searchEnd = performance.now();
      maxReviewSearchTime = searchEnd - searchStart;
      if (maxReviewIndex !== -1) {
        const idIndex = binarySearch(sortedfullRecordsArray, sortedReviewArray[maxReviewIndex].ID, "ID");
        if (idIndex !== -1) {
          matchingRecords[matchingRecordsIndex] = sortedfullRecordsArray[idIndex];
          matchingRecordsIndex++;
          //console.log("min review:",sortedfullRecordsArray[idIndex]);
        }

      }
    }

    //sorting the matchingRecords based on name for display

    if (matchingRecordsIndex > 0) {
      createTable(mergeSort(matchingRecords, "storeName"));
    } else {
      console.log("Record not found in full records array.");
    }

    // Prepare performance data to display
    const perfData: perfRecords[] = [
      // Sort times
      { name: "Names Sort Time", value: namesSortTime, comments: "Time taken to sort names" },
      { name: "Type Sort Time", value: typeSortTime, comments: "Time taken to sort types" },
      { name: "Review Sort Time", value: reviewSortTime, comments: "Time taken to sort reviews" },
      { name: "Cost Sort Time", value: costSortTime, comments: "Time taken to sort costs" },
      { name: "X Coordinate Sort Time", value: xSortTime, comments: "Time taken to sort x-coordinates" },
      { name: "Y Coordinate Sort Time", value: ySortTime, comments: "Time taken to sort y-coordinates" },
      { name: "Full Records Sort Time", value: fullRecordsSortTime, comments: "Time taken to sort full records" },

      // Search times
      { name: "Name Search Time", value: nameSearchTime, comments: "Time taken for name search" },
      { name: "Type Search Time", value: typeSearchTime, comments: "Time taken for type search" },
      { name: "Min Cost Search Time", value: minCostSearchTime, comments: "Time taken for minimum cost search" },
      { name: "Max Cost Search Time", value: maxCostSearchTime, comments: "Time taken for maximum cost search" },
      { name: "Min Review Search Time", value: minReviewSearchTime, comments: "Time taken for minimum review search" },
      { name: "Max Review Search Time", value: maxReviewSearchTime, comments: "Time taken for maximum review search" },
      { name: "X Coordinate Search Time", value: xSearchTime, comments: "Time taken for x-coordinate search" },
      { name: "Y Coordinate Search Time", value: ySearchTime, comments: "Time taken for y-coordinate search" },
      { name: "ID Search Time", value: idSearchTime, comments: "Time taken for ID search" }
    ];
    // Display performance table
    createPerfTable(perfData);


  }
  else {
    console.log("Please fill in at least one field to search.");
  }

}

// Attach the function to the window object to make it accessible globally
(window as any).submit = submit;

function clearData(): void {
  // Array of IDs for the input fields to be cleared
  console.log("clearing Data");
  const idsToClear = [
    "name",
    "x-coordinate",
    "y-coordinate",
    "store-type",
    "review-input-min",
    "review-input-max",
    "price-input-min",
    "price-input-max"
  ];

  // Loop through each ID and clear the corresponding input field
  for (let i = 0; i < idsToClear.length; i++) {
    const inputElement = document.getElementById(idsToClear[i]) as HTMLInputElement | null;
    if (inputElement) {
      inputElement.value = ""; // Clear the input field
    }
  }

}

(window as any).clearData = clearData;

function createTable(data: fullRecords[]) { //https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
  const tableDiv = document.querySelector(".table") as HTMLElement;

  if (tableDiv) {
      // Clear any existing table inside the div
      while (tableDiv.firstChild) {
          tableDiv.removeChild(tableDiv.firstChild);
      }
 
      // Apply a class to the tableDiv for scroll styling
      tableDiv.classList.add("scrollable-table");

      // Create the table element
      const table = document.createElement("table");

      // Create the header row
      const headerRow = document.createElement("tr");
      const headers = ["ID", "Name", "Type", "Cost/Person", "Review", "x", "y"];
      
      for (let i = 0; i < headers.length; i++) {
          const th = document.createElement("th");
          th.textContent = headers[i];
          th.style.color = "black";
          headerRow.appendChild(th);
      }
      table.appendChild(headerRow);

      // Create rows for each data item
      for (let i = 0; i < data.length; i++) {
          const record = data[i];
          const row = document.createElement("tr");

          // Populate row cells
          const values = [
              record.ID,
              record.storeName,
              record.type,
              record.cost.toString(),
              record.review.toString(),
              record.x.toString(),
              record.y.toString()
          ];
          
          for (let j = 0; j < values.length; j++) {
              const cell = document.createElement("td");
              cell.textContent = values[j];
              row.appendChild(cell);
          }

          table.appendChild(row);
      }

      // Append the table to the div
      tableDiv.appendChild(table);
  }
}

function createPerfTable(data: perfRecords[]) { //https://dev.to/sohrabzia/building-a-resizable-and-sortable-html-table-with-ease-2a0e
  const tableDiv = document.querySelector(".perf-table") as HTMLElement;

  if (tableDiv) {
      // Clear any existing table inside the div
      while (tableDiv.firstChild) {
        tableDiv.removeChild(tableDiv.firstChild);
      }

      // Apply a class to the tableDiv for scroll styling
      tableDiv.classList.add("scrollable-perf-table");

      // Create the table element
      const table = document.createElement("table");
      //table.style.border = "1px solid black"; 

      // Create the header row
      const headerRow = document.createElement("tr");
      const headers = ["Name", "Value (ms)", "Comments"];

      for (let i = 0; i < headers.length; i++) {
          const th = document.createElement("th");
          th.textContent = headers[i];
          th.style.color = "black";
          headerRow.appendChild(th);
      }
      table.appendChild(headerRow);

      // Create rows for each data item
      for (let i = 0; i < data.length; i++) {
          const record = data[i];
          const row = document.createElement("tr");

          // Populate row cells
          const values = [
              record.name,
              record.value.toString(),
              record.comments
          ];

          for (let j = 0; j < values.length; j++) {
              const cell = document.createElement("td");
              cell.textContent = values[j];
              row.appendChild(cell);
          }

          table.appendChild(row);
      }

      // Append the table to the div
      tableDiv.appendChild(table);
  } else {
      console.log(".perf-table div not found"); 
  }
}
constructAll(); 