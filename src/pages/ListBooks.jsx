import { gql, useQuery } from '@apollo/client'

const GET_BOOKS = gql`
    query getBooks {
    books {
      id
      title
      author
    }
  }
`

const ListBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error.message}</h1>

  const {books} = data

  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h2>Book name: {book.title}</h2>
            <p>Author: {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListBooks