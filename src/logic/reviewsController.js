import fetchController from './fetchController.js';

const reviewsController = (() => {

    async function getReviews() {
        debugger;
        const response = await fetchController.execute('http://localhost:3000/reviews');
        return response;
    }

    return {
       getReviews
    }
})();

export default reviewsController;