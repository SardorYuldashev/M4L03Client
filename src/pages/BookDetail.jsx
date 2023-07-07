import { gql, useQuery } from '@apollo/client'

const GET_BOOK = gql`
  query getBookById($bookId: ID!) {
    book(id: $bookId) {
      id
      title
      author
    }
  }
`

const BookDetail = () => {
  const { loading, error, data } = useQuery(GET_BOOK, { variables: { bookId: '2' } })

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error.message}</h1>

  const { book } = data

  return (
    <div>
      <h2>Book name: {book.title}</h2>
      <p>Author: {book.author}</p>
    </div>
  )
}

export default BookDetail