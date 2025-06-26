const images = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    caption: 'Misty Forest Morning',
  },
  {
    url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    caption: 'Mountain Lake Reflections',
  },
  {
    url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    caption: 'Sunset Over the Hills',
  },
  {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    caption: 'River Through the Woods',
  },
  {
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    caption: 'Wildflower Meadow',
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    caption: 'Majestic Waterfall',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    caption: 'Ocean Waves at Dawn',
  },
  {
    url: 'https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=800&q=80',
    caption: 'Pine Forest Path',
  },
  {
    url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    caption: 'Golden Autumn Leaves',
  },
  {
    url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    caption: 'Mountain Stream',
  },
  {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    caption: 'Desert Dunes',
  },
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = 'flex';
  updateModal();
}

function closeModal() {
  modal.style.display = 'none';
}

function updateModal() {
  modalImg.src = images[currentIndex].url;
  captionText.textContent = images[currentIndex].caption;
  prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
  nextBtn.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateModal();
  }
}

function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateModal();
  }
}
gallery.innerHTML = images
  .map(
    (img, idx) =>
      `<img src="${img.url}" alt="${img.caption}" data-index="${idx}" tabindex="0">`
  )
  .join('');

gallery.querySelectorAll('img').forEach((img) => {
  img.addEventListener('click', (e) => {
    openModal(Number(img.dataset.index));
  });
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      openModal(Number(img.dataset.index));
    }
  });
});
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

window.addEventListener('keydown', (e) => {
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'Escape') closeModal();
  }
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
}); 
