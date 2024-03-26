const initialData = {
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: 'XXXXXXXX',
        role: 'admin',
        image: 'user.jpg',
      },
      {
        id: 2,
        name: 'Peter Gomez',
        email: 'peter@example.com',
        password: 'XXXXXXXX',
        role: 'user',
        image: 'user.jpg',
      },
      {
        id: 3,
        name: 'Jony Plo',
        email: 'jony@example.com',
        password: 'XXXXXXXX',
        role: 'user',
        image: 'user.jpg',
      },
    ],
    movies: [
      {
        id: 1,
        name: 'Star Wars',
        year: 1977,
        director: 'George Lucas',
        rating: 8.7,
        watched: true,
        image: 'starwars.jpg',
      },
      {
        id: 2,
        name: 'The Matrix',
        year: 1999,
        director: 'The Wachowski Brothers',
        rating: 8.7,
        watched: false,
        image: 'matrix.jpg',
      },
      {
        id: 3,
        name: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        rating: 9.2,
        watched: false,
        image: 'godfather.jpg',
      },
      {
        id: 4,
        name: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        rating: 9.0,
        watched: false,
        image: 'darkknight.jpg',
      },
    ],
  }

  localStorage.setItem('users', JSON.stringify(initialData.users));
  localStorage.setItem('movies', JSON.stringify(initialData.movies));
