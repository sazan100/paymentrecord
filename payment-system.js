// Function to show customer details modal
function showCustomerDetails(customerId) {
    // Get the modal element
    const modal = document.getElementById('customerModal');
    
    // Show the modal
    modal.classList.add('active');
    
    // Here you would typically fetch customer data based on the customerId
    console.log(`Showing details for customer: ${customerId}`);
    
    // For demonstration, we'll just update the customer ID in the modal
    const customerIdElements = document.querySelectorAll('.info-value');
    if (customerIdElements.length > 0) {
        customerIdElements[0].textContent = customerId;
    }
}

// Function to close customer details modal
function closeCustomerDetails() {
    const modal = document.getElementById('customerModal');
    modal.classList.remove('active');
}

// Function to switch tabs in the customer modal
function switchTab(tabName) {
    // Remove active class from all tabs and tab contents
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and its content
    const selectedTab = document.querySelector(`.tab[onclick="switchTab('${tabName}')"]`);
    const selectedContent = document.getElementById(`${tabName}-tab`);
    
    if (selectedTab) selectedTab.classList.add('active');
    if (selectedContent) selectedContent.classList.add('active');
}

// Function to handle filter buttons
function filterPayments(status) {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    
    // Remove active class from all buttons
    filterButtons.forEach(button => button.classList.remove('active'));
    
    // Add active class to clicked button
    const clickedButton = event.target;
    clickedButton.classList.add('active');
    
    console.log(`Filtering payments by status: ${status}`);
    
    // Here you would typically filter the table rows based on status
    // This is just a placeholder for demonstration
}

// Function to handle pagination
function goToPage(page) {
    // Get all page buttons
    const pageButtons = document.querySelectorAll('.page-button');
    
    // Remove active class from all buttons
    pageButtons.forEach(button => button.classList.remove('active'));
    
    // Add active class to clicked button
    const clickedButton = event.target;
    clickedButton.classList.add('active');
    
    console.log(`Going to page: ${page}`);
    
    // Here you would typically update the table data based on the page
}

// Function to handle search input
function searchCustomers() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim();
    
    console.log(`Searching for: ${searchTerm}`);
    
    // Here you would typically filter the table rows based on the search term
}

// Function to handle export button
function exportData() {
    console.log('Exporting data as CSV');
    // Here you would implement the CSV export functionality
    alert('Exporting data as CSV...');
}

// Function to add a new customer
function addCustomer() {
    const customerName = document.getElementById('customerName').value;
    const contactPerson = document.getElementById('contactPerson').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerAddress = document.getElementById('customerAddress').value;

    // Validate input data
    if (!customerName || !contactPerson || !customerEmail || !customerPhone || !customerAddress) {
        alert('Please fill in all fields.');
        return;
    }

    console.log('Add Customer function called'); // Added log statement for debugging
    console.log('New Customer:', {
        customerName,
        contactPerson,
        customerEmail,
        customerPhone,
        customerAddress
    });

    // Optionally, clear the form fields after submission
    document.getElementById('customerName').value = '';
    document.getElementById('contactPerson').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerAddress').value = '';
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for adding a customer
    const addCustomerButton = document.getElementById('addCustomerButton');
    console.log('Add Customer button found'); // Added log statement for debugging

    addCustomerButton.addEventListener('click', addCustomer);
    
    // Add click handlers to filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const status = this.textContent.toLowerCase();
            filterPayments(status);
        });
    });
    
    // Add click handlers to pagination buttons
    const pageButtons = document.querySelectorAll('.page-button');
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.textContent;
            goToPage(page);
        });
    });
    
    // Add event listener to search input
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', searchCustomers);
    }
    
    // Add event listener to export button
    const exportButton = document.querySelector('.export-button');
    if (exportButton) {
        exportButton.addEventListener('click', exportData);
    }
    
    // Add event listeners to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(mi => mi.classList.remove('active'));
            // Add active class to clicked menu item
            this.classList.add('active');
            
            console.log(`Navigating to: ${this.textContent.trim()}`);
        });
    });
    
    // Add event listeners to action buttons in the modal
    const actionButtons = document.querySelectorAll('.action-button, .secondary-button');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Send Payment Reminder')) {
                alert('Payment reminder sent!');
            } else if (this.textContent.includes('Generate Statement')) {
                alert('Statement generated!');
            } else if (this.textContent.includes('Search')) {
                alert('Searching for customers with the specified criteria...');
            } else if (this.textContent.includes('Reset')) {
                // Reset the form
                const formInputs = document.querySelectorAll('.form-input, .form-select');
                formInputs.forEach(input => {
                    if (input.type === 'text' || input.type === 'number') {
                        input.value = '';
                    } else if (input.tagName === 'SELECT') {
                        input.selectedIndex = 0;
                    }
                });
            }
        });
    });
});
