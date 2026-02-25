// Event Detail Modal
const modal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalVideoFrame = document.getElementById('modalVideoFrame');
const closeModalBtn = document.getElementById('closeModal');

// Event cards data (same as HTML)
const eventData = {
  '1': { videoId: 'dQw4w9WgXcQ' },
  '2': { videoId: 'jNQXAC9IVRw' },
  '3': { videoId: 'gWzqJLuPe4s' }
};

// Open modal when clicking event card
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach(card => {
  card.addEventListener('click', () => {
    const eventId = card.getAttribute('data-event-id');
    const eventTitle = card.getAttribute('data-event-title');
    const eventDate = card.getAttribute('data-event-date');
    const eventType = card.getAttribute('data-event-type');
    
    // Update modal
    modalTitle.textContent = eventTitle;
    modalMeta.textContent = `${eventDate} · ${eventType}`;
    
    // Set video
    const videoId = eventData[eventId]?.videoId || 'dQw4w9WgXcQ';
    modalVideoFrame.src = `https://www.youtube.com/embed/${videoId}`;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
function closeEventModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  modalVideoFrame.src = '';
}

closeModalBtn.addEventListener('click', closeEventModal);

// Close on outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeEventModal();
  }
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeEventModal();
  }
});

// Filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Search
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.toLowerCase();
      if (query) {
        console.log('Search:', query);
      }
    }
  });
}