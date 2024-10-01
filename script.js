document.addEventListener("DOMContentLoaded", function () {
  // JSON data
  const chemicalData = [
    {
      id: 1,
      chemical_name: "Ammonium Persulfate",
      vendor: "LG Chem",
      density: 3525.92,
      viscosity: 60.63,
      packaging: "Bag",
      pack_size: 100,
      unit: "kg",
      quantity: 6495.18,
    },
    {
      id: 2,
      chemical_name: "Caustic Potash",
      vendor: "Formosa",
      density: 3172.15,
      viscosity: 48.22,
      packaging: "Bag",
      pack_size: 100,
      unit: "kg",
      quantity: 8751.9,
    },
    {
      id: 3,
      chemical_name: "Dimethylaminopropylamino",
      vendor: "LG Chem",
      density: 8435.37,
      viscosity: 12.62,
      packaging: "Barrel",
      pack_size: 75,
      unit: "L",
      quantity: 5964.61,
    },
    {
      id: 4,
      chemical_name: "Mono Ammonium Phosphate",
      vendor: "Sinopec",
      density: 1597.65,
      viscosity: 76.51,
      packaging: "Bag",
      pack_size: 105,
      unit: "kg",
      quantity: 8183.73,
    },
    {
      id: 5,
      chemical_name: "Ferric Nitrate",
      vendor: "DowDuPont",
      density: 364.04,
      viscosity: 14.9,
      packaging: "Bag",
      pack_size: 105,
      unit: "kg",
      quantity: 4154.33,
    },
    {
      id: 6,
      chemical_name: "n-Pentane",
      vendor: "Sinopec",
      density: 4535.26,
      viscosity: 66.76,
      packaging: "N/A",
      pack_size: "N/A",
      unit: "t",
      quantity: 6272.34,
    },
    {
      id: 7,
      chemical_name: "Glycol Ether PM",
      vendor: "LG Chem",
      density: 6495.18,
      viscosity: 72.12,
      packaging: "Bag",
      pack_size: 250,
      unit: "kg",
      quantity: 8749.54,
    },
    {
      id: 8,
      chemical_name: "Benzene",
      vendor: "Chevron",
      density: 879.32,
      viscosity: 12.5,
      packaging: "Drum",
      pack_size: 200,
      unit: "L",
      quantity: 5000.0,
    },
    {
      id: 9,
      chemical_name: "Hydrochloric Acid",
      vendor: "BASF",
      density: 1001.0,
      viscosity: 1.92,
      packaging: "Barrel",
      pack_size: 180,
      unit: "L",
      quantity: 7500.12,
    },
    {
      id: 10,
      chemical_name: "Acetone",
      vendor: "DowDuPont",
      density: 784.9,
      viscosity: 3.2,
      packaging: "Drum",
      pack_size: 220,
      unit: "L",
      quantity: 5500.34,
    },
    {
      id: 11,
      chemical_name: "Sulfuric Acid",
      vendor: "Bayer",
      density: 1840.0,
      viscosity: 26.7,
      packaging: "Barrel",
      pack_size: 150,
      unit: "L",
      quantity: 6200.4,
    },
    {
      id: 12,
      chemical_name: "Ethylene Glycol",
      vendor: "Shell",
      density: 1113.2,
      viscosity: 16.1,
      packaging: "Drum",
      pack_size: 180,
      unit: "L",
      quantity: 4500.2,
    },
    {
      id: 13,
      chemical_name: "Methanol",
      vendor: "BP",
      density: 791.8,
      viscosity: 0.59,
      packaging: "Drum",
      pack_size: 250,
      unit: "L",
      quantity: 6300.75,
    },
    {
      id: 14,
      chemical_name: "Sodium Hydroxide",
      vendor: "ExxonMobil",
      density: 2130.1,
      viscosity: 47.8,
      packaging: "Bag",
      pack_size: 120,
      unit: "kg",
      quantity: 9000.6,
    },
    {
      id: 15,
      chemical_name: "Chloroform",
      vendor: "DuPont",
      density: 1478.2,
      viscosity: 0.54,
      packaging: "Bottle",
      pack_size: 50,
      unit: "L",
      quantity: 3200.9,
    },
  ];

  let selectedRow = null; // Track which row is selected
  const tableBody = document.querySelector("#chemicalTable tbody");

  // Function to create the table rows
  function createTableRows(data) {
    tableBody.innerHTML = ""; // Clear table body

    data.forEach((item, index) => {
      const row = document.createElement("tr");
      row.setAttribute("data-index", index);

      row.setAttribute("data-index", index);

      row.innerHTML = `
        <th scope="row"><i class="bi bi-check"></i></th>
        <td contenteditable="true" class="editable-cell">${item.id} ${item.chemical_name}</td>
        <td contenteditable="true" class="editable-cell">${item.vendor}</td>
        <td><input type="number" class="editable-cell density-input form-control" value="${item.density}"></td>
        <td><input type="number" class="editable-cell viscosity-input form-control" value="${item.viscosity}"></td>
        <td contenteditable="true" class="editable-cell">${item.packaging}</td>
        <td contenteditable="true" class="editable-cell">${item.pack_size}</td>
        <td contenteditable="true" class="editable-cell">${item.unit}</td>
        <td><input type="number" class="editable-cell quantity-input form-control" value="${item.quantity}"></td>
      `;
      // Click event to select row
      row.addEventListener("click", () => {
        if (selectedRow !== null) {
          selectedRow.classList.remove("selected-row");
        }
        row.classList.add("selected-row");
        selectedRow = row;
      });

      tableBody.appendChild(row);
    });
  }

  // Initial table rendering
  createTableRows(chemicalData);

  // Add Row
  document.getElementById("addRow").addEventListener("click", () => {
    const newRow = {
      id: chemicalData.length + 1,
      chemical_name: "New Chemical",
      vendor: "New Vendor",
      density: 0,
      viscosity: 0,
      packaging: "N/A",
      pack_size: 0,
      unit: "N/A",
      quantity: 0,
    };
    chemicalData.push(newRow);
    createTableRows(chemicalData);
    alert("New row added!");
  });

  // Move selected row up
  document.getElementById("moveUp").addEventListener("click", () => {
    if (selectedRow) {
      const index = selectedRow.getAttribute("data-index");
      if (index > 0) {
        [chemicalData[index], chemicalData[index - 1]] = [
          chemicalData[index - 1],
          chemicalData[index],
        ];
        createTableRows(chemicalData);
        alert("Row moved up!");
      }
    }
  });

  // Move selected row down
  document.getElementById("moveDown").addEventListener("click", () => {
    if (selectedRow) {
      const index = selectedRow.getAttribute("data-index");
      if (index < chemicalData.length - 1) {
        [chemicalData[index], chemicalData[index + 1]] = [
          chemicalData[index + 1],
          chemicalData[index],
        ];
        createTableRows(chemicalData);
        alert("Row moved down!");
      }
    }
  });

  // Delete selected row
  document.getElementById("deleteRow").addEventListener("click", () => {
    if (selectedRow) {
      const index = selectedRow.getAttribute("data-index");
      chemicalData.splice(index, 1);
      createTableRows(chemicalData);
      selectedRow = null; // Deselect after deleting
      alert("Row deleted!");
    }
  });

  // Refresh Data
  document.getElementById("refreshData").addEventListener("click", () => {
    createTableRows(chemicalData);
    alert("Data refreshed!");
  });

  // // Save Data (Optional, for now just a console log)
  document.getElementById("saveData").addEventListener("click", async () => {
    try {
      console.log("Data Saved", chemicalData);
    } catch (error) {
      console.error("Error saving data:", error);
    }
    alert("Data saved successfully!");
  });

  // Inline Editing: Update the data on cell change
  document.addEventListener("input", function (e) {
    if (e.target.classList.contains("editable-cell")) {
      const rowIndex = e.target.parentElement.getAttribute("data-index");
      const field = e.target.cellIndex; // Use index to map to data field
      const value = e.target.innerText;

      switch (field) {
        case 1:
          chemicalData[rowIndex].chemical_name = value;
          break;
        case 2:
          chemicalData[rowIndex].vendor = value;
          break;
        case 3:
          chemicalData[rowIndex].density = parseFloat(value);
          break;
        case 4:
          chemicalData[rowIndex].viscosity = parseFloat(value);
          break;
        case 5:
          chemicalData[rowIndex].packaging = value;
          break;
        case 6:
          chemicalData[rowIndex].pack_size = parseFloat(value);
          break;
        case 7:
          chemicalData[rowIndex].unit = value;
          break;
        case 8:
          chemicalData[rowIndex].quantity = parseFloat(value);
          break;
      }
    }
  });
});
