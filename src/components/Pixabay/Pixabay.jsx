import axios from 'axios';

const getImages = async (page, value) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${value}&page=${page}&key=43730025-556a074af91fe19755533a54c&image_type=photo&orientation=horizontal&per_page=12`
    );

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export { getImages };
