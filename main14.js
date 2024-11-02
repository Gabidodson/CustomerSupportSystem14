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

//Display Tickets Dynamically on the Page
function displayTickets(tickets){
    const container = document.getElementById('tickets-container');
    tickets.forEach(ticket =>{
        const ticketElement = document.createElement('div');
        ticketElement.className = 'ticket';
        ticketElement.innerHTML =`
        <h3>Ticket #${ticket.id}</h3>
        <p><strong>Customer ID:</strong> ${ticket.userID}</p>
        <p><strong>Issue:</strong>${ticket.title}</p>
        <p><strong>Details:</strong> ${ticket.body}</p>
        `;
        container.appendChild(ticketElement);
    });
}
async function initializeTicketSystem() {
    try{
        const tickets = await fetchTickets();
        displayTickets(tickets);
    }catch (error){
        console.error('Error starting ticket system:',error);
    }
    
}
initializeTicketSystem();
