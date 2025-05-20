import axios from 'axios';

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const BASE_URL = 'https://api.unsplash.com/search/photos';

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

export interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
}

export async function fetchImages(query: string, page: number = 1): Promise<FetchImagesResponse> {
  const perPage = 12;

  try {
    const response = await axios.get<FetchImagesResponse>(BASE_URL, {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('❌ Failed to fetch images:', error);
    throw new Error('Failed to fetch images from Unsplash');
  }
}
