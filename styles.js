document.getElementById("fetch-btn").addEventListener("click", async () => {
    const url = document.getElementById("api-url").value;
    const resultBox = document.getElementById("result");
    resultBox.innerHTML = "Loading...";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (typeof data !== 'object') {
        resultBox.innerHTML = "Invalid response.";
        return;
      }
  
      let html = "<h3>Available Endpoints:</h3><ul>";
      for (let key in data) {
        html += `<li><strong>${key}</strong>: <a href="${data[key]}" target="_blank">${data[key]}</a></li>`;
      }
      html += "</ul>";
  
      resultBox.innerHTML = html;
    } catch (err) {
      resultBox.innerHTML = "Failed to fetch data. Check your URL!";
    }
  });
  