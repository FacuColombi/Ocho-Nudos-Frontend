import fetchController from './fetchController.js';

const reviewsController = (() => {

    async function getReviews() {
        debugger;
        const response = await fetchController.execute('https://ocho-nudos-backend.onrender.com/reviews');
        return response;
    }

    return {
       getReviews
    }
})();

export default reviewsController;