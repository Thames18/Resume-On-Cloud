document.addEventListener('DOMContentLoaded', function(){
    fetch('https://8xit0s9q11.execute-api.ca-central-1.amazonaws.com/Counter/')
    .then(response => response.json())
    .then(data => {
        let visitor_count = data.updated_total_count;

        document.querySelector('#footer').innerHTML = `This resume was seen by ${visitor_count} curious minds!`;
    })
    .catch(error => {
        console.log('Error:', error);
    });
});
