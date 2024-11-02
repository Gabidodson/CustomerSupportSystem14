//Fetch Tickets Using Async/Await and Handle Errors
async function fetchTickets () {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const tickets = await response.json();
        if(!tickets || tickets.length ===0){
            throw new Error('Not Found');
        }
        return tickets;
    }catch (error){
        const errorContainer = document.getElementById('error-container');
        errorContainer.textContent=error.message ||'Failed to get tickets';
    }
}
