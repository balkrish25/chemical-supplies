# Chemical Inventory Management

## Overview
This application manages chemical inventory supplies, allowing users to add, edit, delete, and sort data for chemical supplies. The user can interact with a toolbar to manipulate table rows.

## Design Approach
1. **HTML and Bootstrap**: Used for the user interface, ensuring responsive design across devices.
2. **JavaScript for Dynamic Functionality**: The table is dynamically populated using JavaScript to allow adding, editing, and deleting of rows. Rows can be moved up or down, and inline editing is supported.
3. **Editable Table**: Rows in the table are content-editable for ease of inline data modification.
4. **Error Handling**: Inline editing updates are validated and error handling is incorporated to ensure proper data types are entered (e.g., numbers for density and viscosity).
5. **CSS for Styling**: Custom styles are added to enhance table appearance and make the UI more user-friendly.

## Code Choices
1. **Bootstrap Icons**: Icons were used for the toolbar buttons, making the interface more intuitive.
2. **Event Listeners**: JavaScript event listeners were added for toolbar buttons to handle row manipulation.
3. **Content Editable**: The table cells were made editable using the `contenteditable` attribute to allow for inline data modifications.
4. **Dynamic Rendering**: Table rows are generated dynamically based on JSON data, ensuring flexibility in handling different data sets.

## Future Enhancements
- Convert the application into a Progressive Web App (PWA).
- Add data persistence using local storage or a backend database.
