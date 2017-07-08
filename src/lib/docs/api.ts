import markdownLoader from './markdownLoader'

const api = () => {
  const markdown = markdownLoader()

  const react = markdown.filter((file) => file.path.includes('react'))

  return {
    react: {
      basics: react.filter((file) => file.path.includes('basics'))
    }
  }
}

export default api
