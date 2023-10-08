const handleDelete = async (animeId) => {
  if (window.confirm("Do you want to remove?")) {
    try {
      await fetch(`http://localhost:3000/anime/${animeId}`, {
        method: "DELETE"
      });
      window.location.reload();
    } catch (error) {
      console.error('Error deleting anime:', error.message);
    }
  }
}

export default handleDelete;