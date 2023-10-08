const handleDelete = async (animeId, setAnimeData) => {
  try {
    const response = await fetch(`http://localhost:3000/anime/${animeId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Refresh anime data after successful deletion
    const updatedData = await response.json();
    setAnimeData(updatedData);
  } catch (error) {
    console.error('Error deleting anime:', error);
  }
};

export default handleDelete;