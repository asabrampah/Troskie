document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const fareForm = document.getElementById('fareForm');
    
    const messageContainer = document.getElementById('messageContainer');

    
    const fareInput = document.getElementById('fare');

    // Add event listener for form submission
    fareForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission from reloading the page
  
      // Get user input values
      const currentLocation = document.getElementById('currentLocation').value;
      const destination = document.getElementById('destination').value;
  
      messageContainer.textContent = 'Fetching fare...';

      // You can perform further validation on the user input here if needed
  
      // Call a function to handle fetching the fare based on the user input
      fetchFare(currentLocation, destination);
    });
  });
  
  function fetchFare(currentLocation, destination) {
    // Create an object to hold the user input data
    const inputData = {
      currentLocation: currentLocation,
      destination: destination,
    };
  
    // Make an HTTP POST request to send the user input data to the server
    fetch('/fetch_fare.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server, which should contain the fare data
        displayFare(data.fare);
      })
      .catch((error) => {
        console.error('Error fetching fare:', error);
        // Handle any errors here, e.g., show an error message to the user
      });
  }
  
  function displayFare(fare) {
    // Select the input element for "Fare"
    const fareInput = document.getElementById('fare');
  
    // Set the value of the input box to the fetched fare
    fareInput.value = fare;
  }





// document.addEventListener('DOMContentLoaded', function () {
//     // Select the form element
//     const fareForm = document.getElementById('fareForm');
  
//     // Add event listener for form submission
//     fareForm.addEventListener('submit', function (event) {
//       event.preventDefault(); // Prevent form submission from reloading the page
  
//       // Get user input values
//       const currentLocation = document.getElementById('currentLocation').value;
//       const destination = document.getElementById('destination').value;
  
//       // You can perform further validation on the user input here if needed
  
//       // Call a function to handle fetching the fare based on the user input
//       fetchFare(currentLocation, destination);
//     });
//   });

//   function fetchFare(currentLocation, destination) {
//     // Create an object to hold the user input data
//     const inputData = {
//       currentLocation: currentLocation,
//       destination: destination,
//     };
//     fetch('/fetch_fare.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(inputData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Handle the response from the server, which should contain the fare data
//           displayFare(data.fare);
//         })
//         .catch((error) => {
//           console.error('Error fetching fare:', error);
//           // Handle any errors here, e.g., show an error message to the user
//         });
// }
// function displayFare(fare) {
//     const fareInput = document.getElementById('fare');

//       fareInput.value = fare;
//   }