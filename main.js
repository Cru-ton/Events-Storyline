// Main JavaScript for Events Storyline

// Sample events data
const events = [
    {
        id: 1,
        title: "Tech Conference 2026",
        date: "2026-03-15",
        location: "San Francisco, CA",
        description: "Join us for an exciting tech conference with industry leaders and innovators.",
        emoji: "🖥️"
    },
    {
        id: 2,
        title: "Community Meetup",
        date: "2026-03-22",
        location: "New York, NY",
        description: "Connect with fellow community members and share your experiences.",
        emoji: "🤝"
    },
    {
        id: 3,
        title: "Startup Pitch Night",
        date: "2026-04-05",
        location: "Los Angeles, CA",
        description: "Discover innovative startups and network with entrepreneurs.",
        emoji: "🚀"
    },
    {
        id: 4,
        title: "Web Development Workshop",
        date: "2026-04-12",
        location: "Boston, MA",
        description: "Learn the latest web development techniques and best practices.",
        emoji: "💻"
    },
    {
        id: 5,
        title: "Annual Gala",
        date: "2026-05-20",
        location: "Chicago, IL",
        description: "Celebrate our organization's achievements with members and partners.",
        emoji: "🎉"
    },
    {
        id: 6,
        title: "Networking Brunch",
        date: "2026-06-10",
        location: "Seattle, WA",
        description: "Casual networking event over brunch with industry professionals.",
        emoji: "🥐"
    }
];

// DOM Elements
const eventsGrid = document.querySelector('.events-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Function to render events
function renderEvents(eventsToDisplay = events) {
    if (!eventsGrid) return;
    
    eventsGrid.innerHTML = '';
    
    eventsToDisplay.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-image">${event.emoji}</div>
            <div class="event-content">
                <div class="event-date">${formatDate(event.date)}</div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <div class="event-location">📍 ${event.location}</div>
                <button class="btn" onclick="viewEvent(${event.id})">View Details</button>
            </div>
        `;
        eventsGrid.appendChild(eventCard);
    });
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to view event details
function viewEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        alert(`Event: ${event.title}\nDate: ${formatDate(event.date)}\nLocation: ${event.location}\n\n${event.description}`);
    }
}

// Function to filter events by month
function filterEventsByMonth(month) {
    if (month === 'all') {
        renderEvents(events);
        return;
    }
    
    const filtered = events.filter(event => {
        const eventMonth = new Date(event.date).getMonth() + 1;
        return eventMonth === parseInt(month);
    });
    
    renderEvents(filtered);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
    
    // Add filter button listeners if they exist
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterEventsByMonth(e.target.dataset.month);
        });
    });
});

// Search functionality
function searchEvents(query) {
    const searchQuery = query.toLowerCase();
    const filtered = events.filter(event => 
        event.title.toLowerCase().includes(searchQuery) ||
        event.description.toLowerCase().includes(searchQuery) ||
        event.location.toLowerCase().includes(searchQuery)
    );
    renderEvents(filtered);
}