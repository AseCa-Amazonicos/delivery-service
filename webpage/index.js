document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');
    const orderStatusSelect = document.getElementById('order-id');

    // Function to populate the select box with options from API
    function populateOrderStatus() {
        fetch('http://localhost:8080/api/delivery')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                data.data.forEach(status => {
                    const option = document.createElement('option');
                    option.value = status;
                    option.textContent = status;
                    orderStatusSelect.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching order statuses:', error);
            });
    }

    // Populate the order status options when the page loads
    populateOrderStatus();

    // Handle form submission
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const deliveryId = document.getElementById('order-id').value;
        const deliveryStatus = document.getElementById('order-status').value;

        const data = {
            deliveryId: deliveryId,
            deliveryStatus: deliveryStatus
        };

        fetch('http://localhost:8080/api/delivery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // Handle the response data here
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error here
        });
    });
});
