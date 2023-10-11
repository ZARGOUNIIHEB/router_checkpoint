import { v4 as uuidv4 } from 'uuid';

const Movie = [
    {
        id: uuidv4(),
        title: 'GodFather 1',
        description: 'GodFather 1 Description',
        posterURL: 'https://chiswickcalendar.co.uk/wp-content/uploads/2022/03/The-Godfather-1.jpg',
        trailerURL: 'https://www.youtube.com/embed/UaVTIH8mujA?si=7-wzZn1CPxBpP1WX',
        rating: 10,
        checked: true
    },
    {
        id: uuidv4(),
        title: 'GodFather 2',
        description: 'GodFather 2 Description',
        posterURL: 'https://posterspy.com/wp-content/uploads/2023/04/TheGodfatherPartII_Poster_VAR.jpg',
        trailerURL: 'https://www.youtube.com/embed/9O1Iy9od7-A?si=63_a4mb4E0kj7Z2O',
        rating: 9.2,
        checked: false
    },
    {
        id: uuidv4(),
        title: 'GodFather 3',
        description: 'GodFather 3 Description',
        posterURL: 'https://flxt.tmsimg.com/assets/p12911_p_v8_at.jpg',
        trailerURL: 'https://www.youtube.com/embed/nWxDwvLhkDw?si=8zmSPsAOdKzzyvt6',
        rating: 7.5,
        checked: true
    },
    {
        id: uuidv4(),
        title: 'The Platform',
        description: 'The Platform Description',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMzllNmRjYWItNjlhNS00MjcyLWIyODEtMTg0ZjBiNTNhNzQwXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
        trailerURL: 'https://www.youtube.com/embed/RlfooqeZcdY?si=2k0FaiNqgQPkF4cK',
        rating: 7,
        checked: true
    },
    {
        id: uuidv4(),
        title: 'The Next Three Days ',
        description: 'The Next Three Days Description',
        posterURL: 'https://flxt.tmsimg.com/assets/p8129788_p_v8_ae.jpg',
        trailerURL: 'https://www.youtube.com/embed/p4z8XM6oTm8?si=13hppd-dgKryV6Rk',
        rating: 7.6,
        checked: false
    },
    {
        id: uuidv4(),
        title: 'John Wick 3 ',
        description: 'John Wick 3 Description',
        posterURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b3c40a78219513.5cc812e957de6.jpg',
        trailerURL: 'https://www.youtube.com/embed/M7XM597XO94?si=QFEmnJbs4y4lh4BU',
        rating: 7,
        checked: true
    },
    {
        id: uuidv4(),
        title: 'The Bourne Identity ',
        description: 'The Bourne Identity Description',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BNGJlYjVkMjQtN2NlZC00NTJhLThmZjItMTRlZDczMmE3YmI3XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_.jpg',
        trailerURL: 'https://www.youtube.com/embed/ZT2ZxjUjSo0?si=pcYbfFNfeCoUDcGQ',
        rating: 6.9,
        checked: true
    },

];

export default Movie;
