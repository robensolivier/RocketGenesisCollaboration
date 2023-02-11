fetch("http://99.79.77.144:3000/api/agents")
  .then((response) => response.json())
  .then((json) => {

// 2. Create a variable to store HTML table headers and add colors
    let li = `<table style="width:100%">
                <tr>
                  <th style="background-color:red; color:white">First Name</th>
                  <th style="background-color:red; color:white">Last Name</th>
                  <th style="background-color:red; color:white">User Rating</th>
                  <th style="background-color:red; color:white">Fee</th>
                </tr>`;

  //3. Loop through each data and add a table row and display agents = or higher than 95

    json.forEach((user) => {
      if (user.rating > 94) {
        li += `<tr style="background-color:blue; color:white">
                <td>${user.first_name}</td>
                <td>${user.last_name} </td>
                <td>${user.rating}</td>     
                <td>${user.fee}</td>
              </tr>`;
      }
    });
    li += `</table>`;

    // Display result

    document.getElementById("agents").innerHTML = li;
  });