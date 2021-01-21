export const state = () => ({
    posts: [{
            id: 0,
            title: "post",
            image: "salmon.jpeg",
            user: "Joshua Dempsey",
            description: "Scottish Salmon with mixed vegetables",
            userImage: "1.jpeg",
            type: [{ title: "main meal" }],
            likes: 27,
            posted: "22m"
        },
        {
            id: 1,
            title: "post",
            image: "berries.jpeg",
            user: "Olivia Beveridge",
            description: "Organic Strawberries and mixed berries",
            userImage: "2.jpeg",
            type: [{ title: "snack" }],
            likes: 35,
            posted: "27m"
        },
        {
            id: 2,
            title: "post",
            image: "salad.jpeg",
            user: "Jack Darcy",
            description: "Organic mixed salad with ceasar dressing",
            userImage: "7.jpeg",
            likes: 19,
            type: [{ title: "main meal" }],
            posted: "35m"
        },
        {
            id: 3,
            title: "post",
            image: "burger.jpeg",
            user: "Ruth Thomson",
            description: "British Burger with peppers, cheese, and marinade",
            userImage: "4.jpeg",
            likes: 28,
            type: [
                { id: 0, title: "cheat day" },
                { id: 1, title: "best of British" }
            ],
            posted: "45m"
        },
        {
            id: 4,
            title: "post",
            image: "cheeseveg.jpeg",
            user: "Mairi Gibson",
            description: "Organic Strawberries and mixed berries",
            userImage: "5.jpeg",
            likes: 48,
            type: [{ title: "main meal" }],
            posted: "47m"
        },
        {
            id: 5,
            title: "post",
            image: "avocado.jpeg",
            user: "James Brand",
            description: "Smashed avocado and gourmet poached eggs",
            userImage: "6.jpeg",
            likes: 135,
            type: [{ title: "main meal" }],
            posted: "1h"
        },
        {
            id: 6,
            title: "post",
            image: "mix.jpeg",
            user: "Rachel Lane",
            description: "Organic Strawberries and mixed berries",
            userImage: "3.jpeg",
            likes: 11,
            type: [{ title: "snack" }],
            posted: "1h"
        },
        {
            id: 7,
            title: "post",
            image: "platter.jpeg",
            user: "Clive Rutherford",
            description: "A mixed continental ham and cheese platter",
            userImage: "8.jpeg",
            likes: 23,
            type: [{ title: "cheat day" }],
            posted: "1h"
        },
        {
            id: 0,
            title: "post",
            image: "salmon.jpeg",
            user: "Joshua Dempsey",
            description: "Scottish Salmon with mixed vegetables",
            userImage: "1.jpeg",
            type: [{ title: "main meal" }],
            likes: 27,
            posted: "2h"
        },
        {
            id: 1,
            title: "post",
            image: "berries.jpeg",
            user: "Olivia Beveridge",
            description: "Organic Strawberries and mixed berries",
            userImage: "2.jpeg",
            type: [{ title: "snack" }],
            likes: 35,
            posted: "2h"
        },
        {
            id: 2,
            title: "post",
            image: "salad.jpeg",
            user: "Jack Darcy",
            description: "Organic mixed salad with ceasar dressing",
            userImage: "7.jpeg",
            likes: 19,
            type: [{ title: "main meal" }],
            posted: "3h"
        },
        {
            id: 3,
            title: "post",
            image: "burger.jpeg",
            user: "Ruth Thomson",
            description: "British Burger with peppers, cheese, and marinade",
            userImage: "4.jpeg",
            likes: 28,
            type: [
                { id: 0, title: "cheat day" },
                { id: 1, title: "best of British" }
            ],
            posted: "3h"
        },
        {
            id: 4,
            title: "post",
            image: "cheeseveg.jpeg",
            user: "Mairi Gibson",
            description: "Organic Strawberries and mixed berries",
            userImage: "5.jpeg",
            likes: 48,
            type: [{ title: "main meal" }],
            posted: "4h"
        },
        {
            id: 5,
            title: "post",
            image: "avocado.jpeg",
            user: "James Brand",
            description: "Smashed avocado and gourmet poached eggs",
            userImage: "6.jpeg",
            likes: 135,
            type: [{ title: "main meal" }],
            posted: "4h"
        },
        {
            id: 6,
            title: "post",
            image: "mix.jpeg",
            user: "Rachel Lane",
            description: "Organic Strawberries and mixed berries",
            userImage: "3.jpeg",
            likes: 11,
            type: [{ title: "snack" }],
            posted: "4h"
        },
        {
            id: 7,
            title: "post",
            image: "platter.jpeg",
            user: "Clive Rutherford",
            description: "A mixed continental ham and cheese platter",
            userImage: "8.jpeg",
            likes: 23,
            type: [{ title: "cheat day" }],
            posted: "4h"
        },
        {
            id: 0,
            title: "post",
            image: "salmon.jpeg",
            user: "Joshua Dempsey",
            description: "Scottish Salmon with mixed vegetables",
            userImage: "1.jpeg",
            type: [{ title: "main meal" }],
            likes: 27,
            posted: "4h"
        },
        {
            id: 1,
            title: "post",
            image: "berries.jpeg",
            user: "Olivia Beveridge",
            description: "Organic Strawberries and mixed berries",
            userImage: "2.jpeg",
            type: [{ title: "snack" }],
            likes: 35,
            posted: "4h"
        },
        {
            id: 2,
            title: "post",
            image: "salad.jpeg",
            user: "Jack Darcy",
            description: "Organic mixed salad with ceasar dressing",
            userImage: "7.jpeg",
            likes: 19,
            type: [{ title: "main meal" }],
            posted: "5h"
        },
        {
            id: 3,
            title: "post",
            image: "burger.jpeg",
            user: "Ruth Thomson",
            description: "British Burger with peppers, cheese, and marinade",
            userImage: "4.jpeg",
            likes: 28,
            type: [
                { id: 0, title: "cheat day" },
                { id: 1, title: "best of British" }
            ],
            posted: "5h"
        },
        {
            id: 4,
            title: "post",
            image: "cheeseveg.jpeg",
            user: "Mairi Gibson",
            description: "Organic Strawberries and mixed berries",
            userImage: "5.jpeg",
            likes: 48,
            type: [{ title: "main meal" }],
            posted: "6h"
        },
        {
            id: 5,
            title: "post",
            image: "avocado.jpeg",
            user: "James Brand",
            description: "Smashed avocado and gourmet poached eggs",
            userImage: "6.jpeg",
            likes: 135,
            type: [{ title: "main meal" }],
            posted: "7h"
        },
        {
            id: 6,
            title: "post",
            image: "mix.jpeg",
            user: "Rachel Lane",
            description: "Organic Strawberries and mixed berries",
            userImage: "3.jpeg",
            likes: 11,
            type: [{ title: "snack" }],
            posted: "7h"
        },
        {
            id: 7,
            title: "post",
            image: "platter.jpeg",
            user: "Clive Rutherford",
            description: "A mixed continental ham and cheese platter",
            userImage: "8.jpeg",
            likes: 23,
            type: [{ title: "cheat day" }],
            posted: "7h"
        },
        {
            id: 0,
            title: "post",
            image: "salmon.jpeg",
            user: "Joshua Dempsey",
            description: "Scottish Salmon with mixed vegetables",
            userImage: "1.jpeg",
            type: [{ title: "main meal" }],
            likes: 27,
            posted: "8h"
        },
        {
            id: 1,
            title: "post",
            image: "berries.jpeg",
            user: "Olivia Beveridge",
            description: "Organic Strawberries and mixed berries",
            userImage: "2.jpeg",
            type: [{ title: "snack" }],
            likes: 35,
            posted: "8h"
        },
        {
            id: 2,
            title: "post",
            image: "salad.jpeg",
            user: "Jack Darcy",
            description: "Organic mixed salad with ceasar dressing",
            userImage: "7.jpeg",
            likes: 19,
            type: [{ title: "main meal" }],
            posted: "9h"
        },
        {
            id: 3,
            title: "post",
            image: "burger.jpeg",
            user: "Ruth Thomson",
            description: "British Burger with peppers, cheese, and marinade",
            userImage: "4.jpeg",
            likes: 28,
            type: [
                { id: 0, title: "cheat day" },
                { id: 1, title: "best of British" }
            ],
            posted: "9h"
        },
        {
            id: 4,
            title: "post",
            image: "cheeseveg.jpeg",
            user: "Mairi Gibson",
            description: "Organic Strawberries and mixed berries",
            userImage: "5.jpeg",
            likes: 48,
            type: [{ title: "main meal" }],
            posted: "9h"
        },
        {
            id: 5,
            title: "post",
            image: "avocado.jpeg",
            user: "James Brand",
            description: "Smashed avocado and gourmet poached eggs",
            userImage: "6.jpeg",
            likes: 135,
            type: [{ title: "main meal" }],
            posted: "10h"
        },
        {
            id: 6,
            title: "post",
            image: "mix.jpeg",
            user: "Rachel Lane",
            description: "Organic Strawberries and mixed berries",
            userImage: "3.jpeg",
            likes: 11,
            type: [{ title: "snack" }],
            posted: "10h"
        },
        {
            id: 7,
            title: "post",
            image: "platter.jpeg",
            user: "Clive Rutherford",
            description: "A mixed continental ham and cheese platter",
            userImage: "8.jpeg",
            likes: 23,
            type: [{ title: "cheat day" }],
            posted: "11h"
        }
    ]
});