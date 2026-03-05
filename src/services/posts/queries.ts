import api from '../api/index'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const fetchPosts = async () => {
  const response = await api.get('posts')
  return response.data
}
