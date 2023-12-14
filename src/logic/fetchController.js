const fetchController = (() => {

    async function execute(url, method = "GET", data = null, sendAsForm = false, token = null, authType = 1) {
        let resultFetch = null;

        let headers = {
            'Content-Type': 'application/json'
        };

        if (token != null && authType == 1) {
            headers.Authorization = `Bearer ${token}`;
        }
        else if (token != null && authType == 2) {
            headers.Authorization = `Basic ${token}`;
        }
        
        let properties = { method: method, headers: headers };

        if (method !== "GET") properties.body = JSON.stringify(data);

        if (sendAsForm) {
            properties = { method: method};
            properties.body = data;
        }

        const result = await fetch(url, properties);
        if (!result) return null;
        
        resultFetch = await result.json();

        if(typeof resultFetch != "object") resultFetch = JSON.parse(resultFetch);
        
        return resultFetch;
    }

    return {
        execute: execute
    }
})();

export default fetchController;